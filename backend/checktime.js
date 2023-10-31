const express = require("express");
const routem = express.Router();
const client = require("./connection");
// const { ObjectId } = require("mongodb");

routem.get("/check", async (req, res) => {
  const data = await client
    .db("hospitalmanegement")
    .collection("checktime")
    .find({})
    .toArray();

  res.send(data);
  console.log("data show");
});
routem.post("/checkpost/:empid", async (req, res) => {
  const { empid } = req.params;
  let obj = {
    empid: empid,
    // checkintime: req.body.checkintime,
    checkindate: req.body.checkindate,
    // checkouttime: req.body.checkouttime,
    // checkoutdate: req.body.checkoutdate,
    hour: req.body.hour,
  };

  try {
    const data = await client
      .db("hospitalmanegement")
      .collection("checktime")
      .insertOne(obj);

    res.send(data);
    console.log("updated");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = routem;
