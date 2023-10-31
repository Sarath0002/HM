const express = require("express");
const routem = express.Router();
const client = require("./connection");
const bodyParser = require("body-parser");

const nodemailer = require("nodemailer");

// const { ObjectId } = require("mongodb");
routem.use(bodyParser.json());
routem.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// const { ObjectId } = require("mongodb");

routem.get("/employe", async (req, res) => {
  const data = await client
    .db("hospitalmanegement")
    .collection("employeregister")
    .find({})
    .toArray();

  res.send(data);
  console.log("data show");
});

routem.get("/employe/:empid", async (req, res) => {
  const { empid } = req.params;
  const data = await client
    .db("hospitalmanegement")
    .collection("employeregister")
    .find({ empid })
    .toArray();

  res.send(data);
  console.log("data show");
});
routem.post("/employeregister", async (req, res) => {
  try {
    const count = await client
      .db("hospitalmanegement")
      .collection("employeregister")
      .find({})
      .toArray();
    console.log(count.length + 1);
    let obj = {
      name: req.body.name,
      dob: req.body.dob,
      mobilenumber: req.body.mobilenumber,
      email: req.body.email,
      gender: req.body.gender,
      employerole: req.body.employerole,
      bloodgroup: req.body.bloodgroup,
      address: req.body.address,
      password: "admin123",
      empid: `emp${count.length + 1}`,
    };
    if (
      await client
        .db("hospitalmanegement")
        .collection("bookappointment")
        .findOne({ email: req.body.email })
    ) {
      res.send("already employer is register that id");
    } else {
      await client
        .db("hospitalmanegement")
        .collection("employeregister")
        .insertOne(obj);
      res.send("data posted");
      // nodemail
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "yesitsmesarath@gmail.com",
          pass: "lafr gkmw kqxf nkor",
        },
      });
      const mailOptions = {
        from: "yesitsmesarath@gmail.com",
        to: req.body.email,
        subject: "health care hospital",
        html: `<h1>Welcome ${obj.name}</h1>,
      <h1>your role ${obj.employerole}</h1>
      <h1>This is from Health Care hospital</h1>,<h1>This is your Employer id:<span style="color:red">${obj.empid}</span><br></br></h1>
      <h1>your password <span style="color:red">${obj.password}</span></h1>
      <p>Dont Share your password </p>`,
      };

      transporter.sendMail(mailOptions, (emailErr) => {
        if (emailErr) {
          // res.send("Error sending email");
          console.log("error", emailErr);
        } else {
          res.status(200).send("Email sent successfully");
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.send("post err");
  }
});
routem.put("/update/:empid", async (req, res) => {
  const { empid } = req.params;

  try {
    const data = await client
      .db("hospitalmanegement")
      .collection("employeregister")
      .updateOne(
        { empid: empid },
        // { $set: { obj } }
        {
          $set: {
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            mobilenumber: req.body.mobilenumber,
          },
        }
      );

    res.send(data);
    console.log("updated");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
routem.post("/leave", async (req, res) => {
  try {
    let obj = {
      name: req.body.name,
      empid: req.body.empid,
      reson: req.body.reson,
      fromdate: req.body.fromdate,
      todate: req.body.todate,
    };

    await client.db("hospitalmanegement").collection("Leave").insertOne(obj);
    res.send("data posted");
  } catch (error) {
    console.log(error);
    res.send("post err");
  }
});

module.exports = routem;
