import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section text-white pt-5">
      {/* Top Contact Info Section */}
      <div className="container mb-5">
        <div className="row text-center text-md-start gy-3">
          {/* Address */}
          <div className="col-md-4">
            <div className="footer-card d-flex align-items-center p-4 rounded-4">
              <FaLocationDot size={30} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">Address</p>
                <h6 className="mb-0">Peelamedu, Coimbatore – 641004, Tamil Nadu</h6>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-4">
            <div className="footer-card d-flex align-items-center p-4 rounded-4">
              <MdEmail size={30} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">Send Email</p>
                <h6 className="mb-0">priyalaksha17@gmail.com</h6>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-4">
            <div className="footer-card d-flex align-items-center p-4 rounded-4">
              <FaPhoneAlt size={28} className="me-3" />
              <div>
                <p className="mb-0 fw-semibold">Call Emergency</p>
                <h6 className="mb-0">+91 8220371853</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content Section */}
      <div className="container border-top pt-5 pb-4">
        <div className="row gy-4">
          {/* About */}
          <div className="col-md-3">
            <h4 className="fw-bold mb-3">
              FRESHEAT <span className="fw-light">RESPONDENT</span>
            </h4>
            <p>
             FreshEat delivers delicious, hygienic, and freshly prepared meals straight
             to your doorstep, made with quality ingredients and love.
            </p>
            <div className="d-flex gap-2 mt-3">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaXTwitter /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column">
              <Link to='/about'> About Us</Link>
              <Link to='/menu'>Menu</Link>
               <Link to='/contact'>Contact Us</Link>
            </ul>
          </div> 

          {/* Our Menu */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Our Menu</h5>
            <ul className="list-unstyled">
              <li> Burger King</li>
              <li> Pizza King</li>
              <li> Fresh Food</li>
              <li>Fast Food</li>
            <li> Juice</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p>Monday - Friday: <span className="text-warning">8am - 4pm</span></p>
            <p>Saturday: <span className="text-warning">8am - 12am</span></p>

            <div className="d-flex mt-3">
              <input
                type="email"
                className="form-control rounded-start-pill"
                placeholder="Your email address"
              />
              <button className="btn btn-warning rounded-end-pill">→</button>
            </div>

            <div className="form-check mt-3">
              <input className="form-check-input" type="checkbox" id="privacyCheck" />
              <label className="form-check-label small" htmlFor="privacyCheck">
                I agree to the <a href="#" className="text-warning">Privacy Policy</a>.
              </label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
