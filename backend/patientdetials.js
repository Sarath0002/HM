const express = require("express");
const routen = express.Router();
const client = require("./connection");
routen.get("/patient", async (req, res) => {
  const data = await client
    .db("hospitalmanegement")
    .collection("patientdetials")
    .find({})
    .toArray();
  res.send(data);
  console.log("patient data show");
});

routen.post("/patientpost", async (req, res) => {
  try {
    let object = {
      patientid: req.body.patientid,
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      cause: req.body.cause,
      bp: req.body.bp,
      temp: req.body.temp,
      height: req.body.height,
      weight: req.body.weight,
      bmi: req.body.bmi,
      tabletdetials: [req.body.tabletdetials],
      scandeatials: req.body.scandeatials,
      nextdate: req.body.nextdate,
    };
    await client
      .db("hospitalmanegement")
      .collection("patientdetials")
      .insertOne(object);
    res.send("data posted");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
module.exports = routen;
