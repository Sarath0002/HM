const express = require("express");
const cors = require("cors");
const port = 3002;
const app = express();
app.use(express.json());

const appointment = require("./appoinment");
const employeregister = require("./employeregister");
const patientdetials = require("./patientdetials");
const checktime = require("./checktime");
app.use(cors());
app.use("/appointment", appointment);
app.use("/register", employeregister);
app.use("/doctor", patientdetials);
app.use("/check", checktime);

app.listen(port, () => {
  console.log(`port is runing ${port}`);
});
