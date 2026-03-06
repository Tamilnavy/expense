# 💰 Expense Tracker – MERN Stack

![React](https://img.shields.io/badge/Frontend-React.js-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/API-Express.js-grey)
![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

A **Full Stack Expense Tracker Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
This application allows users to **track income, manage expenses, view financial summaries, and analyze transactions through charts**.

---

# 🚀 Live Demo

Frontend: *(Add when deployed)*
Backend API: *(Add when deployed)*

GitHub Repository
https://github.com/Tamilnavy/expense-tracker

---

# 📌 Features

### 🔐 Authentication

* Secure **JWT Token Authentication**
* User login and registration
* Protected routes

### 📊 Dashboard

* Total Balance overview
* Total Income summary
* Total Expense summary
* Recent transaction list

### 💵 Income Management

* Add income
* Track income history
* Income chart visualization

### 💳 Expense Management

* Add expenses
* Categorize expenses
* Expense tracking

### 📈 Analytics

* Income overview charts
* Expense distribution charts
* Financial summary insights

---

# 🛠 Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* Recharts
* React Router

## Backend

* Node.js
* Express.js
* JWT Authentication
* REST API Architecture

## Database

* MongoDB Atlas (Cloud Database)

---

# 🏗 System Architecture

Client (React.js)
⬇
REST API (Node.js + Express.js)
⬇
MongoDB Atlas Database

---

# 📸 Screenshots

## 🔐 Login Page

![Login](screenshots/login.png)

## 📊 Dashboard

![Dashboard](screenshots/dashboard.png)

## 💵 Income Page

![Income](screenshots/income.png)

## 💳 Expense Page

![Expense](screenshots/expense.png)

---

# 📂 Project Structure

```
expense-tracker
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── utils
│   └── App.jsx
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```
git clone https://github.com/Tamilnavy/expense-tracker.git
```

---

## 2️⃣ Navigate to the Project

```
cd expense-tracker
```

---

## 3️⃣ Install Backend Dependencies

```
cd backend
npm install
```

---

## 4️⃣ Install Frontend Dependencies

```
cd frontend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the **backend folder**.

```
PORT=8000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

---

# ▶️ Run the Application

### Start Backend

```
npm run dev
```

### Start Frontend

```
npm run dev
```

Application will run on:

```
http://localhost:5173
```

---

# 📡 API Endpoints

### Authentication

POST /api/auth/register
POST /api/auth/login

### Transactions

GET /api/transactions
POST /api/transactions
DELETE /api/transactions/:id

### Dashboard

GET /api/dashboard

---

# 📊 What I Learned

* Building **Full Stack MERN Applications**
* Implementing **JWT Authentication**
* REST API Development
* MongoDB Atlas Cloud Database
* Data visualization using charts
* Frontend UI development with React & Tailwind

---

# 🔮 Future Improvements

* Monthly financial reports
* Budget tracking system
* Export financial data
* Mobile responsive improvements
* Cloud deployment

---

# 👨‍💻 Author

**Tamil**

GitHub
https://github.com/Tamilnavy

LinkedIn
https://www.linkedin.com/

---

⭐ If you like this project, please **give it a star on GitHub!**
