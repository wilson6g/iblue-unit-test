var chai = require('chai')
  , chaiHttp = require('chai-http');
const dotenv = require('dotenv')

chai.use(chaiHttp);
dotenv.config();

describe('Test SUBTRACT API', () => {
  it('should subtract an array of numbers', (done) => {

    let numbers = {
      "numbers": [10, 1, 1, 1]
    }

    chai.request('localhost:' + process.env.NODE_PORT)
      .post('/api/subtract')
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


