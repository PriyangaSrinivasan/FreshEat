import React from "react";
import { FaLocationDot } from "react-icons/fa6"; // FA6 icon
import { FaPhoneAlt } from "react-icons/fa";     // FA5 icon
import { MdEmail } from "react-icons/md";        // Material icon



const Contact = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Contact Us</h2>
          <p className="text-secondary">
            Get in touch with us for any queries or support
          </p>
        </div>

        {/* Contact Info Boxes */}
        <div className="row text-white gy-4 mb-5">
          <div className="col-md-4">
            <div className="contact-card p-4 d-flex align-items-center rounded-4">
              <FaLocationDot size={30} className="me-3" />
              <div>
                <h6 className="fw-semibold mb-1">Address</h6>
                <p className="mb-0">Peelamedu, Coimbatore – 641004, Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card p-4 d-flex align-items-center rounded-4">
              <MdEmail size={30} className="me-3" />
              <div>
                <h6 className="fw-semibold mb-1">Email Us</h6>
                <p className="mb-0">priyalaksha17@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card p-4 d-flex align-items-center rounded-4">
              <FaPhoneAlt size={28} className="me-3" />
              <div>
                <h6 className="fw-semibold mb-1">Call Us</h6>
                <p className="mb-0">+91 8220371853</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form + Map */}
        <div className="row gy-4">
          <div className="col-md-6">
            <form className="contact-form bg-dark p-4 rounded-4 text-white">
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button className="btn btn-warning w-100 fw-semibold rounded-pill">
                Send Message
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <div className="map-box rounded-4">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094245!2d144.9537363153157!3d-37.81627917975126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727c0f5a2a2b0!2sVictoria!5e0!3m2!1sen!2sin!4v1601288234109!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
