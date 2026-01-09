// import { useState, useEffect, useContext } from "react";
// import { CiHeart } from "react-icons/ci";
// import { BsMinecartLoaded } from "react-icons/bs";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/Cartcontext";
  
// // Banner & shape images
// const item1 = "/assets/item1_1.png";
// const item3 = "/assets/item1_3.png";
// const item5 = "/assets/dishes2_5.webp";
// const item6 = "/assets/dishes1_4.webp";
// const item7 = "/assets/dishes1_5.webp";

// const img1 = "/assets/img1.png";
// const img2 = "/assets/img2.png";
// const img3 = "/assets/img3.png";
// const leaf = "/assets/leafimg.svg";
// const pepper = "/assets/pepper.svg";
// const green1 = "/assets/imggreen.svg";
// const green2 = "/assets/green2img.svg";
// const shape1 = "/assets/bannerShape1_3.svg";
// const shape2 = "/assets/bannerShape1_6.svg";
// const pizzashape = "/assets/itemsShape1_2.png";
// const burgershape = "/assets/bestFooditemsShape1_1.png";

// const foods = [
//   { img: item3, title: "Chicken Fried Rice", price: "$100.99" },
//   { img: item5, title: "Chinese Pasta", price: "$15.99" },
//   { img: item1, title: "Chicken Pizza", price: "$26.99" },
//   { img: item6, title: "Chicken Noodles", price: "$39.00" },
//   { img: item7, title: "Grilled Chicken", price: "$20.99" },
// ];
// const Home = () => {
//     const { addToCart } = useContext(CartContext);
//   const [data, setData] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("Fastfood");

//   useEffect(() => {
//     // Fetch all endpoints from JSON Server
//     Promise.all([
//       fetch("http://localhost:5001/items").then((res) => res.json()),
//       fetch("http://localhost:5001/fooditems").then((res) => res.json()),
//       fetch("http://localhost:5001/categories").then((res) => res.json()),
//       fetch("http://localhost:5001/foods").then((res) => res.json()),
//     ])
//       .then(([items, fooditems, categories,foods]) =>
//         setData({ items, fooditems, categories,foods })
//       )
//       .catch((err) => console.error(err));
//   }, []);

//   if (!data) return <p>Loading...</p>;

//   // Filter food items by selected category
//   const filteredItems =
//     selectedCategory === "All"
//       ? data.fooditems
//       : data.fooditems.filter((item) => item.title === selectedCategory);

//   const responsive = {
//     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
//     tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
//     mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
//   };

