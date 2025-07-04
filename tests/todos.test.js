const request = require('supertest');
const app = require('../app');

describe('To-Do API', () => {
  it('GET /todos should return list', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('POST /todos should create todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ title: 'Test todo', description: 'This is a test' });
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('id');
  });

  it('DELETE /todos/:id should delete todo', async () => {
    const postRes = await request(app)
      .post('/todos')
      .send({ title: 'Delete me', description: 'To be deleted' });
    const id = postRes.body.data.id;

    const deleteRes = await request(app).delete(`/todos/${id}`);
    expect(deleteRes.statusCode).toBe(200);
    expect(deleteRes.body.message).toBe('Xoá to-do thành công');
  });
});
