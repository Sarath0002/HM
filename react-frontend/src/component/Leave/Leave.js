import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./leave.css";
const Leave = () => {
  const [data, setdata] = useState([
    {
      name: "",
      empid: "",
    },
  ]);
  const location = useLocation();
  useEffect(() => {
    if (sessionStorage.getItem("ID")) {
      axios
        .get(
          `http://localhost:3002/register/employe/${sessionStorage.getItem(
            "ID"
          )}`
        )
        .then((res) => {
          setdata(res.data);
          //   console.log("res", res.data);
        });

      // Retrieve the value from sessionStorage
    }
  }, []);
  //   console.log("first", data[0].name);
  //   console.log("section", sessionStorage.getItem("ID"));
  const [leave, setleave] = useState({
    name: "",
    empid: "",
    reson: "",
    fromdate: "",
    todate: "",
  });
  const takeleave = (e) => {
    const { name, value } = e.target;
    setleave({ ...leave, [name]: value });
  };
  const postleave = () => {
    let obj = {
      name: data[0].name,
      empid: data[0].empid,
      reson: leave.reson,
      fromdate: leave.fromdate,
      todate: leave.todate,
    };
    axios
      .post(`http://localhost:3002/register/leave`, obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="leeve">
      <div className="entry row p-5">
        <h1 className="col-lg-6">APPLY LEAVE</h1>

        <div className="col-lg-6 text-center">
          {/* <img src={logo} alt="" /> */}
        </div>

        <div className="row mt-5">
          <div className="employ-input col-lg-6">
            <label>Name :</label> <br></br>
            <InputText
              className="Gender"
              type="text"
              value={data[0].name}
              name="name"
              onChange={takeleave}
              readOnly
              placeholder="Name"
            />
          </div>

          <div className="employ-input col-lg-6">
            <label>Employ Id:</label> <br></br>
            <InputText
              className="Gender"
              type="text"
              value={data[0].empid}
              name="empid"
              onChange={takeleave}
              readOnly
              placeholder="Employ Id"
            />
          </div>
          {/* {console.log(data.empid)} */}
          <div className="employ-input col-lg-6">
            <label>Reson :</label>
            <br></br>
            <InputTextarea
              rows={3}
              cols={40}
              placeholder="write a reason"
              name="reson"
              value={leave.reson}
              onChange={takeleave}
            />
          </div>
          <div className="employ-input col-lg-2">
            <label>From Date :</label>
            <br></br>
            <Calendar
              dateFormat="dd/mm/yy"
              name="fromdate"
              value={leave.fromdate}
              onChange={takeleave}
            />
          </div>
          <div className="employ-input col-lg-2">
            <label>To Date :</label>
            <br></br>
            <Calendar
              dateFormat="dd/mm/yy"
              name="todate"
              value={leave.todate}
              onChange={takeleave}
            />
          </div>

          <div className="col-lg-4 mt-5">
            <Button className="Gender-btn" label="Submit" onClick={postleave} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leave;
