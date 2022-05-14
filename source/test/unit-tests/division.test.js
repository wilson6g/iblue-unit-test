var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Test DIVISION API', () => {
  it('should divide an array of numbers', (done) => {

    let numbers = {
      "numbers": ["10", "2", "2", "2"]
    }

    chai.request('localhost:' + process.env.NODE_PORT)
      .post('/api/division')
      .type('json')
      .send(numbers)
      .end((error, response) => {
        if (error) {
          done(error);
        }
        chai.expect(error).to.be.null;
        chai.expect(response).to.have.status(201);

        done();
      })
  },
    it('should type error', (done) => {

      let numbers = {
        "numbers": ["a", "@", "#", "d"]
      }

      chai.request('localhost:' + process.env.NODE_PORT)
        .post('/api/division')
        .type('json')
        .send(numbers)
        .end((error, response) => {
          if (error) {
            done(error);
          }
          chai.expect(response).to.have.status(422);
          done();
        })
    },
    ));
});


