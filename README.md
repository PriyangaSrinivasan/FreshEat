# 🍕 FreshEat — Food Delivery Web App

A modern, fully responsive food delivery web application built with **React.js**, featuring a dark-themed UI, Razorpay payment integration, and dynamic data from MockAPI.

---

## 🚀 Live Demo

https://fresheathub.netlify.app/

---

## ✨ Features

- 🏠 **Home Page** — Hero carousel, popular food items, best selling dishes, food menu filter
- 📋 **Menu Page** — Paginated food listing with wishlist & add-to-cart functionality
- ℹ️ **About Page** — Brand story, stats, chef profiles, app download section
- 📞 **Contact Page** — Contact form with Google Maps embed
- 🛒 **Cart** — Add, remove, update quantity, order summary
- 💳 **Checkout** — Billing form with Razorpay payment gateway integration
- 📦 **Orders** — Order history stored in localStorage per user
- ❤️ **Wishlist** — Save favourite dishes, move to cart
- 🔐 **Auth** — Login & Signup with context-based authentication
- 🌙 **Dark Theme** — Consistent dark UI across all pages (`#120a08` base)
- 📱 **Responsive** — Mobile-first design, works on all screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| React.js | Frontend framework |
| React Router DOM | Client-side routing |
| Bootstrap 5 | Grid & utility classes |
| React Icons | Icon library |
| React Slick | Carousel/slider |
| React Multi Carousel | Food items carousel |
| Razorpay | Payment gateway |
| MockAPI | REST API for food data |
| localStorage | Cart, orders & auth persistence |

---


```bash
# 1. Clone the repository
git clone https://github.com/your-username/fresheat.git

# 2. Navigate into the project
cd fresheat

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

App will run at `http://localhost:5173`

---

## 🔑 Environment & API Keys

This project uses a **Razorpay test key** — no real money is charged.

---

## 💳 Test Payment Credentials

Use these details in the Razorpay popup during checkout:

| Field | Value |
|-------|-------|
| Card Number | `4111 1111 1111 1111` |
| Expiry | `12/26` |
| CVV | `123` |
| OTP | `1234` |

Or use UPI test ID: `success@razorpay`

---

## 🌐 API Endpoints (MockAPI)

| Endpoint | Data |
|----------|------|
| `/fooditems` | Menu items |
| `/dishes` | Best selling dishes |
| `/categories` | Food categories |
| `https://68d4c636e29051d1c0ac0c3a.mockapi.io/api/items` | Popular items |
| `https://68d4c636e29051d1c0ac0c3a.mockapi.io/api/cart` | Cart (POST) |

---

## 📝 Known Limitations

- Authentication uses `localStorage` — not suitable for production (use JWT + backend)
- Orders are stored in `localStorage` — cleared if browser data is wiped
- Razorpay test key only — switch to live key for real payments

---

## 👩‍💻 Author

**Priyalaksha**
- 📧 priyalaksha17@gmail.com
- 📍 Peelamedu, Coimbatore – 641004, Tamil Nadu
- 📞 +91 8220371853

---

## 📄 License

This project is for educational purposes. Feel free to fork and build upon it.

---

> Built with ❤️ using React.js & Razorpay
