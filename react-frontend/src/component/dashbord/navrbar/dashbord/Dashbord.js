import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navebar from "../Navebar";
import car1 from "../../../../images/img/carousel-1.jpg";
import car2 from "../../../../images/img/carousel-2.jpg";
import car3 from "../../../../images/img/carousel-3.jpg";
import about1 from "../../../../images/img/about-1.jpg";
import about2 from "../../../../images/img/about-2.jpg";
import f from "../../../../images/img/feature.jpg";

import "../dashbord/dashbord.css";
import Carousel from "react-bootstrap/Carousel";
import Service from "./Service";
import {
  FaAddressBook,
  FaEnvelope,
  FaFacebook,
  FaHeadphones,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaCommentMedical } from "react-icons/fa";

const Dashbord = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navebar />
      {/* header */}
      <div className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-4 text-white mb-5" data-aos="zoom-in">
              Good Health Is The Root Of All Heppiness
            </h1>
            <div className="row g-4">
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2
                    className="text-white mb-1"
                    data-toggle="counter-up"
                    data-aos="zoom-in"
                  >
                    123
                  </h2>
                  <p className="text-light mb-0" data-aos="zoom-in">
                    Expert Doctors
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2
                    className="text-white mb-1"
                    data-toggle="counter-up"
                    data-aos="zoom-in"
                  >
                    1234
                  </h2>
                  <p className="text-light mb-0" data-aos="zoom-in">
                    Medical Stuff
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2
                    className="text-white mb-1"
                    data-toggle="counter-up"
                    data-aos="zoom-in"
                  >
                    12345
                  </h2>
                  <p className="text-light mb-0" data-aos="zoom-in">
                    Total Patients
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Carousel className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <Carousel.Item interval={1000}>
              <img className="img-fluid" src={car1} alt="" />
              <Carousel.Caption>
                <h1 className="display-1 text-white mb-0" data-aos="zoom-in">
                  Cardiology
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="img-fluid" src={car2} alt="" />
              <Carousel.Caption>
                <h1 className="display-1 text-white mb-0">Neurology</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid" src={car3} alt="" />
              <Carousel.Caption>
                <h1 className="display-1 text-white mb-0">Pulmonary</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/* about */}
      <div className="container-xxl py-5" data-aos="fade-up">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-75 align-self-end"
                  src={about1}
                  alt=""
                />
                <img
                  className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                  src={about2}
                  alt=""
                  style={{ marginTop: "-25%" }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              data-aos="fade-up"
            >
              <p className="d-inline-block border rounded-pill py-1 px-4">
                About Us
              </p>
              <h1 className="mb-4">
                Why You Should Trust Us? Get Know About Us!
              </h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p className="mb-4">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
              <p>
                <i className="far fa-check-circle text-primary me-3"></i>Quality
                health care
              </p>
              <p>
                <i className="far fa-check-circle text-primary me-3"></i>Only
                Qualified Doctors
              </p>
              <p>
                <i className="far fa-check-circle text-primary me-3"></i>Medical
                Research Professionals
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                href=""
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}
      {/* service */}
      <Service />

      {/* service end */}
      {/* feauters */}
      <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="p-lg-5 ps-lg-0">
                <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                  Features
                </p>
                <h1 className="text-white mb-4">Why Choose Us</h1>
                <p className="text-white mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo erat amet
                </p>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <FaUserMd className=" text-primary" />
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Experience</p>
                        <h5 className="text-white mb-0">Doctors</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <FaCheck className=" text-primary" />
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Quality</p>
                        <h5 className="text-white mb-0">Services</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <FaCommentMedical className=" text-primary" />
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Positive</p>
                        <h5 className="text-white mb-0">Consultation</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <FaHeadphones className=" text-primary" />
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">24 Hours</p>
                        <h5 className="text-white mb-0">Support</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 pe-lg-0 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100" data-aos="zoom-out-up">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src={f}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feuters end */}
      {/* footer */}
      <div
        className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
        data-aos="flip-right"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p className="mb-2">
                <FaMapMarkerAlt className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <FaPhoneAlt className="fa fa-map-marker-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <FaEnvelope className="fa fa-map-marker-alt me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <FaTwitter />
                </a>
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <FaFacebook />
                </a>
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <FaYoutube />
                </a>
                <a
                  className="btn btn-outline-light btn-social rounded-circle"
                  href=""
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Services</h5>
              <a className="btn btn-link" href="">
                Cardiology
              </a>
              <a className="btn btn-link" href="">
                Pulmonary
              </a>
              <a className="btn btn-link" href="">
                Neurology
              </a>
              <a className="btn btn-link" href="">
                Orthopedics
              </a>
              <a className="btn btn-link" href="">
                Laboratory
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                Our Services
              </a>
              <a className="btn btn-link" href="">
                Terms & Condition
              </a>
              <a className="btn btn-link" href="">
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;
                <a className="border-bottom" href="#">
                  Health care
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Designed By{" "}
                <a className="border-bottom" href="https://htmlcodex.com">
                  sarath
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
    </>
  );
};

export default Dashbord;
