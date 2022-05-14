var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Test SUM API', () => {
  it('should sum an array of numbers', (done) => {

    let numbers = {
      "numbers": [10, 10, 10, 10]
    }

    chai.request('localhost:' + process.env.NODE_PORT)
      .post('/api/sum')
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
  });
});


