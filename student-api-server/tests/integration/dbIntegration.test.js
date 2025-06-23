const request = require('supertest');
const app = require('../../server'); // make sure `app` is exported from server.js
const mysql = require('mysql2/promise');

// ✅ Optional: You can also clean up test DB rows before/after each test
let connection;

beforeAll(async () => {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
});

afterAll(async () => {
  await connection.end();
});

describe('Integration Test: Student API + DB', () => {
  let createdStudentId;

  test('should create a new student', async () => {
    const res = await request(app)
      .post('/api/students')
      .send({
        name: 'Test Student',
        email: 'test@student.com',
        course: 'Testing 101'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    createdStudentId = res.body.id;
  });

  test('should retrieve the created student from DB', async () => {
    const [rows] = await connection.execute('SELECT * FROM students WHERE email = ?', ['test@student.com']);
    expect(rows.length).toBeGreaterThan(0);
    expect(rows[0].name).toBe('Test Student');
  });

  test('should delete the test student', async () => {
    const res = await request(app).delete(`/api/students/${createdStudentId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Student deleted' });
  });
});
