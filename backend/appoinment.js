const express = require("express");
const route = express.Router();
const client = require("./connection");
const bodyParser = require("body-parser");

const nodemailer = require("nodemailer");

// const { ObjectId } = require("mongodb");
route.use(bodyParser.json());
route.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

route.get("/", async (req, res) => {
  const data = await client
    .db("hospitalmanegement")
    .collection("bookappointment")
    .find({})
    .toArray();

  res.send(data);
  console.log("data show");
});

route.get("/:patientid", async (req, res) => {
  const { patientid } = req.params;
  const data = await client
    .db("hospitalmanegement")
    .collection("bookappointment")
    .find({ patientid })
    .toArray();
  console.log("id:", patientid);
  res.send(data);
  console.log("data show");
});

route.post("/appointment", async (req, res) => {
  try {
    const count = await client
      .db("hospitalmanegement")
      .collection("bookappointment")
      .find({})
      .toArray();
    let obj = {
      // _id: "costome123",
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      cause: req.body.cause,
      mobile: req.body.mobile,
      date: req.body.date,
      time: req.body.time,
      patientid: `op${count.length + 1}`,
    };

    if (
      await client
        .db("hospitalmanegement")
        .collection("bookappointment")
        .findOne({ email: req.body.email })
    ) {
      res.send("already user");
    } else {
      await client
        .db("hospitalmanegement")
        .collection("bookappointment")
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
        html: `<h1>Hello ${obj.name}</h1>,<h1>This is from Health Care hospital</h1>,<h1>This is your appointment id:<span style="color:red">${obj.patientid}</span>.</h1>`,
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
    res.send("post err", error);
  }
});

module.exports = route;
