import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import PaginatorBasicDemo from "./Admin Componts/Table";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import Optab from "./Optab";
import logo from "../../images/hospital_logo.png";
import axios from "axios";
import Chartss from "./Chartss";

const AdminPage = () => {
  const location = useLocation();
  // console.log(location.state);
  const navigate = useNavigate();

  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkIndate, setCheckIndate] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [isCheckInDisabled, setIsCheckInDisabled] = useState(false);
  const [dis, setsis] = useState(false);
  // const [checkOutdate, setCheckOutdate] = useState(null);

  // const handleCheckIn = () => {
  //   const currentTime = new Date();
  //   let time = currentTime.getHours() + ":" + currentTime.getMinutes();
  //   let date =
  //     currentTime.getFullYear() +
  //     "-" +
  //     (currentTime.getMonth() + 1) +
  //     "-" +
  //     currentTime.getDate();
  //   setCheckIndate(date);
  //   setCheckInTime(time);
  //   setIsCheckInDisabled(true);
  // };

  // const handleCheckOut = () => {
  //   const currentTime = new Date();
  //   let time = currentTime.getHours() + ":" + currentTime.getMinutes();

  //   setCheckOutTime(time);
  //   console.log(time);
  // };

  const handleButtonClick = async () => {
    if (isCheckedIn) {
      console.time("myfuncto");

      let date = new Date();
      // let time = date.toLocaleTimeString();
      // let dates =
      //   date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      let time = date.getHours() + ":" + date.getMinutes();

      setCheckOutTime(time);
      // setCheckOutdate(dates);
      // checked();

      console.timeEnd("myfuncto");
      navigate("/employelogin");
    } else {
      let date = new Date();
      // let time = date.toLocaleTimeString();
      let time = date.getHours() + ":" + date.getMinutes();
      let dates =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

      setCheckInTime(time);
      setCheckIndate(dates);
      setIsCheckInDisabled(true);

      console.log("first");
    }
    setIsCheckedIn((prevState) => !prevState, console.log(isCheckedIn, "dd"));
  };
  useEffect(() => {
    if (isCheckedIn) {
      checked();
    }
  }, [isCheckedIn]);
  const start = new Date(`1970-01-01T${checkInTime}`);
  const end = new Date(`1970-01-01T${checkOutTime}`);
  const diff = end - start; // Difference in milliseconds
  const hours = diff / (1000 * 60 * 60);
  let h = hours.toFixed(2);
  console.log(checkInTime, "chi");
  let cheek = {
    checkindate: checkIndate,
    // checkintime: checkInTime,
    // checkouttime: checkOutTime,
    hours: h,
  };

  console.log(cheek);
  const checked = () => {
    axios
      .post(
        `http://localhost:3002/check/checkpost/${sessionStorage.getItem("ID")}`,
        cheek
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container-9">
        <div className="nav">
          <Link className="logo" to="/">
            <img src={logo} id="logov" />
          </Link>
          <ul className=" list" type="none">
            <li>
              <Link className="li www" to="/leave">
                Apply Leave
              </Link>
            </li>
            <li
              className={
                location.state.employerole === "doctor" ? "" : "hiiden"
              }
            >
              <Link className="li www" to="/doctor">
                Doctor Visit
              </Link>
            </li>
            <li
              className={
                location.state.employerole === "FRONTLINE WORKER"
                  ? ""
                  : "hiiden"
              }
            >
              <Link className="li www" to="/appoinment">
                OP entry
              </Link>
            </li>
            <li className={location.state.employerole === "HR" ? "" : "hiiden"}>
              <Link className="li www" to="/employeregister">
                Add Employe
              </Link>
            </li>
            <li>
              <Link className="li www" to="/editemploye">
                Edit Profile
              </Link>
            </li>

            {/* <li className="www">
              
            </li> */}
            <li
              className="www"
              onClick={handleButtonClick}
              style={{ cursor: "pointer" }}
            >
              {isCheckedIn ? "Check Out" : "Check In"}

              {/* {checkInTime && (
                <span>
                  Check-in time: {checkInTime}
                  Check-in date: {checkIndate}
                </span>
              )}
              {checkOutTime && <span>Check-out time: {checkOutTime}</span>} */}
            </li>
            {/* <li>
              <button onClick={handleCheckIn} disabled={isCheckInDisabled}>
                {" "}
                CheckIn
              </button>
            </li>
            <li>
              <button onClick={handleCheckOut}>CheckOut</button>
            </li> */}
            {/* <div>
              <p>Check-In Time: {checkInTime || "Not checked in yet"}</p>
              <p>Check-Out Time: {checkOutTime || "Not checked out yet"}</p>
            </div> */}
          </ul>
        </div>
      </div>
      <h1 className="mx-3">
        {location.state.name} {location.state.employerole}
      </h1>
      {<Optab />}
      {/* {<Chartss />} */}
    </div>
  );
};

export default AdminPage;