//   return (
//     <div>
//       {/* Banner Carousel */}
//       <section className="home-page position-relative">
//         <div
//           id="carouselExampleSlidesOnly"
//           className="carousel slide"
//           data-bs-ride="carousel"
//           data-bs-interval="3000"
//         >
//           <div className="carousel-inner">
//             {[img1, img3, img2].map((imgSrc, idx) => (
//               <div
//                 className={`carousel-item ${idx === 0 ? "active" : ""}`}
//                 key={idx}
//               >
//                 <img
//                   className="d-none d-xxl-block position-absolute top-0 start-0"
//                   src={pepper}
//                   width={230}
//                 />
//                 <img
//                   className="d-none d-xxl-block position-absolute top-0 end-0"
//                   src={leaf}
//                   width={200}
//                 />
//                 <div className="shapes">
//                   <img
//                     className="shape1 d-none d-xxl-block"
//                     src={shape1}
//                     width={230}
//                   />
//                   <img
//                     className="shape2 d-none d-xxl-block"
//                     src={shape2}
//                     width={100}
//                   />
//                 </div>
//                 <img
//                   className="d-none d-xxl-block position-absolute bottom-0 start-0"
//                   src={green1}
//                   width={230}
//                 />
//                 <img
//                   className="d-none d-xxl-block position-absolute bottom-0 end-0"
//                   src={green2}
//                   width={160}
//                 />
//                 <div className="home-content row d-flex justify-content-end align-items-center ps-4 position-absolute">
//                   <div className="col-12 col-xxl-6">
//                     <p className="h3 text-warning">WELCOME FRESHEAT</p>
//                     <p
//                       className="h1 text-white pb-5"
//                       style={{ fontSize: "8rem", fontWeight: "bold" }}
//                     >
//                       SPICY FRIED CHICKEN
//                     </p>
//                     <button
//                       className="ms-4 btn btn-danger px-5 py-3"
//                       style={{
//                         fontSize: "1.4rem",
//                         fontWeight: "bold",
//                         lineHeight: "40px",
//                       }}
//                     >
//                       Order Now
//                     </button>
//                   </div>
//                   <div className="col-12 col-xl-6 d-none d-xxl-block">
//                     <img src={imgSrc} width="96%" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Popular Food Items Carousel */}
//       <section
//         className="food-items py-5 d-flex flex-column justify-content-center align-items-center position-relative"
//         style={{ zIndex: 1 }}
//       >
//         <img
//           src={pizzashape}
//           className="position-absolute d-none d-xxl-block"
//           style={{ top: "90px", right: "100px" }}
//           width={180}
//         />
//         <img
//           src={burgershape}
//           className="position-absolute d-none d-xxl-block"
//           style={{ bottom: "40%", left: "0" }}
//           width={200}
//         />
//         <div className="container mb-5">
//           <p
//             className="text-warning"
//             style={{ fontWeight: "700", textAlign: "center" }}
//           >
//             BEST FOOD
//           </p>
//           <p
//             className="h2 text-dark pb-5"
//             style={{ fontWeight: "900", textAlign: "center" }}
//           >
//             Popular Food Items
//           </p>
//           <Carousel
//             responsive={responsive}
//             infinite
//             autoPlay
//             autoPlaySpeed={2000}
//             keyBoardControl
//             showDots={false}
//             arrows={false}
//           >
//             {data.items.map((item) => (
//               <div
//                 key={item.id}
//                 className="text-center flex-column d-flex align-items-center justify-content-center position-relative mt-5"
//               >
//                 <img
//                   src={item.img}
//                   className="position-absolute"
//                   alt={item.title}
//                   style={{ width: "200px", zIndex: 999, top: "5%" }}
//                 />
//                 <div
//                   className="card flex-column d-flex align-items-center justify-content-center pt-4"
//                   style={{
//                     width: "18rem",
//                     height: "16rem",
//                     zIndex: -20,
//                     marginTop: "40%",
//                   }}
//                 >
//                   <p
//                     className="h3"
//                     style={{ fontWeight: 700, lineHeight: "50px" }}
//                   >
//                     {item.title}
//                   </p>
//                   <p
//                     className="text-danger"
//                     style={{ fontSize: "20px", fontWeight: 700 }}
//                   >
//                     {item.price}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </Carousel>
//         </div>
//       </section>

//       {/* Popular Dishes */}
//       <section className="dish-menu d-flex flex-column p-5">
//         <div className="text-center py-5">
//           <p className="h5">POPULAR DISHES</p>
//           <p className="h2">Best Selling Dishes</p>
//         </div>
//         <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
//        {foods.map((dish, idx) => (
        
//         <div key={idx} className="card card-dish text-center d-flex align-items-center justify-content-center position-relative p-5 pt-5"
//             style={{ width: "21rem", height: "25rem", zIndex: 1 }}>
//         <img className="pb-3" src={dish.img} style={{ width: "200px" }} />
//         <p className="h3" style={{ fontWeight: 700, lineHeight: "50px" }}>{dish.title}</p>
//         <p className="text-danger" style={{ fontSize: "20px", fontWeight: 700 }}>{dish.price}</p>

//         <div className="position-absolute d-flex align-items-center justify-content-center"
//                 style={{ zIndex: 999, top: "15px", right: "25px", fontSize: 28 }}>
//             <span className="bg-danger text-white"style={{ width: 45, height: 45, borderRadius: "50%" }}><CiHeart /></span>
//     </div>

//       {/* Cart Icon */}
//             <span
//               className="cart-img"
//               style={{ cursor: "pointer", fontSize: "28px", marginTop: "10px" }}
//             onClick={() =>
//          addToCart({
//                   id: dish.id,
//                   name: dish.title,
//                   price: dish.price,
//                   img: dish.img
//                 })
//              }
 
