import React, { useEffect } from "react";
import "../dashbord/dashbord.css";
import { FaHeartbeat } from "react-icons/fa";
import { FaVials } from "react-icons/fa";
import { FaXRay } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaTooth } from "react-icons/fa";
import { FaWheelchair } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container-xxl py-5 ">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
            data-aos="zoom-out-left"
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Services
            </p>
            <h1>Health Care Solutions</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <FaHeartbeat className=" text-primary fs-4" />
                </div>
                <h4 className="mb-3">Cardiology</h4>
                <p className="mb-4">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
                <a className="btn" href="">
                  <FaPlus className="text-primary me-3" /> Read more
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <FaXRay className=" text-primary fs-4" />
                </div>
                <h4 className="mb-3">Pulmonary</h4>
                <p className="mb-4">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
                <a className="btn" href="">
                  <FaPlus className="text-primary me-3" />
                  Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <FaBrain className="text-primary fs-4" />
                </div>
                <h4 className="mb-3">Neurology</h4>
                <p className="mb-4">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
                <a className="btn" href="">
                  <FaPlus className="text-primary me-3" />
                  Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <FaWheelchair className=" text-primary fs-4" />
                </div>
                <h4 className="mb-3">Orthopedics</h4>
                <p className="mb-4">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
                <a className="btn" href="">
                  <FaPlus className="text-primary me-3" />
                  Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <FaTooth className="text-primary fs-4" />
                </div>
                <h4 className="mb-3">Dental Surgery</h4>
                <p className="mb-4">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
                <a className="btn" href="">
                  <FaPlus className="text-primary me-3" />
                  Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <FaVials className=" text-primary fs-4" />
                </div>
                <h4 className="mb-3">Laboratory</h4>
                <p className="mb-4">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
                <a className="btn" href="">
                  <FaPlus className="text-primary me-3" />
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
