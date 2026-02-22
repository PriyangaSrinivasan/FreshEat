import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

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

const Login = () => {
  const { login, signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLogin, setIsLogin]     = useState(true);
  const [form, setForm]           = useState({ name: "", email: "", password: "" });
  const [focused, setFocused]     = useState("");
  const [hovBtn, setHovBtn]       = useState(false);
  const [hovToggle, setHovToggle] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const ok = login(form.email, form.password);
      if (ok) { setForm({ name:"", email:"", password:"" }); navigate("/menu"); }
      else alert("Invalid credentials");
    } else {
      const ok = signup(form.name, form.email, form.password);
      if (ok) { alert("Signup successful! Please login now."); setForm({ name:"", email:"", password:"" }); setIsLogin(true); }
      else alert("User already exists");
    }
  };

  const inputStyle = (name) => ({
    background: "transparent",
    border: "none",
    borderBottom: `2px solid ${focused === name ? ORANGE : "rgba(212,182,140,0.2)"}`,
    borderRadius: 0,
    color: CREAM,
    padding: "10px 0",
    fontSize: "0.95rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.3s",
    boxShadow: "none",
  });

  const labelStyle = (name) => ({
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: focused === name ? ORANGE : TLOW,
    transition: "color 0.3s",
    marginBottom: 4,
    display: "block",
  });

  return (
    <>
      <style>{`
        .login-wrap { min-height: 100vh; background: ${BG}; display: flex; }
        .login-left-panel {
          width: 45%; display: flex; flex-direction: column;
          justify-content: center; align-items: flex-start;
          padding: 60px; position: relative; overflow: hidden;
          background: linear-gradient(145deg, ${SURF} 0%, #1a0800 60%, ${BG} 100%);
        }
        .login-right-panel {
          flex: 1; display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          padding: 60px 40px; background: #0d0d0d;
        }

        @media (max-width: 991px) {
          .login-left-panel { width: 40%; padding: 40px; }
          .login-left-headline { font-size: 2rem !important; }
          .login-right-panel { padding: 40px 30px; }
        }

        @media (max-width: 767px) {
          .login-wrap { flex-direction: column; }
          .login-left-panel {
            width: 100%; padding: 40px 24px;
            min-height: auto;
            align-items: center; text-align: center;
          }
          .login-left-inner { align-items: center !important; }
          .login-left-label { justify-content: center; }
          .login-left-headline { font-size: 1.8rem !important; }
          .login-left-sub { max-width: 100% !important; }
          .login-left-stats { justify-content: center !important; }
          .login-right-panel { padding: 40px 20px; }
          .login-form-card { max-width: 100% !important; }
        }

        @media (max-width: 480px) {
          .login-left-panel { padding: 32px 16px; }
          .login-left-headline { font-size: 1.5rem !important; }
          .login-right-panel { padding: 32px 16px; }
          .login-form-title { font-size: 1.6rem !important; }
        }

        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #0d0d0d inset !important;
          -webkit-text-fill-color: ${CREAM} !important;
        }
      `}</style>

      <div className="login-wrap">

        {/* ── LEFT PANEL ── */}
        <div className="login-left-panel">
          {/* glow circles */}
          <div style={{ position:"absolute", top:"-100px", right:"-100px", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(232,93,4,0.15) 0%, transparent 70%)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-80px", left:"-80px", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle, rgba(232,93,4,0.08) 0%, transparent 70%)", pointerEvents:"none" }} />

          {/* floating food icons */}
          {[{e:"🍕",t:"15%",r:"18%"},{e:"🍔",t:"55%",r:"8%"},{e:"🌮",b:"20%",r:"30%"}].map((f,i)=>(
            <span key={i} style={{ position:"absolute", fontSize:"3rem", opacity:0.06, userSelect:"none", top:f.t, right:f.r, bottom:f.b }}>{f.e}</span>
          ))}

          {/* decorative rings */}
          <div style={{ position:"absolute", width:320, height:320, borderRadius:"50%", border:`1px solid rgba(212,182,140,0.05)`, top:"50%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", width:200, height:200, borderRadius:"50%", border:`1px solid rgba(232,93,4,0.07)`, top:"50%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none" }} />

          <div className="login-left-inner" style={{ position:"relative", zIndex:2, display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
            {/* label */}
            <div className="login-left-label" style={{ display:"flex", alignItems:"center", gap:12, marginBottom:28 }}>
              <div style={{ width:36, height:1, background: BEIGE }} />
              <span style={{ fontSize:"0.7rem", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color: ORANGE }}>
                Premium Food Delivery
              </span>
            </div>

            <div style={{ width:48, height:3, background: ORANGE, borderRadius:2, marginBottom:28 }} />

            <h1 className="login-left-headline" style={{ fontSize:"clamp(1.6rem,4vw,3.8rem)", fontWeight:700, color: CREAM, lineHeight:1.15, marginBottom:24 }}>
              Good food,<br />
              <span style={{ color: ORANGE }}>great</span> times.
            </h1>

            <p className="login-left-sub" style={{ fontSize:"0.9rem", color: TMID, lineHeight:1.7, maxWidth:320 }}>
              Order from the finest restaurants in your city. Fast delivery, fresh meals, every time.
            </p>

            <div className="login-left-stats" style={{ display:"flex", gap:32, marginTop:40, paddingTop:32, borderTop:`1px solid ${BDIM}` }}>
              {[["50K+","Customers"],["4.9★","Rating"],["30min","Delivery"]].map(([n,l])=>(
                <div key={l}>
                  <div style={{ fontWeight:700, fontSize:"1.4rem", color: ORANGE }}>{n}</div>
                  <div style={{ fontSize:"0.65rem", color: TLOW, letterSpacing:"0.1em", textTransform:"uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT FORM PANEL ── */}
        <div className="login-right-panel">
          <div className="login-form-card" style={{ width:"100%", maxWidth:380 }}>

            <h2 className="login-form-title" style={{ fontSize:"2rem", color: CREAM, fontWeight:600, marginBottom:6 }}>
              {isLogin ? "Sign in" : "Get started"}
            </h2>
            <p style={{ fontSize:"0.85rem", color: TLOW, marginBottom:42 }}>
              {isLogin ? "Welcome back — we missed you." : "Create your account in seconds."}
            </p>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div style={{ marginBottom:28 }}>
                  <label style={labelStyle("name")}>Full Name</label>
                  <input type="text" name="name" placeholder="John Doe"
                         value={form.name} onChange={handleChange}
                         onFocus={()=>setFocused("name")} onBlur={()=>setFocused("")}
                         style={inputStyle("name")} required />
                </div>
              )}

              <div style={{ marginBottom:28 }}>
                <label style={labelStyle("email")}>Email</label>
                <input type="email" name="email" placeholder="you@example.com"
                       value={form.email} onChange={handleChange}
                       onFocus={()=>setFocused("email")} onBlur={()=>setFocused("")}
                       style={inputStyle("email")} required />
              </div>

              <div style={{ marginBottom:8 }}>
                <label style={labelStyle("password")}>Password</label>
                <input type="password" name="password" placeholder="••••••••"
                       value={form.password} onChange={handleChange}
                       onFocus={()=>setFocused("password")} onBlur={()=>setFocused("")}
                       style={inputStyle("password")} required />
              </div>

              <button type="submit"
                      onMouseEnter={()=>setHovBtn(true)}
                      onMouseLeave={()=>setHovBtn(false)}
                      style={{
                        width:"100%", padding:"14px", marginTop:36,
                        background: hovBtn ? RED : ORANGE,
                        color: CREAM, border:"none", borderRadius:6,
                        fontSize:"0.9rem", fontWeight:600, letterSpacing:"0.08em",
                        textTransform:"uppercase", cursor:"pointer",
                        boxShadow: hovBtn ? `0 8px 24px rgba(232,93,4,0.4)` : "none",
                        transform: hovBtn ? "translateY(-1px)" : "translateY(0)",
                        transition:"all 0.25s",
                      }}>
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            <div style={{ display:"flex", alignItems:"center", gap:12, margin:"28px 0 0" }}>
              <div style={{ flex:1, height:1, background:"rgba(212,182,140,0.08)" }} />
              <span style={{ fontSize:"0.7rem", color: TLOW, letterSpacing:"0.1em", textTransform:"uppercase" }}>or</span>
              <div style={{ flex:1, height:1, background:"rgba(212,182,140,0.08)" }} />
            </div>

            <p style={{ fontSize:"0.82rem", color: TLOW, marginTop:24, textAlign:"center" }}>
              {isLogin ? "New here? " : "Already have an account? "}
              <button
                onMouseEnter={()=>setHovToggle(true)}
                onMouseLeave={()=>setHovToggle(false)}
                onClick={()=>{ setIsLogin(!isLogin); setForm({name:"",email:"",password:""}); }}
                style={{
                  color: ORANGE, fontWeight:600, cursor:"pointer",
                  border:"none", background:"none", padding:0,
                  fontSize:"0.82rem", opacity: hovToggle ? 0.7 : 1,
                  transition:"opacity 0.2s",
                }}>
                {isLogin ? "Create an account" : "Sign in instead"}
              </button>
            </p>

          </div>
        </div>

      </div>
    </>
  );
};

export default Login;