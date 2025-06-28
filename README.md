# 🤖 AI-Powered API Testing with Keploy – Project Report

## 📝 Project Title: **Studify – Full Stack Student Management API with Automated Testing**

## 🔍 Overview

Studify is a full-stack student management application built using Node.js, Express.js, MySQL, and HTML/JavaScript for the frontend. It supports complete CRUD operations through a custom RESTful API and features Postman-tested endpoints and automated testing using Jest and Supertest.

As part of Session 4 of the **Keploy API Fellowship**, the project was extended to integrate **AI-Powered API Testing** using **Keploy**, and automated through CI/CD principles using `ngrok` and `OpenAPI` schema specifications.

---

## ⚙️ Technologies Used

| Tool / Technology     | Purpose                                                  |
| --------------------- | -------------------------------------------------------- |
| **Node.js**           | Server-side runtime environment                          |
| **Express.js**        | Backend web framework for creating REST APIs             |
| **MySQL**             | Relational database for storing student records          |
| **dotenv**            | Manage configuration with `.env`                         |
| **HTML + JS + CSS**   | Lightweight frontend                                     |
| **Fetch API**         | Send client requests to the backend                      |
| **Postman**           | Manual API testing tool                                  |
| **Jest**              | JavaScript test framework for unit and integration tests |
| **Supertest**         | API testing library for HTTP assertions                  |
| **Swagger (OpenAPI)** | API documentation and schema definition                  |
| **Keploy**            | AI-powered test suite generator for APIs                 |
| **ngrok**             | Expose local server to public internet via secure tunnel |
| **GitHub Actions**    | CI/CD workflow automation tool                           |

---

## 🏠 Project Structure

```
student-api-server/
├── public/                      # Frontend files
├── controllers/                 # API endpoint logic
├── routes/                      # Route definitions
├── tests/
│   ├── unit/                    # Unit tests
│   │   └── studentController.test.js
│   ├── integration/             # DB interaction tests
│   │   └── dblntegration.test.js
│   └── api/                     # API endpoint tests
│       └── studentApi.test.js
├── .github/
│   └── workflows/
│       └── keploy.yml           # GitHub Actions config for Keploy
├── swagger.js                   # Swagger configuration
├── openapi.yaml                # OpenAPI schema
├── db.js                        # MySQL DB connection
├── server.js                    # Express server setup
├── .env                         # Environment variables
├── README.md                    # Main readme file
└── student_api_readme.md        # Additional readme
```

---

## 📁 Keploy CI/CD Integration

The project was configured to use **GitHub Actions** for running Keploy test suites in a CI/CD pipeline. Below is a sample configuration:

### .github/workflows/keploy.yml

```yaml
name: Keploy API Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  keploy-tests:
    runs-on: ubuntu-latest

    services:
      mysql:
        image: mysql:5.7
        env:
          MYSQL_ROOT_PASSWORD: root
          MYSQL_DATABASE: keploy_students
        ports:
          - 3306:3306
        options: >-
          --health-cmd="mysqladmin ping --silent" 
          --health-interval=10s 
          --health-timeout=5s 
          --health-retries=5

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Start App
        run: |
          nohup npm run dev &
          sleep 10

      - name: Download Keploy
        run: |
          curl --silent --location https://github.com/keploy/keploy/releases/latest/download/keploy-linux-amd64 -o keploy
          chmod +x keploy

      - name: Run Keploy Tests
        run: ./keploy test -c "curl http://localhost:3000/api/students" -u http://localhost:3000 -o openapi.yaml
```

---

## 📆 Test Suite Status

Once the workflow executes successfully, it runs full lifecycle API tests and generates a test report through Keploy in the CI environment.

You can view this in GitHub Actions under the "Actions" tab.

---

## 🌍 Base URL for Testing

Using `ngrok`, the project was hosted at:

```
https://185e-2405-201-682d-a06a-5885-4435-453b-55d4.ngrok-free.app
```

This made it possible for Keploy’s AI to access and generate tests using real-time cURL requests and OpenAPI specs.

---

## 🧲 Keploy AI Testing Process

### ✅ Tools Required:

