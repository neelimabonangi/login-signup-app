# Login & Signup Authentication App

A full-stack web application that implements a complete **Sign Up / Login authentication flow** with a clean UI, secure backend, and protected dashboard.

---

## 🚀 Features

- User Sign Up and Login
- Secure password hashing
- JWT-based authentication
- Protected dashboard route
- Clean and simple UI
- Frontend & backend deployed separately

---

## 🛠 Tech Stack

### Frontend
- React JS (Vite)
- HTML5, CSS3
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- JWT (JSON Web Token)
- bcrypt (for password hashing)

### Database
- MySQL

### Deployment
- Frontend: Vercel
- Backend: Render

---

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:


---

## ▶️ Run the Project Locally

### 1️⃣ Start Backend

cd backend
npm install
npm start

### 2️⃣ Start Frontend

cd frontend
npm install
npm run dev

---

🌐 Deployment

Backend deployed on Render

Frontend deployed on Vercel

Environment variables used to connect frontend to backend securely

---

✅ Authentication Flow

User signs up with name, email, and password

Password is hashed using bcrypt

JWT token is generated on successful login

Token is used to access protected dashboard routes

Unauthorized users are redirected to login