//             >
//               <BsMinecartLoaded />
//             </span>
//     </div>

//         ))}

//         </div>
//       </section>

//       {/* Food Menu Filter */}
//       <section className="food-cat bg-dark d-flex py-5">
//         <div className="container bg-white pt-2 p-lg-5">
//           <div className="text-center mb-4">
//             <p className="h5 text-warning">FOOD MENU</p>
//             <p className="h1">Fresheat Foods Menu</p>
//           </div>

//           {/* Categories */}
//           <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
//             {data.categories.map((cat) => (
//               <div
//                 key={cat.id}
//                 onClick={() => setSelectedCategory(cat.name)}
//                 className={`d-flex align-items-center gap-2 px-3 py-2 rounded ${
//                   selectedCategory === cat.name
//                     ? "bg-warning text-dark"
//                     : "bg-light text-dark"
//                 }`}
//                 style={{ cursor: "pointer", fontWeight: 600, minWidth: 150 }}
//               >
//                 <img src={cat.img} style={{ width: 36 }} />
//                 <span>{cat.name}</span>
//               </div>
//             ))}
//             <div
//               onClick={() => setSelectedCategory("All")}
//               className={`d-flex align-items-center gap-2 px-3 py-2 rounded ${
//                 selectedCategory === "All"
//                   ? "bg-warning text-dark"
//                   : "bg-light text-dark"
//               }`}
//               style={{ cursor: "pointer", fontWeight: 600, minWidth: 150 }}
//             >
//               All
//             </div>
//           </div>

//           <hr />

//           {/* Food Items */}
//           <div className="row">
//             {filteredItems.map((item) => (
//               <div key={item.id} className="col-12 col-md-6 mb-4">
//                 <div className="d-flex justify-content-center align-items-center flex-wrap ms-lg-5 ms-sm-0 mt-2">
//                   <img
//                     src={item.img}
//                     style={{
//                       width: 120,
//                       height: 120,
//                       borderRadius: "50%",
//                     }}
//                     // alt={item.name || item.title}
//                   />
//                   <div className="ms-3">
//                     <Link to="/menu" className="foodcat">
//                       <h4>{item.name || item.title}</h4>
//                     </Link>
//                     <p
//                       className="mb-0 text-muted"
//                       style={{ fontSize: 16, fontWeight: 300 }}
//                     >
//                       {item.des || ""}
//                     </p>
//                     <strong style={{ fontSize: 20 }}>{item.price}</strong>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import { useState, useEffect, useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { BsHeartFill } from "react-icons/bs";
import { WishlistContext } from "../context/WishlistContext";
import { BsMinecartLoaded } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cartcontext";
import { Authcontext } from "../context/AuthContext";

// Banner & shape images
const item1 = "/assets/item1_1.png";
const item3 = "/assets/item1_3.png";
const item5 = "/assets/dishes2_5.webp";
const item6 = "/assets/dishes1_4.webp";
const item7 = "/assets/dishes1_5.webp";
const img1icon ="/assets/img1icon.png"

const img1 = "/assets/img1.png";
const img2 = "/assets/img2.png";
const img3 = "/assets/img3.png";
const leaf = "/assets/leafimg.svg";
const pepper = "/assets/pepper.svg";
const green1 = "/assets/imggreen.svg";
const green2 = "/assets/green2img.svg";
const shape1 = "/assets/bannerShape1_3.svg";
const shape2 = "/assets/bannerShape1_6.svg";
const pizzashape = "/assets/itemsShape1_2.png";
const burgershape = "/assets/bestFooditemsShape1_1.png";

