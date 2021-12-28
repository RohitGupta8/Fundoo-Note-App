const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
chai.use(chaiHttp);
chai.should();
const labelData = require("./label.token.json");

describe("Add Label", () => {
  it.only("when call AddLabel api, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/addLabel")
      .set({ authorization: token })
      .send({})
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });
});
