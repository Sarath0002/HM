import React, { useState } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./doctor.css";
import { BsFillTrashFill, BsPlusLg } from "react-icons/bs";

const Doctor = () => {
  const [checkedbox, setCheckedbox] = useState([]);

  const [tabletname, settabletname] = useState("");
  const [tablet, settablet] = useState([]);
  // Bmi calculation
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  // next vist date
  const [numberofdays, setnumberofdays] = useState(0);
  const [visitdate, setvisitdate] = useState("");

  // patient id
  const [empid, setpacentid] = useState("");
  // console.log("fin", empid);

  const [data, setdata] = useState([
    {
      name: "",
      age: "",
      email: "",
      causeofvisite: "",
    },
  ]);
  // BMI calculation
  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const weightInKg = weight;

    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBMI = (
        weightInKg /
        (heightInMeters * heightInMeters)
      ).toFixed(2);
      setBMI(calculatedBMI);
    } else {
      setBMI("");
    }
  };

  // Event handlers to update state on input change
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    calculateBMI();
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    calculateBMI();
  };

  /// seach patien id
  // console.log("id:", empid);

  function search() {
    if (empid === undefined || empid === "") {
      window.location.reload();
    } else {
      axios
        .get(`http://localhost:3002/appointment/${empid}`)

        .then((res) => {
          setdata(res.data);
          console.log("id1:", empid);
        })
        .catch(() => {
          setdata({
            name: "",
            age: "",
            email: "",
            causeofvisite: "",
          });
        });
    }
  }

  // next date

  function nextdate() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() + Number(numberofdays));
    const timeChange =
      yesterday.getDate() +
      "-" +
      parseInt(yesterday.getMonth() + 1) +
      "-" +
      yesterday.getFullYear();
    setvisitdate(timeChange);
  }
  // todo
  const createMachineObject = () => {
    if (tabletname.trim() === "") {
      return; // Don't create an empty machine object
    }

    const newMachine = {
      id: Date.now(),
      name: tabletname,
    };

    settablet([...tablet, newMachine]);
    settabletname("");
  };

  const deleteMachine = (id) => {
    const updatedtablet = tablet.filter((machine) => machine.id !== id);
    settablet(updatedtablet);
  };

  const [post, setpost] = useState({
    patientid: "",
    name: "",
    age: "",
    email: "",
    cause: "",
    bp: "",
    temp: "",
    height: "",
    weight: "",
    bmi: "",
    tabletdetials: "",
    scandeatials: "",
    nextdate: "",
  });
  let postcheck = (e) => {
    const { value, checked } = e.target;
    // setCheckedbox({
    //   ...checkedbox,
    //   [name]: checked,
    // });
    if (checked) {
      setCheckedbox((pre) => [...pre, value]);
    } else {
      setCheckedbox((pre) => {
        return [...pre.filter((scan) => scan !== value)];
      });
    }
  };
  // console.log(checkedbox);

  let posting = (e) => {
    const { name, value } = e.target;
    setpost({ ...post, [name]: value });
  };

  let posted = () => {
    let object = {
      patientid: empid,
      name: data[0].name,
      age: data[0].age,
      email: data[0].email,
      cause: data[0].cause,
      bp: post.bp,
      temp: post.temp,
      height: height,
      weight: weight,
      bmi: bmi,
      tabletdetials: tablet,

      scandeatials: checkedbox,
      nextdate: visitdate,
    };
    // console.log("first", post);
    if (
      data[0].name === "" ||
      data[0].age === "" ||
      data[0].email === "" ||
      bmi === ""
    ) {
      alert("fill all detials");
    } else {
      axios
        .post("http://localhost:3002/doctor/patientpost", object)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="doctor m-5">
        <div className="Sheet row">
          <h1 className="col-lg-6">DOCTOR CHEAKING FORM</h1>

          <div className="col-lg-6 text-center">
            {/* <img src={logo} alt="" /> */}
          </div>

          <div className="row mt-5">
            <span className="p-input-icon-left mb-5">
              <i className="pi pi-search" />
              <InputText
                placeholder="Search patient Id"
                value={data.empid}
                onChange={(e) => setpacentid(e.target.value)}
                onBlur={search}
              />
            </span>

            {data.map((ele) => {
              return (
                <>
                  <div className="employ-input col-lg-3">
                    <label>Name :</label> <br></br>
                    <InputText
                      className="Gender-2"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={ele.name}
                      onChange={posting}
                    />
                  </div>
                  {/* {console.log(ele.name)} */}

                  <div className="employ-input col-lg-3">
                    <label>Age :</label> <br></br>
                    <InputText
                      className="Gender-2"
                      type="number"
                      name="age"
                      placeholder="Age"
                      value={ele.age}
                      onChange={posting}
                    />
                  </div>

                  <div className="employ-input col-lg-3">
                    <label>email :</label> <br></br>
                    <InputText
                      className="Gender-2"
                      type="email"
                      name="email"
                      placeholder="email"
                      value={ele.email}
                      onChange={posting}
                    />
                  </div>
                  <div className="employ-input col-lg-3">
                    <label>Cause Of Visit :</label> <br></br>
                    <InputText
                      className="Gender-2"
                      type="text"
                      name="cause"
                      placeholder="Cause of Visit"
                      value={ele.cause}
                      onChange={posting}
                    />
                  </div>
                </>
              );
            })}

            <div className="doc row">
              <div className="employ-input col-lg-3">
                <label>BP :</label> <br></br>
                <InputText
                  className=""
                  type="text"
                  placeholder="BP"
                  name="bp"
                  value={post.bp}
                  onChange={posting}
                />
              </div>

              <div className="employ-input col-lg-3">
                <label>Temp :</label> <br></br>
                <InputText
                  className=""
                  type="text"
                  name="temp"
                  placeholder="Temp"
                  value={post.temp}
                  onChange={posting}
                />
              </div>

              <div className="employ-input col-lg-3">
                <label>Height (cm) :</label> <br></br>
                <InputText
                  className=""
                  type="number"
                  name="height"
                  placeholder="Height"
                  value={height}
                  onChange={handleHeightChange}
                />
              </div>

              <div className="employ-input col-lg-3">
                <label>Weight (kg) :</label> <br></br>
                <InputText
                  className=""
                  type="text"
                  placeholder="Weight"
                  name="weight"
                  value={weight}
                  onChange={handleWeightChange}
                />
              </div>
              <div className="employ-input col-lg-3">
                <label>BMI :</label> <br></br>
                <InputText
                  className=""
                  type="text"
                  placeholder="BMI"
                  name="bmi"
                  value={bmi}
                  onChange={posting}
                  readOnly
                />
              </div>
            </div>
            <h1 className="mt-5">Scan Deatails</h1>
            <div className="check mt-5 mb-5">
              <div className="">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox1"
                  value="xray"
                  // checked={checkedbox.checked1}
                  onChange={postcheck}
                />
                <label htmlFor="ingredient1" className="" id="chbox">
                  X-rays
                </label>
              </div>

              <div className="">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox2"
                  value="ct scan"
                  // checked={checkedbox.checked2}
                  onChange={postcheck}
                />
                <label htmlFor="ingredient1" className="" id="chbox">
                  CT scan
                </label>
              </div>

              <div className="">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox3"
                  value="mri scan"
                  // checked={checkedbox.checked3}
                  onChange={postcheck}
                />
                <label htmlFor="ingredient1" id="chbox">
                  MRI scan
                </label>
              </div>

              <div className="">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox4"
                  value="us scan"
                  // checked={checkedbox.checked4}
                  onChange={postcheck}
                />
                <label htmlFor="ingredient1" id="chbox">
                  US scan
                </label>
              </div>
            </div>
            {/* {console.log("f", checkedbox)} */}
            {/* totot */}
            <div className="mt-5">
              <h1 className="mb-5">medicine Details</h1>
              <InputText
                type="text"
                placeholder="Enter Tablets Name"
                id="mcbox"
                value={tabletname}
                onChange={(e) => settabletname(e.target.value)}
              />
              {/* <button onClick={createMachineObject}>Create Object</button> */}
              <Button
                id="chbox"
                onClick={createMachineObject}
                style={{ backgroundColor: "#610777", border: "none" }}
              >
                <BsPlusLg />
              </Button>

              <div className="d row mt-5">
                {tablet.map((machine) => (
                  <div key={machine.id} className="object col-lg-3 mr-5 ">
                    <div className="mt-2">
                      <strong className="pr-5 ">{machine.name}</strong>
                    </div>
                    <div className="mt-2">
                      <label className="pr-1">M</label>
                      <input className="mr-3" type="checkbox" />
                      <label className="pr-1">A</label>
                      <input className="mr-3" type="checkbox" />
                      <label className="pr-1">E</label>
                      <input className="mr-3" type="checkbox" />
                    </div>
                    <div className="text-end">
                      <Button
                        className=""
                        icon="pi pi-trash"
                        onClick={() => deleteMachine(machine.id)}
                        style={{ backgroundColor: "#610777", border: "none" }}
                      >
                        <BsFillTrashFill />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* todo */}

            <div>
              <h1>Next Visit Date</h1>

              <InputText
                className="m-3"
                type="number"
                placeholder="No of days"
                value={numberofdays}
                onChange={(e) => setnumberofdays(e.target.value)}
                onBlur={nextdate}
              />

              <InputText
                placeholder="Next Vist Date"
                value={visitdate}
                readOnly
              />
            </div>
          </div>
          <button id="sub" onClick={posted}>
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Doctor;