// Static popular foods
const foods = [
  { img: item3, title: "Chicken Fried Rice", price: "$100.99" },
  { img: item5, title: "Chinese Pasta", price: "$15.99" },
  { img: item1, title: "Chicken Pizza", price: "$26.99" },
  { img: item6, title: "Chicken Noodles", price: "$39.00" },
  { img: item7, title: "Grilled Chicken", price: "$20.99" },
];

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(Authcontext);

  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch data from MockAPI
  useEffect(() => {
    Promise.all([
      fetch("https://68f85aefdeff18f212b5dd8a.mockapi.io/dishes").then((res) =>
        res.json()
      ),
      fetch("https://68f85aefdeff18f212b5dd8a.mockapi.io/fooditems").then(
        (res) => res.json()
      ),
      fetch(
        "https://68f86136deff18f212b5f1e7.mockapi.io/categories"
      ).then((res) => res.json()),
           fetch(
        "https://68d4c636e29051d1c0ac0c3a.mockapi.io/api/items"
      ).then((res) => res.json()),
    ])
      .then(([dishes, fooditems, categories,items]) =>
        setData({ dishes, fooditems, categories,items })
      )
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  // Filter food items by title (category field in your API is actually "title")
  const filteredItems =
    selectedCategory === "All"
      ? data.fooditems
      : data.fooditems.filter((item) => item.title === selectedCategory);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  return (
    <div>
      {/* Banner Carousel */}
      <section className="home-page position-relative">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            {[img1, img3, img2].map((imgSrc, idx) => (
              <div
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
                key={idx}
              >
                <img
                  className="d-none d-xxl-block position-absolute top-0 start-0"
                  src={pepper}
                  width={230}
                />
                <img
                  className="d-none d-xxl-block position-absolute top-0 end-0"
                  src={leaf}
                  width={200}
                />
                <div className="shapes">
                  <img
                    className="shape1 d-none d-xxl-block"
                    src={shape1}
                    width={230}
                  />
                  <img
                    className="shape2 d-none d-xxl-block"
                    src={shape2}
                    width={100}
                  />
                </div>
                <img
                  className="d-none d-xxl-block position-absolute bottom-0 start-0"
                  src={green1}
                  width={230}
                />
                <img
                  className="d-none d-xxl-block position-absolute bottom-0 end-0"
                  src={green2}
                  width={160}
                />
                <div className="home-content row d-flex justify-content-end align-items-center ps-4 position-absolute">
                  <div className="col-12 col-xxl-6">
                    <p className="h3 text-warning">WELCOME FRESHEAT</p>
                    <p
                      className="h1 text-white pb-5"
                      style={{ fontSize: "8rem", fontWeight: "bold" }}
                    >
                      SPICY FRIED CHICKEN
                    </p>
                    <button
                      className="ms-4 btn btn-danger px-5 py-3"
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        lineHeight: "40px",
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="col-12 col-xl-6 d-none d-xxl-block">
                    <img src={imgSrc} width="96%" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Food Carousel */}
      <section className="food-items py-5 position-relative">
        <img
          src={pizzashape}
          className="position-absolute d-none d-xxl-block"
          style={{ top: "90px", right: "100px" }}
          width={180}
        />
        <img
          src={burgershape}
          className="position-absolute d-none d-xxl-block"
          style={{ bottom: "40%", left: "0" }}
          width={200}
        />
        <div className="container mb-5">
        
          <p className="text-warning text-center fw-bold">  <span><img src={img1icon} width={50}/></span>BEST FOOD  <span><img src={img1icon} width={50}/></span></p>
          <p className="h2 text-white text-center fw-bold pb-5">
            Popular Food Items
          </p>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={2000}
            keyBoardControl
            showDots={false}
            arrows={false}
          >
            {data.items.map((item) => (
              <div
                key={item.id}
                className="text-center d-flex flex-column align-items-center justify-content-center position-relative mt-5"
              >
                <img
                  src={item.img}
                  className="position-absolute"
                  alt={item.title}
                  style={{ width: "200px", zIndex: 999, top: "5%" }}
                />
                <div
                  className="card d-flex flex-column align-items-center justify-content-center pt-4"
                  style={{
                    width: "18rem",
                    height: "16rem",
                    marginTop: "40%",
                    zIndex: -20,
                  }}
                >
                  <p className="h3 fw-bold" style={{ lineHeight: "50px" }}>
                    {item.title}
                  </p>
                  <p className="text-danger fw-bold" style={{ fontSize: "20px" }}>
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="dish-menu d-flex flex-column p-5">
        <div className="text-center py-5">
          <p className="h5 text-white"> <span><img src={img1icon} width={50}/></span>POPULAR DISHES <span><img src={img1icon} width={50}/></span></p>
          <p className="h2 text-white">Best Selling Dishes</p>
        </div>
        <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
          {foods.map((dish, idx) => (
            <div
              key={idx}
              className="card card-dish text-center  position-relative p-5 pt-5"
              style={{ width: "21rem", height: "25rem", zIndex: 1 }}
            >
              <img className="pb-3" src={dish.img} style={{ width: "200px" }} />
              <p className="h3 fw-bold " style={{ lineHeight: "50px" }}>
                {dish.title}
              </p>
              <p className="text-danger fw-bold" style={{ fontSize: "20px" }}>
                {dish.price}
              </p>

              {/* Wishlist */}
              <div
                className="position-absolute d-flex align-items-center justify-content-center"
                style={{ zIndex: 999, top: "15px", right: "25px", fontSize: 28 }}
              >
             <span
                    onClick={() => {
                      if (!user) {
                        alert("Please login first!");
                        return;
                      }

                      // Ensure the dish has an ID (important!)
                      const dishWithId = {
                        ...dish,
                        id: dish.id || dish.title.replace(/\s+/g, "-"), // fallback ID
                      };

                      toggleWishlist(dishWithId);
                    }}
                    className={`${
                      wishlist.find(
                        (i) =>
                          i.id === (dish.id || dish.title.replace(/\s+/g, "-")) &&
                          i.userEmail === user?.email
                      )
                        ? "bg-danger text-white"
                        : "bg-light text-dark"
                    } rounded-circle d-flex align-items-center justify-content-center`}
                    style={{ width: 45, height: 45, cursor: "pointer" }}
                  >
                    {wishlist.find(
                      (i) =>
                        i.id === (dish.id || dish.title.replace(/\s+/g, "-")) &&
                        i.userEmail === user?.email
                    ) ? (
                      <BsHeartFill />
                    ) : (
                      <CiHeart />
                    )}
            </span>

              </div>

              {/* Cart Icon */}
              <span
                className="cart-img"
                style={{ cursor: "pointer", fontSize: "28px", marginTop: "10px" }}
                onClick={() =>
                  addToCart({
                    id: idx,
                    title: dish.title,
                    price: dish.price,
                    img: dish.img,
                  })
                }
              >
                <BsMinecartLoaded />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Food Menu Filter */}
      <section className="food-cat bg-dark d-flex py-5">
        <div className="container bg-white pt-2 p-lg-5">
          <div className="text-center mb-4">
            <p className="h5 text-warning"> <span><img src={img1icon} width={50}/></span>FOOD MENU <span><img src={img1icon} width={50}/></span></p>
            <p className="h1">Fresheat Foods Menu</p>
          </div>

          {/* Categories */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            {data.categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`d-flex align-items-center gap-2 px-3 py-2 rounded ${
                  selectedCategory === cat.name
                    ? "bg-warning text-dark"
                    : "bg-light text-dark"
                }`}
                style={{ cursor: "pointer", fontWeight: 600, minWidth: 150 }}
              >
                <img src={cat.img} style={{ width: 36 }} />
                <span>{cat.name}</span>
              </div>
            ))}
            <div
              onClick={() => setSelectedCategory("All")}
              className={`d-flex align-items-center gap-2 px-3 py-2 rounded ${
                selectedCategory === "All"
                  ? "bg-warning text-dark"
                  : "bg-light text-dark"
              }`}
              style={{ cursor: "pointer", fontWeight: 600, minWidth: 150 }}
            >
             <span><img src={img1icon} width={80}/>All</span>
            </div>
          </div>

          <hr />

          {/* Food Items */}
          <div className="row">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-12 col-md-6 mb-4">
                <div className="d-flex justify-content-center align-items-center flex-wrap ms-lg-5 ms-sm-0 mt-2">
                  <img
                    src={item.img}
                    style={{ width: 120, height: 120, borderRadius: "50%" }}
                  />
                  <div className="ms-3">
                    <Link to="/menu" className="foodcat">
                      <h4>{item.name}</h4>
                    </Link>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: 16, fontWeight: 300 }}
                    >
                      {item.des || ""}
                    </p>
                    <strong style={{ fontSize: 20 }}>{item.price}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
