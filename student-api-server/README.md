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

## 📸 Screenshots

![Screenshot 2025-06-20 113459](https://github.com/user-attachments/assets/d0d73343-a8a2-493d-8252-0e975fbd4ec2)
Database and Table is created in MySQL.

---

![Screenshot 2025-06-20 113549](https://github.com/user-attachments/assets/a0cf675a-4c67-4ff5-9b37-252b61683bfe)
GET Method is applied in Postman to read data on the empty database to check connections properly.

---

![Screenshot (1578)](https://github.com/user-attachments/assets/4d99e29e-cba0-4cd9-b7f9-0c70b894291f)
POST Method is applied in Postman to create new data.

---

![Screenshot (1577)](https://github.com/user-attachments/assets/181c376a-d780-4311-986c-bd5441d516b0)
GET Method is applied in Postman to read data after adding data in the database.

---

![Screenshot (1579)](https://github.com/user-attachments/assets/20daef5b-77bc-4e68-8d3c-5853091dccda)
PUT Method is applied in Postman to update existing data in the database.

---

![Screenshot (1580)](https://github.com/user-attachments/assets/3f07acc4-0b81-4d5e-b427-27b2d905cdeb)
GET Method is applied in Postman to read data after updating data in the database.

---

![Screenshot (1581)](https://github.com/user-attachments/assets/c0abe274-7b28-4d21-b5ed-31a5ea2e149a)
DELETE Method is applied in Postman to delete existing data in the database.

---

![Screenshot (1582)](https://github.com/user-attachments/assets/f25f7c7c-bf63-4583-9f63-b018b57ebf14)
GET Method is applied in Postman to read data after deleting data in the database.

---

https://github.com/user-attachments/assets/6a89a043-3717-4c14-a0dc-f4639c1a2d59
Frontend is working and taking responce from the user. New data is added and deleted in the video.

---

![Screenshot 2025-06-20 133737](https://github.com/user-attachments/assets/5eb6121a-a42d-4dec-9f77-3772d7781256)
New data is added and deleted in the website and reflected in the database in MySQL Workbench.

---

https://github.com/user-attachments/assets/bb6cfa1e-ee9e-4824-b63c-61f13d95d09f
Frontend is working and taking responce from the user. Existing data is edited in the video.

---

![Screenshot (1583)](https://github.com/user-attachments/assets/2a7c6738-78c7-4392-9ab4-583aa740f73f)
Existing data is updated in the website and reflected in the database in MySQL Workbench.


---

## 🤝 Contribution

Pull requests are welcome. Please fork the repository and raise a PR with your improvements or features.

---

## 🙌 Acknowledgement

Built with ❤️ as part of the [Keploy API Fellowship – Session 2](https://keploy.io/fellowship)

---

## 👨‍💻 Author

**Arka Singha**
[GitHub](https://github.com/yourusername) | [LinkedIn](https://linkedin.com/in/yourlinkedin)

---

