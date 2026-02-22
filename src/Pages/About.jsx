import { Link } from 'react-router-dom'

const img4  = "/assets/aboutShape1_3.webp";
const pizza = "/assets/ctaThumb1_1.webp";
const tomoto= "/assets/ctaShape1_3.webp";
const leaf  = "/assets/ctaShape1_1.webp";
const green2= "/assets/ctaShape1_2.webp";
const plate3= "/assets/ctaShape3_5.webp";
const chef1 = "/assets/chefeThumb2_1.webp";
const chef2 = "/assets/chefeThumb2_2.webp";
const chef3 = "/assets/chefeThumb2_3.webp";
const chef4 = "/assets/chefeShape2_2.webp";
const img6  = "/assets/ctaThumb3_1.webp";

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

const About = () => {
  return (
    <div style={{ background: BG }}>

      <style>{`
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        .about-hero {
          min-height: 480px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          overflow: hidden;
          background:
            linear-gradient(to bottom, rgba(18,10,8,0.55) 0%, rgba(18,10,8,0.92) 100%),
            url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80")
            center/cover no-repeat;
        }
        .about-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(232,93,4,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        @media (max-width: 991px) {
          .about-hero { min-height: 360px; }
          .about-right-img { height: 360px !important; }
          .about-badge-left { left: 0 !important; }
          .about-badge-right { right: 0 !important; }
          .pizza-h2 { font-size: 40px !important; }
          .chef-h2 { font-size: 34px !important; }
          .app-h2 { font-size: 34px !important; }
        }

        @media (max-width: 767px) {
          .about-hero { min-height: 280px; padding: 40px 16px; }
          .about-section-h2 { font-size: 26px !important; line-height: 1.3 !important; }
          .about-right-img { height: 260px !important; }
          .about-badge-left { position: static !important; margin-top: 12px; display: inline-block; }
          .about-badge-right { position: static !important; margin-top: 8px; display: inline-block; }
          .pizza-h2 { font-size: 30px !important; }
          .chef-h2 { font-size: 26px !important; }
          .app-h2 { font-size: 26px !important; }
          .app-left-pad { padding-left: 20px !important; padding-right: 20px !important; }
          .app-store-row { flex-direction: column !important; }
          .app-store-btn { min-width: 100% !important; }
          .app-stats-row { gap: 20px !important; }
        }

        @media (max-width: 480px) {
          .about-section-h2 { font-size: 20px !important; }
          .about-stat-num { font-size: 22px !important; }
          .pizza-h2 { font-size: 24px !important; }
          .app-h2 { font-size: 22px !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className='about-hero'>
        <div style={{ position:'absolute', width:340, height:340, borderRadius:'50%', border:`1px solid rgba(212,182,140,0.07)`, top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:230, height:230, borderRadius:'50%', border:`1px solid rgba(232,93,4,0.09)`, top:'50%', left:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none' }} />

        <div style={{ position:'relative', zIndex:2, padding:'0 16px' }}>
          <div className='d-flex align-items-center justify-content-center gap-3 mb-3'>
            <div style={{ width:50, height:1, background: BEIGE }} />
            <span className='fw-bold text-uppercase' style={{ color: BEIGE, fontSize:'11px', letterSpacing:'6px' }}>Fresheat</span>
            <div style={{ width:50, height:1, background: BEIGE }} />
          </div>
          <h1 className='fw-bold mb-3' style={{ fontSize:'clamp(2.2rem,10vw,7rem)', color: CREAM, letterSpacing:'-2px', lineHeight:1 }}>
            About <span className='fst-italic' style={{ color: BEIGE }}>Us</span>
          </h1>
          <p className='mb-4' style={{ color: TMID, fontSize:'16px', maxWidth:'420px', margin:'0 auto 24px' }}>
            Passion for food, crafted with love — serving authentic American cuisine since 2009.
          </p>
          <div className='d-flex align-items-center justify-content-center gap-2'>
            <Link to='/' style={{ color: BEIGE, textDecoration:'none', fontSize:'14px', fontWeight:500 }}>Home</Link>
            <span style={{ color: TLOW }}>›</span>
            <span style={{ color: ORANGE, fontSize:'14px', fontWeight:600 }}>About Us</span>
          </div>
        </div>

        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'80px', background:`linear-gradient(transparent, ${BG})`, pointerEvents:'none' }} />
      </div>

      {/* ── ABOUT FOOD ── */}
      <section className='py-5' style={{ background: BG, borderBottom: `1px solid ${BDIM}` }}>
        <div className='container py-4'>
          <div className='text-center mb-5'>
            <div className='d-inline-flex align-items-center gap-3 mb-3'>
              <div style={{ width: '40px', height: '1px', background: BEIGE }} />
              <span className='fw-bold text-uppercase' style={{ color: BEIGE, fontSize: '12px', letterSpacing: '5px' }}>About Us</span>
              <div style={{ width: '40px', height: '1px', background: BEIGE }} />
            </div>
            <h2 className='fw-bold about-section-h2' style={{ fontSize: '48px', lineHeight: '1.15', color: CREAM }}>
              Variety of Flavours from{' '}
              <span className='fst-italic' style={{ color: BEIGE }}>American Cuisine</span>
            </h2>
          </div>

          <div className='row align-items-center g-5'>
            {/* LEFT */}
            <div className='col-lg-6 col-12'>
              <p style={{ fontSize: '16px', lineHeight: '1.95', color: TMID, marginBottom: '36px' }}>
                It is a long established fact that a reader will be distracted by the readable content
                of a page when looking at its layout — the point of using good food is the same.
                We craft every dish with passion, using only the freshest locally sourced ingredients.
              </p>
              <div className='row g-3 mb-4'>
                {[
                  { num: '15+',  label: 'Years Experience' },
                  { num: '200+', label: 'Menu Items'       },
                  { num: '50K+', label: 'Happy Customers'  },
                  { num: '4.9★', label: 'Average Rating'   },
                ].map((s, i) => (
                  <div key={i} className='col-6'>
                    <div className='rounded-4 p-4 text-center h-100'
                         style={{ background: i % 2 === 0 ? RED : CARD, border: `1px solid ${BDIM}` }}>
                      <div className='fw-bold about-stat-num' style={{ fontSize: '32px', color: CREAM }}>{s.num}</div>
                      <div style={{ fontSize: '12px', letterSpacing: '1px', color: i % 2 === 0 ? 'rgba(255,255,255,.7)' : TMID }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to='/menu'>
                <button className='btn fw-bold text-uppercase rounded-pill px-5 py-3'
                        style={{ background: ORANGE, color: CREAM, letterSpacing: '2px', fontSize: '13px', border: 'none', boxShadow: `0 8px 24px rgba(232,93,4,.35)` }}>
                  Order Now
                </button>
              </Link>
            </div>

            {/* RIGHT */}
            <div className='col-lg-6 col-12 position-relative'>
              <img src={img4} className='w-100 rounded-4 about-right-img'
                   style={{ height: '520px', objectFit: 'cover', boxShadow: '0 20px 60px rgba(0,0,0,.5)' }} />
              <div className='position-absolute rounded-4 p-3 about-badge-left'
                   style={{ bottom: '30px', left: '-10px', minWidth: '160px', background: RED, boxShadow: '0 8px 24px rgba(192,57,43,.5)' }}>
                <div className='fw-bold' style={{ fontSize: '22px', color: CREAM }}>45% Off</div>
                <div style={{ fontSize: '12px', color: 'rgba(245,237,224,.8)' }}>On First Order</div>
              </div>
              <div className='position-absolute rounded-pill px-3 py-2 d-flex align-items-center gap-2 about-badge-right'
                   style={{ top: '24px', right: '-10px', background: CARD, border: `1px solid ${BDIM}` }}>
                <span style={{ fontSize: '20px' }}>🍽️</span>
                <span className='fw-bold' style={{ fontSize: '13px', color: CREAM }}>Fresh Daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className='overflow-hidden py-2' style={{ background: ORANGE, whiteSpace: 'nowrap' }}>
        <span className='fst-italic d-inline-block'
              style={{ animation: 'ticker 28s linear infinite', color: CREAM, fontSize: '0.88rem', letterSpacing: '0.12em' }}>
          {Array(4).fill('✦ CHICKEN PIZZA  ·  FRESH PASTA  ·  BURGER  ·  GRILLED CHICKEN  ·  SPECIAL OFFERS  ·  ').join('')}
        </span>
      </div>

      {/* ── SPECIAL / PIZZA ── */}
      <section className='position-relative overflow-hidden' style={{ background: CARD, borderTop: `1px solid ${BDIM}`, borderBottom: `1px solid ${BDIM}` }}>
        <img className='position-absolute bottom-0 start-0 d-none d-xxl-block' src={green2} alt='' />
        <img className='position-absolute top-0 start-0 d-none d-xxl-block'    src={leaf}   alt='' />
        <img className='position-absolute bottom-0 end-0 d-none d-xxl-block'   src={tomoto} alt='' />
        <div className='container py-5'>
          <div className='row align-items-center justify-content-between g-5'>
            <div className='col-xl-5 col-lg-6 col-12 order-2 order-lg-1'>
              <span className='fw-bold text-uppercase d-block mb-2' style={{ fontSize: '12px', letterSpacing: '5px', color: ORANGE }}>Welcome Fresheat</span>
              <h2 className='fw-bold mb-3 pizza-h2' style={{ fontSize: '58px', lineHeight: '1.05', letterSpacing: '-1px', color: CREAM }}>Today's Special Food</h2>
              <div className='d-inline-flex align-items-center gap-2 rounded-pill px-4 py-2 mb-4'
                   style={{ background: 'rgba(212,182,140,0.1)', border: `1px solid rgba(212,182,140,0.35)`, color: BEIGE, fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                ⏱ LIMITED TIME OFFER
              </div>
              <br />
              <Link to='/menu'>
                <button className='btn fw-bold text-uppercase mt-2 px-5 py-3'
                        style={{ background: RED, color: CREAM, letterSpacing: '2px', border: 'none', boxShadow: `0 8px 24px rgba(192,57,43,.35)` }}>
                  Order Now
                </button>
              </Link>
            </div>
            <div className='col-xl-6 col-lg-6 col-12 order-1 order-lg-2 text-center'>
              <img src={pizza} className='img-fluid' style={{ maxWidth: '600px', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,.6))' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CHEFS ── */}
      <section className='py-5 position-relative overflow-hidden' style={{ background: SURF, borderTop: `1px solid ${BDIM}`, borderBottom: `1px solid ${BDIM}` }}>
        <img className='position-absolute bottom-0 end-0 d-none d-xxl-block' src={chef4} style={{ opacity: '.15' }} />
        <div className='container py-4'>
          <div className='text-center mb-5'>
            <div className='d-inline-flex align-items-center gap-3 mb-3'>
              <div style={{ width: '36px', height: '1px', background: BEIGE }} />
              <span className='fw-bold text-uppercase' style={{ color: BEIGE, fontSize: '12px', letterSpacing: '4px' }}>Our Chefs</span>
              <div style={{ width: '36px', height: '1px', background: BEIGE }} />
            </div>
            <h2 className='fw-bold chef-h2' style={{ fontSize: '44px', letterSpacing: '-1px', color: CREAM }}>Meet Our Expert Chefs</h2>
          </div>
          <div className='row justify-content-center g-4'>
            {[
              { img: chef1, name: 'Devon Lane',      role: 'President of Sales' },
              { img: chef2, name: 'Ralph Edwards',   role: 'Chef Manager'       },
              { img: chef3, name: 'Marvin McKinney', role: 'Main Chef'          },
            ].map((chef, i) => (
              <div key={i} className='col-lg-4 col-md-6 col-12'>
                <div className='rounded-4 overflow-hidden h-100'
                     style={{ background: CARD, border: `1px solid ${BDIM}`, transition: 'transform .3s, box-shadow .3s, border-color .3s' }}
                     onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,.6)'; e.currentTarget.style.borderColor = 'rgba(192,57,43,.4)'; }}
                     onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = BDIM; }}>
                  <div className='overflow-hidden'>
                    <img src={chef.img} className='w-100' alt={chef.name}
                         style={{ transition: 'transform .4s', objectFit: 'cover', display: 'block' }}
                         onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                         onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                  </div>
                  <div className='text-center py-4 px-3'>
                    <h5 className='fw-bold mb-1' style={{ color: CREAM }}>{chef.name}</h5>
                    <p className='mb-2' style={{ fontSize: '13px', letterSpacing: '1px', color: TMID }}>{chef.role}</p>
                    <div className='mx-auto rounded' style={{ width: '32px', height: '2.5px', background: RED }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP DOWNLOAD ── */}
      <section className='position-relative overflow-hidden' style={{ background: BG, minHeight: '420px' }}>
        <div className='position-absolute top-0 start-0 h-100' style={{ width: '5px', background: `linear-gradient(to bottom, ${RED}, transparent)` }} />
        <img src={leaf}   className='position-absolute d-none d-xxl-block' style={{ top: '20px', left: '20px', width: '70px', opacity: '.7' }} />
        <img src={green2} className='position-absolute d-none d-xxl-block' style={{ bottom: '0', left: '0', width: '100px', opacity: '.5' }} />
        <div className='container-fluid px-0'>
          <div className='row g-0 align-items-stretch' style={{ minHeight: '420px' }}>
            <div className='col-lg-5 col-12 d-flex flex-column justify-content-center px-4 px-lg-5 py-5 app-left-pad'>
              <span className='fw-bold text-uppercase d-block mb-3' style={{ fontSize: '11px', letterSpacing: '5px', color: ORANGE }}>📱 Download App</span>
              <h2 className='fw-bold mb-3 app-h2' style={{ fontSize: '46px', lineHeight: '1.1', color: CREAM }}>
                Order Food <br /><span style={{ color: RED }}>Anytime,</span> Anywhere!
              </h2>
              <p className='mb-4' style={{ fontSize: '15px', lineHeight: '1.7', color: TMID }}>
                Get exclusive deals, track your order in real time, and enjoy fast delivery — all from one app.
              </p>
              <div className='d-flex flex-wrap gap-3 app-store-row'>
                <Link to='https://www.apple.com/store'>
                  <div className='d-flex align-items-center gap-3 px-4 py-3 rounded-3 app-store-btn'
                       style={{ background: CARD, border: `1px solid ${BDIM}`, minWidth: '180px', cursor: 'pointer' }}>
                    <span style={{ fontSize: '26px' }}>🍎</span>
                    <div>
                      <div style={{ fontSize: '10px', letterSpacing: '1px', color: TMID }}>DOWNLOAD ON THE</div>
                      <div className='fw-bold' style={{ fontSize: '15px', color: CREAM }}>App Store</div>
                    </div>
                  </div>
                </Link>
                <Link to='https://play.google.com/store/games?device=windows'>
                  <div className='d-flex align-items-center gap-3 px-4 py-3 rounded-3 app-store-btn'
                       style={{ background: CARD, border: `1px solid ${BDIM}`, minWidth: '180px', cursor: 'pointer' }}>
                    <span style={{ fontSize: '26px' }}>▶️</span>
                    <div>
                      <div style={{ fontSize: '10px', letterSpacing: '1px', color: TMID }}>GET IT ON</div>
                      <div className='fw-bold' style={{ fontSize: '15px', color: CREAM }}>Google Play</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='d-flex gap-4 mt-4 pt-3 app-stats-row' style={{ borderTop: `1px solid ${BDIM}` }}>
                {[['50K+','Downloads'],['4.8 ⭐','App Rating'],['200+','Menu Items']].map(([n, l]) => (
                  <div key={l}>
                    <div className='fw-bold' style={{ fontSize: '22px', color: ORANGE }}>{n}</div>
                    <div style={{ fontSize: '12px', color: TLOW }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-lg-7 col-12 d-none d-lg-flex align-items-end justify-content-center position-relative overflow-hidden'
                 style={{ background: `linear-gradient(135deg, ${RED} 0%, #7b241c 100%)` }}>
              <div className='position-absolute rounded-circle' style={{ width: '500px', height: '500px', background: 'rgba(255,255,255,.04)', top: '-100px', right: '-100px' }} />
              <div className='position-absolute rounded-circle' style={{ width: '280px', height: '280px', background: 'rgba(255,255,255,.04)', bottom: '-80px', left: '-60px' }} />
              <img src={plate3} className='position-absolute d-none d-xxl-block' style={{ top: '20px', right: '20px', width: '140px', opacity: '.75' }} />
              <img src={img6} style={{ width: '85%', maxWidth: '560px', position: 'relative', zIndex: '3', filter: 'drop-shadow(0 -20px 40px rgba(0,0,0,.5))' }} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;