
## 📚 **Project: Book Tracker**  🌐 https://booktracker-1-p4a5.onrender.com

A **full-stack web application** that lets users:

* **Register & log in**
* **Add books** to personal lists
* **Track reading progress**
* **Rate & review** books they finish

---

### 🗂️ **Main features**

1️⃣ **Authentication**

* Users register with `username`, `email`, `password`
* Login generates a JWT token stored in localStorage

2️⃣ **Dashboard**

* Displays books grouped by status: **To Read**, **Reading**, **Completed**
* Users can update status, mark pages read, add a rating & review

3️⃣ **Add Books**

* Simple form to add title, author, total pages
* Stored under the logged-in user

4️⃣ **Reviews Page**

* Shows only books that are `Completed` **and** have a review

5️⃣ **Clean UI**

* Fully responsive, styled with Tailwind CSS
* Reusable components for cards, header, messages

---

### ⚙️ **Tech Stack**

* **Frontend:** React + React Router + Axios + Tailwind CSS
* **Backend:** Node.js + Express + Mongoose
* **Database:** MongoDB Atlas (cloud-hosted)
* **Deployment:** Render (both backend and frontend)

---

### 🌐 **How it works**

1️⃣ User registers → data saved in MongoDB `users` collection
2️⃣ User logs in → receives a JWT, stored in browser
3️⃣ User adds books → each book saved in `books` collection with `userId`
4️⃣ User updates progress → backend updates MongoDB
5️⃣ Frontend pulls books by `userId` → groups them by status

---

### ☁️ **Deployment**

* **Backend API:** Deployed on Render → serves `/api/users` and `/api/books`
* **Frontend:** Deployed separately on Render Static Site → calls the API with Axios pointing to the live backend URL.

---

### 🔐 **Environment & Secrets**

* `.env` holds your `MONGO_URI` for connecting to your Atlas cluster
* JWT secret key for signing tokens
* These are **never pushed to GitHub**, only set in your Render environment or `.env`

---

## 🚀 **Goal**

✅ **A real-world MERN app** that shows:

* User authentication
* Protected routes & API
* CRUD operations with MongoDB
* Deployment-ready code & config
