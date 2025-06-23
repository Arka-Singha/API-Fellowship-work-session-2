// tests/api/studentApi.test.js
const request = require('supertest');
const app = require('../../server');
const db = require('../../db');

beforeAll(async () => {
  await db.query("DELETE FROM students"); 
});


describe('Student API Endpoints', () => {
  let createdStudentId;

  test('POST /api/students - should create a new student', async () => {
    const res = await request(app)
      .post('/api/students')
      .send({
        name: 'API Test Student',
        email: 'apitest@example.com',
        course: 'Testing 101'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    createdStudentId = res.body.id;
  });

  test('GET /api/students - should return all students', async () => {
    const res = await request(app).get('/api/students');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /api/students/:id - should return a student by ID', async () => {
    const res = await request(app).get(`/api/students/${createdStudentId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', createdStudentId);
  });

  test('PUT /api/students/:id - should update a student', async () => {
    const res = await request(app)
      .put(`/api/students/${createdStudentId}`)
      .send({
        name: 'Updated Name',
        email: 'updated@email.com',
        course: 'Advanced Testing'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Updated Name');
  });

  test('DELETE /api/students/:id - should delete a student', async () => {
    const res = await request(app).delete(`/api/students/${createdStudentId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Student deleted');
  });
});

afterAll(async () => {
  await db.end();   // Close DB connection after tests
});