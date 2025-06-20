# API-Fellowship-work-session-2




# 📘 Student API Server + Frontend (CRUD App)

A full-stack web application that allows you to manage student records via a RESTful API and a simple HTML+JavaScript frontend. This project was built as part of the **Keploy API Fellowship Session 2**, aimed at demonstrating hands-on skills in building and consuming custom APIs.

---

## 🚀 Project Overview

This app allows users to:

- Add new students
- View all students
- Update student details
- Delete student entries

The backend is built using **Node.js + Express** with a **MySQL** database, and the frontend is a lightweight HTML interface using **JavaScript (Fetch API)** to interact with the backend.

## Summary Table:

| CRUD Action | HTTP Method | Example Endpoint    | Use                            |
| ----------- | ----------- | ------------------- | ------------------------------ |
| Create      | POST        | `/api/students`     | Add a new student              |
| Read        | GET         | `/api/students`     | Get all students               |
| Read        | GET         | `/api/students/:id` | Get a single student by ID     |
| Update      | PUT         | `/api/students/:id` | Update an existing student     |
| Delete      | DELETE      | `/api/students/:id` | Remove a student from the list |

---

## 🔧 Features & Functionalities

| Feature           | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| 🧩 RESTful API    | Provides endpoints to perform CRUD operations on student data              |
| 🗃️ MySQL DB       | Stores student records persistently                                          |
| 🖥️ Frontend UI    | Simple HTML+JS interface to add/view/edit/delete students                   |
| 📬 API Testing    | All endpoints tested using Postman                                          |
| 🔒 Secure Config  | Database credentials and port managed securely using environment variables |

---

## 🛠 Tech Stack Breakdown

| Tool / Library         | Purpose                                         |
|------------------------|-------------------------------------------------|
| **Node.js**            | JavaScript runtime for building the backend     |
| **Express.js**         | Web framework to define routes and middleware   |
| **MySQL**              | Relational database to store student records    |
| **dotenv**             | Load environment variables from `.env` file     |
| **Postman**            | API testing tool                                |
| **HTML + CSS**         | Frontend structure and styling                  |
| **JavaScript (Fetch)** | Send requests from the frontend to backend API  |
| **MySQL Workbench**    | GUI to manage and inspect database entries      |

---

## 📂 Project Structure

```

student-api-server/
├── routes/
│   └── studentRoutes.js        # Route definitions
├── controllers/
│   └── studentController.js    # Logic for each API endpoint
├── public/
│   └── index.html              # Frontend interface
├── db.js                       # MySQL DB connection setup
├── server.js                   # Express server setup
├── .env                        # Environment configuration
└── README.md

````

---

## 📌 CRUD API Documentation

> Base URL: `http://localhost:3000/api/students`

### ➕ POST `/`

**Create a new student**

- **Method:** `POST`
- **Request Body:**
```json
{
  "name": "Arka Singha",
  "email": "arkaexample@gmail.com",
  "course": "API Dev"
}
````

* **Response:**

```json
{
  "id": 1,
  "name": "Arka Singha",
  "email": "arkaexample@gmail.com",
  "course": "API Dev"
}
```

---

### 📖 GET `/`

**Get all students**

* **Method:** `GET`
* **Response:**

```json
[
  {
    "id": 1,
    "name": "Arka Singha",
    "email": "arkaexample@gmail.com",
    "course": "API Dev"
  }
]
```

---

### 🔍 GET `/:id`

**Get a specific student by ID**

* **Method:** `GET`
* **Example:** `/api/students/1`
* **Response:**

```json
{
  "id": 1,
  "name": "Arka Singha",
  "email": "arkaexample@gmail.com",
  "course": "API Dev"
}
```

---

### ✏️ PUT `/:id`

**Update student details**

* **Method:** `PUT`
* **Example:** `/api/students/1`
* **Request Body:**

```json
{
  "name": "Arka Updated",
  "email": "Arka@updated.com",
  "course": "Backend Engineering"
}
```

* **Response:**

```json
{
  "id": 1,
  "name": "Arka Updated",
  "email": "Arka@updated.com",
  "course": "Backend Engineering"
}
```

---

### ❌ DELETE `/:id`

**Delete a student by ID**

* **Method:** `DELETE`
* **Example:** `/api/students/1`
* **Response:**

```json
{
  "message": "Student deleted"
}
```

---

## 🧪 Testing Instructions

* Test each endpoint using [Postman](https://postman.com) or `curl`
* All API responses are in JSON format
* Ensure the server is running (`npm run dev`)
* MySQL DB must be active and correctly configured in `.env`

---

## 🌐 Frontend Usage

* Load `index.html` from the `public/` folder
* Uses Fetch API to:

  * Display all students on page load
  * Add new students via form
  * Edit existing student data
  * Delete students from list

---

## 🛠️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/student-api-server.git
cd student-api-server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment File

Create `.env`:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=keploy_students
```

### 4. Setup MySQL Database

```sql
CREATE DATABASE keploy_students;
USE keploy_students;
CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  course VARCHAR(100) NOT NULL
);
```

### 5. Run the Server

```bash
npm run dev
```

---

## 📸 Screenshots (Optional)

> Include screenshots of the frontend and Postman tests here.
![Screenshot 2025-06-20 113459](https://github.com/user-attachments/assets/d0d73343-a8a2-493d-8252-0e975fbd4ec2)

---

## 🤝 Contribution

Pull requests are welcome. Please fork the repository and raise a PR with your improvements or features.

---

## 📄 License

This project is released under the [MIT License](LICENSE).

---

## 🙌 Acknowledgement

Built with ❤️ as part of the [Keploy API Fellowship – Session 2](https://keploy.io/fellowship)

---

## 👨‍💻 Author

**Arka Singha**
[GitHub](https://github.com/yourusername) | [LinkedIn](https://linkedin.com/in/yourlinkedin)

---

```

Let me know if you want:
- A GitHub-ready `README.md` file pushed
- A LinkedIn post to announce your project
- Screenshot placeholders replaced with real screenshots

You're all set to submit and share — congratulations! 🎉
```
