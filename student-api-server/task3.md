As this `Readme.md` file is about session 3 which is built on session-2, you can go to `student-api-server` to get the `Readme.md` of session 2 to get better clarity and information about this project.


# API-Fellowship-work-session-3 

# 📘 Student API Server + Frontend (CRUD App) + Automated Testing

A full-stack web application that allows you to manage student records via a RESTful API and a simple HTML+JavaScript frontend. This project was built as part of the **Keploy API Fellowship Session 2**, aimed at demonstrating hands-on skills in building, consuming, and testing custom APIs.

---

## 🚀 Project Overview

This app allows users to:

- Add new students
- View all students
- Update student details
- Delete student entries
- Test the API logic, DB connectivity, and full endpoint behavior using automated test suites

The backend is built using **Node.js + Express** with a **MySQL** database, and the frontend is a lightweight HTML interface using **JavaScript (Fetch API)**. Automated testing uses **Jest** and **Supertest**.

---

## 🔧 Features & Functionalities

| Feature            | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| 🧹 RESTful API     | Provides endpoints to perform CRUD operations on student data |
| 🗃️ MySQL DB       | Stores student records persistently                           |
| 🖥️ Frontend UI    | Simple HTML+JS interface to add/view/edit/delete students     |
| 🛏️ API Testing    | All endpoints tested using Postman and Jest                   |
| 🔒 Secure Config   | Environment variables managed securely with `.env` file       |
| 🌀 Test Automation | Unit, integration, and API tests with coverage reports        |

---

## 🛠️ Tech Stack Breakdown

| Tool / Library         | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| **Node.js**            | JavaScript runtime for backend           |
| **Express.js**         | Web framework to define routes           |
| **MySQL**              | Relational DB for storing student data   |
| **dotenv**             | Manage environment variables             |
| **Postman**            | Manual API testing                       |
| **HTML + CSS**         | Frontend structure and design            |
| **JavaScript (Fetch)** | API calls from frontend                  |
| **MySQL Workbench**    | GUI to manage database                   |
| **Jest**               | Unit and integration test framework      |
| **Supertest**          | HTTP assertions for API endpoint testing |

---

## 📂 Project Structure

```
student-api-server/
├── controllers/
│   └── studentController.js    # Logic for each API endpoint
├── routes/
│   └── studentRoutes.js        # Route definitions
├── public/
│   └── index.html              # Frontend interface
├── tests/
│   ├── unit/                   # Unit tests
│   ├── integration/            # DB integration tests
│   └── api/                    # Full API endpoint tests
├── db.js                       # MySQL DB connection
├── server.js                   # Express app setup
├── .env                        # Environment config
└── README.md
```

---

## 🧪 Testing Implementation (New Tasks)

As part of **Session 3 of the Keploy API Fellowship**, we added automated testing:

### ✅ Unit Tests

- Tested controller logic with and without mocking DB.
- Ensured functions handle valid input and edge cases.
- Example: student creation without DB involvement.

### ⚖️ Integration Tests

- Verified DB interaction (INSERT, UPDATE, DELETE).
- Ensured real DB reflects changes after API calls.

### 🔐 API Tests

- Tested endpoint behavior using `Supertest`.
- Verified full response correctness and error handling.
- Used `beforeAll`/`afterAll` hooks with `async/await`.

### ⌚ Coverage Report (Final Output)

- All tests passed.
- 88%+ statement coverage achieved across all modules.



---

## 🔬 How to Run the Tests

```bash
# Install dependencies
npm install

# Run all tests with coverage
npm test
```

---

## 📐 CRUD API Documentation

> Base URL: `http://localhost:3000/api/students`

It reamains same as the earlier task (Keploy Session 2).

| CRUD Action | HTTP Method | Example Endpoint    | Use                            |
| ----------- | ----------- | ------------------- | ------------------------------ |
| Create      | POST        | `/api/students`     | Add a new student              |
| Read        | GET         | `/api/students`     | Get all students               |
| Read        | GET         | `/api/students/:id` | Get a single student by ID     |
| Update      | PUT         | `/api/students/:id` | Update an existing student     |
| Delete      | DELETE      | `/api/students/:id` | Remove a student from the list |
---

## 🌐 Frontend Usage

It reamains same as the earlier task (Keploy Session 2).

---

## 💪 Installation & Setup

It reamains same as the earlier task (Keploy Session 2).

run npm install `--save-dev jest supertest` to installs all project dependencies, including Jest and Supertest for testing.

---

## 📸 Testing Screenshots

&#x20; &#x20;

<img width="380" alt="Unit_testing_output" src="https://github.com/user-attachments/assets/5c85eec7-65cc-42d7-a2a7-8257c8994e29" />
Unit testing Passed

<img width="410" alt="Screenshotafterunittestingandintegrationtesting" src="https://github.com/user-attachments/assets/3aa6af09-78e0-46ce-90df-7ccc81c826d9" />
Unit testing and Integration Testing passed

<img width="770" alt="all3testing-unit-integration-api-output" src="https://github.com/user-attachments/assets/32a567f2-edfd-4958-b66e-0c8706e39700" />
All three tests: Unit Testing, Integration Testing and API testing passed.

---

## 🤝 Contribution

Pull requests are welcome. Please fork the repo and create a PR with your improvements.

---

## 🙌 Acknowledgement

Built with ❤️ as part of the [Keploy API Fellowship – Session 2 & 3](https://keploy.io/fellowship)

---

## 👨‍💻 Author

**Arka Singha**\
[GitHub](https://github.com/yourusername) | [LinkedIn](https://linkedin.com/in/yourlinkedin)

---

