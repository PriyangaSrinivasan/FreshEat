import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BG    = "#0a0a0a";
const CARD  = "#141414";
const CREAM = "#f5ede0";
const ORANGE= "#e85d04";
const TMID  = "#adb5bd";
const TLOW  = "#555";
const BDIM  = "#1a1a1a";

const Footer = () => {
  const [hovSocial, setHovSocial]   = useState(null);
  const [hovLink, setHovLink]       = useState(null);
  const [hovContact, setHovContact] = useState(null);
  const [hovBtn, setHovBtn]         = useState(false);

  const colTitleStyle = {
    fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em",
    textTransform: "uppercase", color: "white", marginBottom: 20,
    paddingBottom: 12, position: "relative", display: "block",
    borderBottom: `2px solid ${ORANGE}`, width: "fit-content",
  };

  const linkStyle = (id) => ({
    display: "block", color: hovLink === id ? ORANGE : TLOW,
    textDecoration: "none", fontSize: "0.875rem", marginBottom: 10,
    paddingLeft: hovLink === id ? 6 : 0,
    transition: "color 0.2s, padding-left 0.2s",
    cursor: "pointer",
  });

  const socialStyle = (id) => ({
    width: 36, height: 36,
    background: hovSocial === id ? ORANGE : CARD,
    border: `1px solid ${hovSocial === id ? ORANGE : "#222"}`,
    borderRadius: 8, display: "flex", alignItems: "center",
    justifyContent: "center", color: hovSocial === id ? "white" : TLOW,
    textDecoration: "none", fontSize: "0.8rem",
    transform: hovSocial === id ? "translateY(-2px)" : "translateY(0)",
    transition: "all 0.2s",
    cursor: "pointer",
  });

  const contactIconStyle = (id) => ({
    width: 38, height: 38, flexShrink: 0,
    background: hovContact === id ? ORANGE : CARD,
    border: `1px solid ${hovContact === id ? ORANGE : "#222"}`,
    borderRadius: 8, display: "flex", alignItems: "center",
    justifyContent: "center",
    color: hovContact === id ? "white" : ORANGE,
    transition: "all 0.2s",
  });

  const hoursBadge = {
    display: "inline-flex", alignItems: "center", gap: 6,
    background: CARD, border: "1px solid #1e1e1e",
    borderRadius: 50, padding: "4px 12px",
    fontSize: "0.75rem", color: TLOW, marginBottom: 6,
  };

  return (
    <footer style={{ background: BG, color: TMID, fontFamily: "sans-serif" }}>

      {/* ── ORANGE NEWSLETTER BANNER ── */}
      <div style={{
        background: ORANGE, padding: "48px 0", position: "relative", overflow: "hidden",
      }}>
        {/* diagonal pattern overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-items-center gy-4">
            <div className="col-md-6">
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", marginBottom: 8 }}>Stay in the loop</p>
              <h3 style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)", color: "white", fontWeight: 700, margin: 0 }}>
                Get exclusive deals delivered<br />to your inbox
              </h3>
            </div>
            <div className="col-md-6">
              <div style={{ display: "flex" }}>
                <input type="email" placeholder="Enter your email address"
                       style={{
                         background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)",
                         color: "white", padding: "12px 20px", borderRadius: "50px 0 0 50px",
                         fontSize: "0.85rem", outline: "none", flex: 1, minWidth: 0,
                       }} />
                <button
                  onMouseEnter={() => setHovBtn(true)}
                  onMouseLeave={() => setHovBtn(false)}
                  style={{
                    background: hovBtn ? "#f0f0f0" : "white", color: ORANGE,
                    border: "none", padding: "12px 24px", borderRadius: "0 50px 50px 0",
                    fontSize: "0.85rem", fontWeight: 700, cursor: "pointer",
                    transition: "background 0.2s", whiteSpace: "nowrap",
                  }}>
                  Subscribe →
                </button>
              </div>
              <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6 }}>
                <input type="checkbox" id="privacyCheck" style={{ accentColor: "white" }} />
                <label htmlFor="privacyCheck" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
                  I agree to the <a href="#" style={{ color: "white" }}>Privacy Policy</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN BODY ── */}
      <div style={{ padding: "64px 0 40px", borderBottom: `1px solid ${BDIM}` }}>
        <div className="container">
          <div className="row gy-5">

            {/* Brand */}
            <div className="col-lg-3 col-md-6 col-12">
              <div style={{ fontSize: "1.5rem", color: "white", fontWeight: 700, marginBottom: 12 }}>
                Fresh<span style={{ color: ORANGE }}>Eat</span>
              </div>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: TLOW, maxWidth: 240 }}>
                Delicious, hygienic, and freshly prepared meals straight to your doorstep — made with quality ingredients and love.
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
                {[
                  { id: "fb",  icon: <FaFacebookF /> },
                  { id: "tw",  icon: <FaXTwitter />  },
                  { id: "li",  icon: <FaLinkedinIn /> },
                  { id: "yt",  icon: <FaYoutube />   },
                ].map(s => (
                  <a key={s.id} href="#"
                     style={socialStyle(s.id)}
                     onMouseEnter={() => setHovSocial(s.id)}
                     onMouseLeave={() => setHovSocial(null)}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 col-6">
              <span style={colTitleStyle}>Quick Links</span>
              {[
                { to: "/about",   label: "About Us"  },
                { to: "/menu",    label: "Menu"       },
                { to: "/contact", label: "Contact"    },
                { to: "/cart",    label: "Cart"       },
                { to: "/orders",  label: "My Orders"  },
              ].map(l => (
                <Link key={l.to} to={l.to}
                      style={linkStyle(l.to)}
                      onMouseEnter={() => setHovLink(l.to)}
                      onMouseLeave={() => setHovLink(null)}>
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Our Menu */}
            <div className="col-lg-2 col-md-6 col-6">
              <span style={colTitleStyle}>Our Menu</span>
              {["Burger King","Pizza King","Fresh Food","Fast Food","Juice"].map(item => (
                <span key={item}
                      style={linkStyle(item)}
                      onMouseEnter={() => setHovLink(item)}
                      onMouseLeave={() => setHovLink(null)}>
                  {item}
                </span>
              ))}
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6 col-12">
              <span style={colTitleStyle}>Get In Touch</span>

              {[
                { id: "addr", icon: <FaLocationDot size={15} />, label: "Address", value: "Peelamedu, Coimbatore – 641004, Tamil Nadu" },
                { id: "mail", icon: <MdEmail size={15} />,       label: "Email",   value: "priyalaksha17@gmail.com"                    },
                { id: "tel",  icon: <FaPhoneAlt size={14} />,    label: "Phone",   value: "+91 8220371853"                             },
              ].map(c => (
                <div key={c.id}
                     style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 18, cursor: "default" }}
                     onMouseEnter={() => setHovContact(c.id)}
                     onMouseLeave={() => setHovContact(null)}>
                  <div style={contactIconStyle(c.id)}>{c.icon}</div>
                  <div>
                    <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#333", marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontSize: "0.85rem", color: TMID, margin: 0 }}>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Opening Hours */}
            <div className="col-lg-2 col-md-6 col-12">
              <span style={colTitleStyle}>Opening Hours</span>
              <div style={hoursBadge}><span style={{ width:6, height:6, background: ORANGE, borderRadius:"50%" }} /> Mon – Fri</div>
              <p style={{ fontSize: "0.85rem", color: TMID, marginBottom: 20 }}>8:00 AM – 4:00 PM</p>
              <div style={hoursBadge}><span style={{ width:6, height:6, background: ORANGE, borderRadius:"50%" }} /> Saturday</div>
              <p style={{ fontSize: "0.85rem", color: TMID, marginBottom: 8 }}>8:00 AM – 12:00 AM</p>
              <p style={{ fontSize: "0.75rem", color: "#333" }}>Sunday: Closed</p>
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="container">
        <div style={{
          padding: "20px 0", display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: "0.78rem", color: "#333", margin: 0 }}>
            © 2025 <span style={{ color: ORANGE }}>FreshEat</span>. All rights reserved.
          </p>
          <p style={{ fontSize: "0.78rem", color: "#333", margin: 0 }}>
            Made with <span style={{ color: ORANGE }}>♥</span> in Coimbatore
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;