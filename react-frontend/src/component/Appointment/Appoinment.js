import React, { useRef, useState, useEffect } from "react";
import "../Appointment/appont.css";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { useNavigate } from "react-router-dom";
// import Toast from "react-bootstrap/Toast";
import axios from "axios";

const Appoinment = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [datec, setdatec] = useState("");
  const [timec, settimec] = useState("");
  const [disable, setdisable] = useState("typing");
  const [appintment, setappointment] = useState([]);
  const [shows, setShows] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/appointment/`)
      .then((res) => {
        setappointment(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [appodata, setappodata] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    cause: "",
  });
  console.log("ghjk", appodata);

  let Procedures = (e) => {
    e.preventDefault();
    setVisible(true);
  };
  const toastCenter = useRef(null);
  const toastTopCenter = useRef(null);
  let handleinput = (e) => {
    const { name, value } = e.target;
    setappodata({ ...appodata, [name]: value });
  };
  let findr = appintment.find((ele) => {
    return ele.email === appodata.email;
  });
  const fun = () => {
    if (findr !== undefined) {
      // alert("already applied this email or change your email ");
      toastCenter.current.show({
        severity: "error",
        summary: "Error",
        detail: "already applied this email or change your email",
      });
      // setShows(true);
    }
  };
  const bun = () => {
    toastTopCenter.current.show({
      severity: "error",
      summary: "Error",
      detail: "already applied this email or change your email",
    });
  };
  console.log(findr, "find");
  const show = (e) => {
    e.preventDefault();
    setdisable("submited");
    if (
      appodata.name === "" ||
      appodata.age === "" ||
      appodata.email === "" ||
      appodata.cause === "" ||
      appodata.mobile === ""
    ) {
      alert("FILL ALL THE DEIIALS");
    } else {
      if (findr !== undefined) {
        bun();
      } else {
        const appoinput = {
          name: appodata.name,
          age: appodata.age,
          email: appodata.email,
          mobile: appodata.mobile,
          date: appodata.date || datec,
          time: appodata.time || timec,
          cause: appodata.cause,
        };

        axios
          .post("http://localhost:3002/appointment/appointment", appoinput)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });

        toastCenter.current.show({
          severity: "success",
          summary: "Success",
          detail: "Your appoinment was Booked",
        });
      }
      // setappodata({
      //   id: "",
      //   name: "",
      //   age: "",
      //   email: "",
      //   mobile: "",
      //   date: "",
      //   time: "",
      //   cause: "",
      // });
      // setVisible(false);

      window.location.reload();
    }
  };
  const minDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };
  const anytime = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    let time = `${date.getHours()}:${date.getMinutes()}`;

    console.log(currentDate, "now");
    // console.log(time, "time");
    setdatec(currentDate);
    settimec(time);
  };
  // console.log(datec);
  // console.log(timec, "time");
  const [disab, setdesab] = useState(true);
  const pickaslot = () => {
    setdesab(false);
  };

  return (
    <>
      <h1 className="h1">Book your Appoinment</h1>

      <div className="appcontainer my-5">
        <form onSubmit={show} className="forms">
          <lable>name</lable>
          <input
            type="text "
            name="name"
            value={appodata.name}
            onChange={handleinput}
          />
          <br />
          <lable>age</lable>
          <input
            type="number"
            name="age"
            value={appodata.age}
            onChange={handleinput}
          />
          <br />
          <lable>Email</lable>
          <input
            type="email"
            name="email"
            value={appodata.email}
            onChange={handleinput}
            onBlur={fun}
          />
          <Toast ref={toastCenter} position="center" />
          <Toast ref={toastTopCenter} position="center" />
          {/* <Toast
            onClose={() => setShows(false)}
            show={shows}
            delay={5000}
            autohide
          >
            <Toast.Body style={{ color: "red", fontSize: "17px" }}>
              already applied this email or change your email!!!!
            </Toast.Body>
          </Toast> */}
          <br />
          <lable>mobie</lable>
          <input
            type="number"
            name="mobile"
            value={appodata.mobile}
            onChange={handleinput}
          />
          <lable>cause of vist</lable>
          <select
            placeholder="select"
            name="cause"
            value={appodata.cause}
            onChange={handleinput}
          >
            <option value=""></option>
            <option>fever</option>
            <option>cough</option>
            <option>body pain</option>
            <option>other</option>
          </select>

          {/* <div className="card flex justify-content-center"> */}
          <Dialog
            header="Pick a Slot"
            visible={visible}
            style={{
              width: "50vw",
              border: "2px solid black",
              backgroundColor: "white",
              boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.75)",
            }}
            onHide={() => setVisible(false)}
          >
            <div className="dialog">
              <input
                type="date"
                className="input"
                name="date"
                value={appodata.date}
                onChange={handleinput}
                min={minDate()}
                disabled={disab}
              />
              <input
                type="time"
                className="input"
                name="time"
                value={appodata.time}
                onChange={handleinput}
                disabled={disab}
              />
              <div style={{ width: "100%" }}>
                <button className="slot me-3" onClick={anytime}>
                  Anytime
                </button>
                <button className="slot" onClick={pickaslot}>
                  Pick a Slot
                </button>
              </div>
              <div style={{ width: "100%" }}>
                <Toast ref={toastCenter} position="center" />
                <button className="formsub" onClick={show} label="Top Center">
                  submit
                </button>
              </div>
            </div>
          </Dialog>
          {/* </div> */}
        </form>
        <button
          onClick={Procedures}
          className="formsub"
          disabled={
            appodata.name === "" ||
            appodata.age === "" ||
            appodata.email === "" ||
            appodata.causeofvisit === "" ||
            disable === "submited"
          }
        >
          proceed
        </button>
      </div>
    </>
  );
};

export default Appoinment;
