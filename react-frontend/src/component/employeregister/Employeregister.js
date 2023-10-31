import React, { useRef, useState } from "react";
import "../employeregister/empregisrer.css";
import axios from "axios";
import { Toast } from "primereact/toast";
import { useEffect } from "react";

const Employeregister = () => {
  const toast = useRef(null);
  const toastTopCenter = useRef(null);
  const [employe, setemploye] = useState([]);
  const [data, setdata] = useState({
    name: "",
    dob: "",
    mobilenumber: "",
    email: "",
    gender: "",
    bloodgroup: "",
    employerole: "",
    address: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3002/appointment/`)
      .then((res) => {
        setemploye(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let findr = employe.find((ele) => {
    return ele.email === data.email;
  });
  const bun = () => {
    toastTopCenter.current.show({
      severity: "error",
      summary: "Error",
      detail: "already applied this email or change your email",
    });
  };
  const fun = () => {
    if (findr !== undefined) {
      // alert("already applied this email or change your email ");
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "already applied this email or change your email",
      });
      // setShows(true);
    }
  };
  let handleinput = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
    console.log("fi", { [name]: value });
  };
  let show = (e) => {
    e.preventDefault();
    if (
      data.name === " " ||
      data.dob === "" ||
      data.email === "" ||
      data.gender === "" ||
      data.mobilenumber === "" ||
      data.employerole === "" ||
      data.bloodgroup === ""
    ) {
      alert("fill all the detils");
    } else {
      if (findr !== undefined) {
        // alert("already applied this email or change your email");
        bun();
      } else {
        const reginput = {
          name: data.name,
          dob: data.dob,
          mobilenumber: data.mobilenumber,
          email: data.email,
          gender: data.gender,
          employerole: data.employerole,
          bloodgroup: data.bloodgroup,
          address: data.address,
        };
        axios
          .post("http://localhost:3002/register/employeregister", reginput)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });

        toast.current.show({
          severity: "info",
          summary: "Info",
          detail: "register  successfully",
        });
        setdata({
          name: "",
          dob: "",
          mobilenumber: "",
          email: "",
          gender: "",
          bloodgroup: "",
          employerole: "",
          address: "",
          password: "admin123",
        });
      }
    }
  };

  return (
    <>
      <span className="d-flex justify-content-center mt-3a">
        <h3>Employe Register</h3>
      </span>
      <div className="empcont ">
        <form onSubmit={show} label="Show">
          <div className="row ">
            <div className="col-6">
              <lable>name</lable>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleinput}
              />
              <lable>Date of birth</lable>
              <input
                type="date"
                name="dob"
                value={data.dob}
                onChange={handleinput}
              />
              <lable>mobile no</lable>
              <input
                type="number"
                name="mobilenumber"
                value={data.mobilenumber}
                onChange={handleinput}
              />
              <lable>Email</lable>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleinput}
                onBlur={fun}
              />
              <Toast ref={toast} position="center" />
              <Toast ref={toastTopCenter} position="center" />
            </div>

            <div className="col-6">
              <label for="gender">Gender</label>
              <select name="gender" value={data.gender} onChange={handleinput}>
                <option value="">Please select one…</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non-binary">Non-Binary</option>
                <option value="other">Other</option>
                <option value="Prefer not to answer">
                  Perfer not to Answer
                </option>
              </select>
              <br></br>
              <label
              // className="mt-3"
              >
                Blood group
              </label>
              <select
                name="bloodgroup"
                value={data.bloodgroup}
                onChange={handleinput}
              >
                <option value="">Please select one…</option>
                <option>A Positive</option>
                <option>A Negative</option>
                <option>A Unknown</option>
                <option>B Positive</option>
                <option>B Negative</option>
                <option>B Unknown</option>
                <option>AB Positive</option>
                <option>AB Negative</option>
                <option>AB Unknown</option>
                <option>O Positive</option>
                <option>O Negative</option>
                <option>O Unknown</option>
                <option>Unknown</option>
              </select>

              <lable>Employe role</lable>
              <select
                // className="mt-3"
                name="employerole"
                value={data.employerole}
                onChange={handleinput}
              >
                <option value="">Please select one…</option>
                <option>HR</option>
                <option>DOCTER</option>
                <option>FRONTLINE WORKER</option>
              </select>
              <lable>Address</lable>
              <textarea
                className="mt-3"
                type="text"
                name="address"
                rows={2}
                cols={40}
                value={data.address}
                onChange={handleinput}
              />
            </div>
          </div>
          <Toast ref={toast} />
          <button className="empsub">submit</button>
        </form>
      </div>
    </>
  );
};

export default Employeregister;