- **Keploy Dashboard** ([https://app.keploy.io/api-testing/generate](https://app.keploy.io/api-testing/generate))
- **Swagger/OpenAPI YAML file**
- **5+ working curl commands**

### ✅ Test Generation Steps:

1. Set the base API URL to ngrok’s public endpoint
2. Pasted OpenAPI schema (see: `openapi.yaml`)
3. Pasted working curl commands (tested via Postman)
4. Clicked **"Generate API Tests"** in Keploy

Keploy's AI successfully analyzed endpoints and responses and created multiple test cases and assertions.

---

## 🔍 Sample cURL Commands Used

```bash
curl --location 'https://185e-2405-...ngrok-free.app/api/students' \
--header 'Content-Type: application/json' \
--data-raw '{"name": "Test User", "email": "test@example.com", "course": "API"}'

curl --location 'https://185e-2405-...ngrok-free.app/api/students'
curl --location 'https://185e-2405-...ngrok-free.app/api/students/1'
curl --location --request PUT 'https://185e-2405-...ngrok-free.app/api/students/1' \
--data-raw '{"name": "Updated", "email": "new@example.com", "course": "ML"}'
curl --location --request DELETE 'https://185e-2405-...ngrok-free.app/api/students/1'
```

---
## 🔍 Swagger OPENAPI SCHEMA

```bash
openapi: 3.0.0
info:
  title: Student API
  version: 1.0.0
  description: API for managing student records

servers:
  - url: http://localhost:3000
    description: Local development server

paths:
  /api/students:
    get:
      summary: Get all students
      responses:
        '200':
          description: A list of students
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Student'
    post:
      summary: Add a new student
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Student'
      responses:
        '201':
          description: Student created successfully

  /api/students/{id}:
    get:
      summary: Get a student by ID
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Student found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Student'
        '404':
          description: Student not found

    put:
      summary: Update student by ID
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Student'
      responses:
        '200':
          description: Student updated successfully

    delete:
      summary: Delete student by ID
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Student deleted successfully
        '404':
          description: Student not found

components:
  schemas:
    Student:
      type: object
      required:
        - name
        - email
        - course
      properties:
        id:
          type: integer
          example: 1
        name:
          type: string
          example: Arka Singha
        email:
          type: string
          example: arka@example.com
        course:
          type: string
          example: Backend Development

```

---

## 📦 Generated Test Cases by Keploy

Keploy automatically created the following test scenarios:

- ✅ `Create Student`
- ✅ `Get Student By ID`
- ✅ `Update Student By ID`
- ✅ `Delete Student And Verify`
- ✅ `Full_Lifecycle_Test`
- ✅ `Read Student`
- ✅ `Update Only Student Name`

All test cases include request body, headers, expected status codes, and assertion checks.

---

## 📸 Screenshots of AI Test Suite (Keploy Dashboard)
![Screenshot (1595)](https://github.com/user-attachments/assets/d8cb7d5c-5d8c-45e3-b6c4-fb25803995a9)
![Screenshot (1599)](https://github.com/user-attachments/assets/9d82b059-bde6-44a9-8a03-01973505ee44)
![Screenshot (1596)](https://github.com/user-attachments/assets/48e5b196-2edf-4361-b343-027a9dd1a535)
![Screenshot (1597)](https://github.com/user-attachments/assets/bb696fd1-3cf0-4ae6-926b-cebd1b7bc296)
![Screenshot (1598)](https://github.com/user-attachments/assets/0b1a76fa-125e-4dd0-aeba-0aab3b8380a4)

## 📸 Screenshots of AI Test In GitHUB
![Screenshot (1605)](https://github.com/user-attachments/assets/b12f4072-714b-403a-ace1-aca02b6c1021)
![Screenshot (1606)](https://github.com/user-attachments/assets/fece5cd0-0bd1-4685-ae42-b5c60dc8e0e2)
![Screenshot (1607)](https://github.com/user-attachments/assets/f8d49ba6-4061-4f37-bdfe-11c37ff588ec)


---

## 📅 Task 2: Keploy Chrome Extension Testing

The Keploy Chrome Extension was successfully used to generate tests by recording API calls from a live instance of the frontend hosted via ngrok.

### ✅ Steps Followed:

1. Loaded `index.html` using `ngrok` public URL (e.g. `https://6d99-...ngrok-free.app`)
2. Opened the Keploy Chrome Extension and clicked **"Start Recording"**
3. Performed all CRUD operations:
   - Create new student
   - Fetch all students
   - Edit student
   - Delete student
4. Stopped recording and clicked **"Generate Tests"**
5. Tests were successfully generated using the browser extension and visible in Keploy dashboard

### 📸 Screenshot of Chrome Extension Results

After Recording
![Screenshot (1610)](https://github.com/user-attachments/assets/e6ff753c-bf8c-4c6b-9156-22b8b540b858)

After clicking"Generate Tests"

![Screenshot (1611)](https://github.com/user-attachments/assets/c8b0dfd9-ddf5-4800-8ca5-8a04e25af700)
![Screenshot (1612)](https://github.com/user-attachments/assets/2a500a67-fd9d-4eb0-a755-23436b4ad959)
![Screenshot (1613)](https://github.com/user-attachments/assets/464f25fa-13e1-4128-bb29-9f0bf67ceddc)
![Screenshot (1614)](https://github.com/user-attachments/assets/b7cf84e3-92b7-473e-a504-a54612f0f075)

---

## 📝 Conclusion

This phase of the project demonstrated how AI can simplify test generation by analyzing API structure and usage patterns. Keploy provided an effortless and intelligent way to boost test coverage, ensure reliability, and enable API-first development workflows.

Combined with manual and automated testing (Jest + Supertest), the Keploy-powered pipeline makes the project production-ready and test-driven.

CI/CD integration using GitHub Actions ensures automated execution and consistent verification of API tests for every update to the codebase.

---

## 👨‍💻 Author

**Arka Singha**\
GitHub: Arka-Singha\
LinkedIn: [www.linkedin.com/in/arka-singha-99413225b](http://www.linkedin.com/in/arka-singha-99413225b)

