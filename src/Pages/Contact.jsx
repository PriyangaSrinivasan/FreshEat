import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const BG    = "#120a08";
const SURF  = "#1c1008";
const CARD  = "#221409";
const CREAM = "#f5ede0";
const BEIGE = "#d4b68c";
const ORANGE= "#e85d04";
const RED   = "#c0392b";
const TLOW  = "#6b5540";
const TMID  = "#a8916e";
const BDIM  = "rgba(212,182,140,0.12)";

const Contact = () => {
  return (
    <div style={{ background: BG }}>

      <style>{`
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .contact-hero {
          min-height: 480px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          overflow: hidden;
          background:
            linear-gradient(to bottom, rgba(18,10,8,0.50) 0%, rgba(18,10,8,0.92) 100%),
            url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80")
            center/cover no-repeat;
        }
        .contact-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(232,93,4,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
      `}</style>

      {/* ── HERO — restaurant interior background ── */}
      <div className="contact-hero">
        {/* decorative concentric circles */}
        <div style={{ position:'absolute', width:340, height:340, borderRadius:'50%', border:`1px solid rgba(212,182,140,0.07)`, top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:230, height:230, borderRadius:'50%', border:`1px solid rgba(232,93,4,0.09)`, top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none' }} />

        <div style={{ position:'relative', zIndex:2 }}>
          <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
            <div style={{ width:50, height:1, background: BEIGE }} />
            <span className="fw-bold text-uppercase" style={{ color: BEIGE, fontSize:'11px', letterSpacing:'6px' }}>Reach Us</span>
            <div style={{ width:50, height:1, background: BEIGE }} />
          </div>
          <h1 className="fw-bold mb-3" style={{ fontSize:'clamp(3.5rem,10vw,7rem)', color: CREAM, letterSpacing:'-2px', lineHeight:1 }}>
            Contact <span className="fst-italic" style={{ color: BEIGE }}>Us</span>
          </h1>
          <p style={{ color: TMID, fontSize:'16px', maxWidth:'420px', margin:'0 auto 24px' }}>
            Get in touch with us for any queries or support — we're always here to help.
          </p>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <a href="/" style={{ color: BEIGE, textDecoration:'none', fontSize:'14px', fontWeight:500 }}>Home</a>
            <span style={{ color: TLOW }}>›</span>
            <span style={{ color: ORANGE, fontSize:'14px', fontWeight:600 }}>Contact Us</span>
          </div>
        </div>

        {/* bottom fade */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'80px', background:`linear-gradient(transparent, ${BG})`, pointerEvents:'none' }} />
      </div>

      {/* ── TICKER ── */}
      <div className="overflow-hidden py-2" style={{ background: ORANGE, whiteSpace: 'nowrap' }}>
        <span className="fst-italic d-inline-block"
              style={{ animation: 'ticker 28s linear infinite', color: CREAM, fontSize: '0.88rem', letterSpacing: '0.12em' }}>
          {Array(4).fill('✦ Contact Us  ·  We Are Here To Help  ·  Fast Response  ·  24/7 Support  ·  Reach Out Now  ·  ').join('')}
        </span>
        <style>{`@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>
      </div>

      {/* ── CONTACT INFO CARDS ── */}
      <section className="py-5" style={{ background: SURF, borderBottom: `1px solid ${BDIM}` }}>
        <div className="container">
          <div className="row g-4">
            {[
              { icon: <FaLocationDot size={28} />, title: 'Address',  value: 'Peelamedu, Coimbatore – 641004, Tamil Nadu' },
              { icon: <MdEmail       size={28} />, title: 'Email Us', value: 'priyalaksha17@gmail.com'                     },
              { icon: <FaPhoneAlt    size={26} />, title: 'Call Us',  value: '+91 8220371853'                              },
            ].map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="d-flex align-items-center gap-3 p-4 rounded-4 h-100"
                     style={{ background: CARD, border: `1px solid ${BDIM}`, transition: 'transform .3s, border-color .3s' }}
                     onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = `rgba(232,93,4,0.45)`; }}
                     onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.borderColor = BDIM; }}>
                  <div className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                       style={{ width: 56, height: 56, background: `rgba(232,93,4,0.15)`, color: ORANGE, border: `1px solid rgba(232,93,4,0.3)` }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="fw-bold mb-1" style={{ color: BEIGE, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>{item.title}</div>
                    <div style={{ color: TMID, fontSize: '14px', lineHeight: '1.5' }}>{item.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section className="py-5" style={{ background: BG }}>
        <div className="container">
          <div className="row g-5 align-items-stretch">

            {/* FORM */}
            <div className="col-md-6">
              <div className="p-5 rounded-4 h-100" style={{ background: CARD, border: `1px solid ${BDIM}` }}>
                <div className="mb-4">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div style={{ width: '28px', height: '1px', background: ORANGE }} />
                    <span className="fw-bold text-uppercase" style={{ color: ORANGE, fontSize: '11px', letterSpacing: '4px' }}>Send Message</span>
                  </div>
                  <h3 className="fw-bold" style={{ color: CREAM, fontSize: '32px' }}>
                    We'd Love to <span className="fst-italic" style={{ color: BEIGE }}>Hear From You</span>
                  </h3>
                </div>

                {[
                  { label: 'Your Name',  type: 'text',  placeholder: 'Enter your name'  },
                  { label: 'Your Email', type: 'email', placeholder: 'Enter your email' },
                  { label: 'Subject',    type: 'text',  placeholder: 'Enter subject'    },
                ].map((f, i) => (
                  <div key={i} className="mb-3">
                    <label className="form-label fw-semibold" style={{ color: TMID, fontSize: '13px', letterSpacing: '0.5px' }}>{f.label}</label>
                    <input type={f.type} className="form-control border-0 rounded-3"
                           placeholder={f.placeholder}
                           style={{ background: SURF, color: CREAM, fontSize: '14px', padding: '12px 16px',
                                    outline: 'none', boxShadow: `inset 0 0 0 1px ${BDIM}` }}
                           onFocus={e => e.target.style.boxShadow = `inset 0 0 0 1px rgba(232,93,4,0.5)`}
                           onBlur={e => e.target.style.boxShadow = `inset 0 0 0 1px ${BDIM}`} />
                  </div>
                ))}

                <div className="mb-4">
                  <label className="form-label fw-semibold" style={{ color: TMID, fontSize: '13px', letterSpacing: '0.5px' }}>Message</label>
                  <textarea rows="4" className="form-control border-0 rounded-3"
                            placeholder="Write your message..."
                            style={{ background: SURF, color: CREAM, fontSize: '14px', padding: '12px 16px', resize: 'none',
                                     boxShadow: `inset 0 0 0 1px ${BDIM}` }}
                            onFocus={e => e.target.style.boxShadow = `inset 0 0 0 1px rgba(232,93,4,0.5)`}
                            onBlur={e => e.target.style.boxShadow = `inset 0 0 0 1px ${BDIM}`} />
                </div>

                <button className="btn w-100 fw-bold text-uppercase rounded-pill py-3"
                        style={{ background: ORANGE, color: CREAM, letterSpacing: '2px', fontSize: '13px', border: 'none',
                                 boxShadow: `0 8px 24px rgba(232,93,4,.35)`, transition: 'all .2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = RED}
                        onMouseLeave={e => e.currentTarget.style.background = ORANGE}>
                  Send Message
                </button>
              </div>
            </div>

            {/* MAP */}
            <div className="col-md-6">
              <div className="rounded-4 overflow-hidden h-100" style={{ border: `1px solid ${BDIM}`, minHeight: '480px' }}>
                {/* map label */}
                <div className="d-flex align-items-center gap-3 px-4 py-3" style={{ background: CARD, borderBottom: `1px solid ${BDIM}` }}>
                  <div className="rounded-2 d-flex align-items-center justify-content-center"
                       style={{ width: 32, height: 32, background: `rgba(232,93,4,0.15)`, color: ORANGE }}>
                    <FaLocationDot size={16} />
                  </div>
                  <span className="fw-semibold" style={{ color: CREAM, fontSize: '14px' }}>Peelamedu, Coimbatore</span>
                </div>
                <iframe title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094245!2d144.9537363153157!3d-37.81627917975126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727c0f5a2a2b0!2sVictoria!5e0!3m2!1sen!2sin!4v1601288234109!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: 0, display: 'block', minHeight: '420px', filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen="" loading="lazy" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;