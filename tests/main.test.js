import request from 'supertest'
import app from '../index'

describe('Test', () => {
  test('GET /hello', (done) => {
    request(app)
      .get('/hello')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        return done()
      })
  })
  // More things come here
})
