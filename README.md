# 💰 Xpensely - Expense Tracker API

Xpensely is a simple and secure REST API built with **Node.js**, **TypeScript**, and **MySQL** that helps users track their daily expenses. It offers user authentication, full expense management, and monthly summaries.

---

## 🚀 Features

- ✅ User Registration & Login (JWT Authentication)
- ✅ Add, View, Edit, and Delete Expenses
- ✅ Get Monthly Expense Summary (Grouped by Category)
- ✅ Protected Routes using Middleware
- ✅ Modular Project Structure

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Dev Tools**: ts-node-dev, dotenv

---

## 📦 API Endpoints

### 🔐 Authentication

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/auth/register` | Register a new user   |
| POST   | `/api/auth/login`    | Login & get JWT token |

---

### 💸 Expenses (Protected)

All routes below require an `Authorization: Bearer <token>` header.

| Method | Endpoint                                   | Description                 |
| ------ | ------------------------------------------ | --------------------------- |
| POST   | `/api/expenses`                            | Add new expense             |
| GET    | `/api/expenses`                            | Get all user expenses       |
| GET    | `/api/expenses/:id`                        | Get single expense by ID    |
| PUT    | `/api/expenses/:id`                        | Edit an expense             |
| DELETE | `/api/expenses/:id`                        | Delete an expense           |
| GET    | `/api/expenses/summary?year=YYYY&month=MM` | Monthly summary by category |

---

## 📂 Setup Instructions

1. Clone the repo
2. Run `npm install`
3. Configure `.env` with your DB credentials
4. Start MySQL and create the database manually (`xpensely`)
5. Create tables via SQL tab in phpMyAdmin
6. Run `npm run dev`

```

```

## 📝 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and distribute for personal and commercial purposes.

---

## 🙌 Contribution

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

---

## 💬 Contact

Created with ❤️ by Sushmitha Shettigar
