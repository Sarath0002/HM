import React, { useEffect, useState } from "react";
// import logo from "../images/logoimg.jpeg";
import { InputText } from "primereact/inputtext";
import "./employelogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Employe = () => {
  //value get
  const [employeid, setemployeid] = useState("");
  const [password, setpassword] = useState();
  const [data, setdata] = useState([]);

  const [error, seterror] = useState("");

  const navigate = useNavigate();
  // api call
  useEffect(() => {
    axios
      .get("http://localhost:3002/register/employe")
      .then((res) => {
        setdata(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  function checkInHandler() {
    const final = data.find((user) => user.empid === employeid);

    if (final?.empid === employeid && final?.password === password) {
      navigate("/admin", { state: final });
      sessionStorage.setItem("ID", employeid);
    } else {
      seterror("employeid and password did not match");
    }
  }

  return (
    <div className="employ">
      <div className="Sheet-1 row">
        <h1 className="col-lg-6">LOG IN </h1>

        <div className="col-lg-6 text-center">
          {/* <img src={logo} alt="" /> */}
        </div>

        <div className="row mt-5 ml-5">
          <div className="errors" style={{ color: "red" }}>
            {error}
          </div>
          <div className="employ-input">
            <label>Employe ID :</label> <br></br>
            <InputText
              className="Gender"
              type="text"
              value={employeid}
              onChange={(e) => setemployeid(e.target.value)}
            />
          </div>
          <div className="employ-input">
            <label>Password :</label> <br></br>
            <InputText
              className="Gender"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <div className="errors"></div>
          </div>
          <div className="employ-input mt-5" style={{ marginLeft: "36%" }}>
            <button className="checkbutton" onClick={checkInHandler} raised>
              Check In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employe;
