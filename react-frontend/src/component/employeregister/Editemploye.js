import React, { useState, useEffect } from "react";
// import "./Editprifile.css";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
// import logo from "../../images/logoimg.jpeg";
import axios from "axios";

const Editemploye = () => {
  const [updatename, setupdatename] = useState("");
  const [updatemobile, setupdatemobile] = useState("");
  const [updateadd, setupdateadd] = useState("");
  const [mobile, setmobile] = useState("");

  function editData() {
    axios
      .put(
        `http://localhost:3002/register/update/${sessionStorage.getItem("ID")}`,
        {
          name: updatename,
          email: updatemobile,
          address: updateadd,
          mobilenumber: mobile,
        }
      )
      .then((res) => {
        console.log(res, "updated sucessfully");
      });
  }

  return (
    <div className="employ">
      <div className="Sheet-1 ">
        <h1 className="">EDIT YOUR PROFILE</h1>

        <div className="col-lg-6 text-center">
          {/* <img src={logo} alt="" /> */}
        </div>

        <div className=" mt-5">
          <div className="employ-input ">
            <label>Name :</label> <br></br>
            <InputText
              className="Gender"
              type="text"
              value={updatename}
              onChange={(e) => setupdatename(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div className="employ-input ">
            <label>email :</label> <br></br>
            <InputText
              className="Gender"
              type="email"
              value={updatemobile}
              onChange={(e) => setupdatemobile(e.target.value)}
              placeholder="email"
            />
          </div>
          <div className="employ-input ">
            <label>Mobile No :</label> <br></br>
            <InputText
              className="Gender"
              type="number"
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
              placeholder="Mobile"
            />
          </div>

          <div className="row">
            <div className="employ-input ">
              <label>Address :</label>
              <br></br>
              <InputTextarea
                rows={3}
                cols={40}
                value={updateadd}
                onChange={(e) => setupdateadd(e.target.value)}
                placeholder="Address"
              />
            </div>

            <div className=" employ-input mt-5 col-lg-6">
              <Button
                className="Gender-btn w-50"
                onClick={editData}
                label="Submit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editemploye;
