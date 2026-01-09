import { Link } from 'react-router-dom'
import Slider from "react-slick";
const img1 = "/assets/aboutShape1_1.webp";
const img2 = "/assets/aboutShape1_4.webp";
const img3 = "/assets/aboutShape1_6.webp";
const img4 = "/assets/aboutShape1_3.webp";
const pizza = "/assets/ctaThumb1_1.webp";
const tomoto = "/assets/ctaShape1_3.webp";
const leaf = "/assets/ctaShape1_1.webp";
const green2 = "/assets/ctaShape1_2.webp";
const plate1 = "/assets/ctaShape3_3.webp";
const plate2 = "/assets/ctaShape3_4.webp";
const plate3 = "/assets/ctaShape3_5.webp";
const chef1 = "/assets/chefeThumb2_1.webp";
const chef2 = "/assets/chefeThumb2_2.webp";
const chef3 = "/assets/chefeThumb2_3.webp";
const chef4 = "/assets/chefeShape2_2.webp";
const img6 = "/assets/ctaThumb3_1.webp";
const img7 = "/assets/ctaShape3_6.png";

const testimonials = [
  { text: "Contrary To Popular Belief...", name: "John Doe", role: "Happy Customer", image: "https://via.placeholder.com/80" },
  { text: "This food app changed my daily life!", name: "Sophia Lee", role: "Food Lover", image: "https://via.placeholder.com/80/ff0000/ffffff" },
  { text: "Amazing experience! Great service...", name: "David Smith", role: "Regular Customer", image: "https://via.placeholder.com/80/00ff00/ffffff" }
];
const About = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div>
      <div className='about text-white  d-flex align-items-center justify-content-center  flex-column'>
        <h1 style={{fontSize:'80px' ,fontWeight:'700'}}>ABOUT US</h1>
         <span><Link to="/" className='h5'>Home</Link> / <Link to="/about" className='text-danger h5'>About Us</Link></span>
      </div>
      <section className='about-food pt-5'>
        <div className='content position-relative bg-white mt-5' style={{width:'100%',height:'80vh'}} >
          {/* left Image */}
             <div className='position-absolute d-none d-xxl-flex ' style={{top:0}}>
                <img src={img1} width={550}/>
             </div>
               {/* left inner image */}
              <div className=' mb-4 mb-md-0 position-absolute  d-none d-xxl-flex' style={{top:'125px',left:'5%'}}>
                 <img src={img4} width={470} />
             </div>
          {/* Right Image */}
               <div className='position-absolute d-none d-xxl-flex' style={{top:0,right:0}}>
                <img src={img2} width={550}/>
             </div>
                 {/* righr inner image */}
              <div className=' position-absolute  d-none d-xxl-block' style={{top:'125px',right:"5%"}}>
                  <img src={img3} width={470}/>
             </div>
             <div className='container  py-5'>
              <div className='row   justify-content-center text-center p-5 mt-5'>
            
             <div className='col-xl-7 col-lg-8 col-md-10'>
                 <p className='text-warning fw-bold mb-2' style={{fontSize:'20px'}}>About Us</p>
                 <p className='h2 fw-bold mb-4' style={{fontSize:'60px'}}>Variety of flavours from american cuisine</p>
                 <p className='text-muted mb-4' style={{fontSize:'20px'}}>It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that</p>
                 <Link to='/menu'><button className='btn btn-danger px-4 py-3 fw-semibold mt-4'>ORDER NOW</button></Link>
             </div>
         
             </div>
             </div>
        </div>
        {/* slidemove */}
        <div className='name-move '>
            <div className='list' >
                <span>CHICKEN PIZZA</span>
                <span>FRESH PASTA</span>
                 <span>BURGER</span>
                 <span>GRILLED CHICKEN</span>
            </div>
        </div>
      </section>
      {/* special */}
      <section className='pizza position-relative '>
        <img className="d-none d-xxl-block  position-absolute bottom-0 start-0 " src={green2} alt="..." />
        <img  className="d-none d-xxl-block py-4 position-absolute top-0 start-0" src={leaf} alt="..." />
        <img className="d-none d-xxl-block  position-absolute bottom-0 end-0 " src={tomoto} alt="..." />    
 
        <div className='row d-flex align-items-center  justify-content-center '>
          <div className='col-xl-6 order-2 order-xl-1'>
              <p className='text-danger fw-bold ' style={{fontSize:'28px',lineHeight:'70px'}}>WELCOME FRESHEAT</p>
              <p className='text-white fw-bold' style={{fontSize:'55px'}}>TODAY SPECIAL FOOD</p>
              <p className='text-warning fw-bold' style={{fontSize:'28px'}}>Limits Time Offer</p>
              <Link to='/menu'><button className='btn btn-danger px-4 py-3 fw-semibold mt-4'>ORDER NOW</button></Link>
          </div>
        <div className='col-xl-6 pizza1 order-1 order-xl-2 text-center'>
          <img src={pizza} width={656} />
        </div>
        </div>
      </section>
      {/* chefe */}
      <section className='chefe py-5 position-relative' >
        <img className='d-none d-xxl-block  position-absolute bottom-0 end-0' src={chef4} />
        <div className='container'>
          <div className='text-center mb-5'>
          <p className='text-warning h5 mb-1'>OUR CHEFE</p>
          <p className='text-dark fw-bold' style={{fontSize:'40px'}}>Meet Our Expert Chefe</p>
          </div>
         <div className='row justify-content-center  g-4 '>
          {[
            {img:chef1,name:"Devon Lane",role:"President of Sales"},
            {img:chef2,name:"Ralph Edwards",role:"Chefe Manager"},
            {img:chef3,name:"Marvin McKinney",role:"Main Chefe"},

          ].map((chefe,index)=>(
              <div key={index} className='col-12 col-md-6 col-lg-4 d-flex justify-content-center '>    
            <div className='chef-card text-center shadow'>
               <img className='chef-img' src={chefe.img} width={400}/>
            <div className='chef-info border-top-0' style={{bottom:'-35px',left:'10%',borderRadius:'30px 0',padding:'10px 95px'}}>
               <p className='fw-bold mb-1' style={{fontSize:'18px' }}>{chefe.name}</p>
               <span className='text-muted mb-0' style={{fontSize:'14px'}}>{chefe.role}</span>
            </div>
            </div>
              </div>
          ))}
         </div>
         </div>
      
      </section>
         {/* app download */}
     <section className='download-app py-5' >
        <div className='container-fluid px-5' style={{overflow:'hidden'}}>
           <div className='mobile-app position-relative px-3 '>
                 <img className="d-none d-xxl-block  position-absolute bottom-0 start-0  " src={green2} alt="..." />
                 <img  className="d-none d-xxl-block py-4 position-absolute top-0 start-0" src={leaf} alt="..." />
       
          <div className='row  g-5 pt-5'>
            {/* left */}
              <div className='col-xl-6 d-flex  flex-column align-items-center justify-content-center order-1 order-xl-2 mt-5 pb-4 position-relative'>
                      <img className='position-absolute' src={plate3} width={200}  style={{bottom:'0',right:'30px',zIndex:'1'}}/>
                  <p className='text-warning fw-bold mb-2 '>DOWNLOAD APP</p>
                  <p className='h2 fw-bold text-white mb-4 ' style={{fontSize:'50px'}}>Download Food App <br /> Order Today! </p>

              <div className='d-flex flex-wrap gap-3   '>
                  <Link to='https://www.apple.com/store'><button className='btn btn-danger px-5 py-3 rounded-pill'>APPLE STORE</button></Link>
                  <Link to='https://play.google.com/store/games?device=windows'><button className='btn btn-danger px-5 py-3 rounded-pill'>GOOGLE PLAY</button></Link>
              </div>
              </div>
              {/* right */}
               <div className='col-xl-6  mt-xl-0 order-1 order-xl-2 pt-5  d-none d-xxl-block position-relative '>
                <img className='position-absolute' src={img7}  width={150} style={{top:'125px',left:'-30px',zIndex:'5'}} />
                  <img className='position-absolute' src={plate1} width={400}  style={{bottom:'-25px',right:'30px',zIndex:'1'}}/>
                    <img className='position-absolute' src={plate2} width={200}  style={{top:'0',right:'0',zIndex:'1'}}/>
                  <img className='position-relative' src={img6} width={500} style={{zIndex:'3'}}/>
              </div>
          </div>
             </div>
           </div>
     </section>
   
    </div>
  )
}

export default About
