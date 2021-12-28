const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
chai.use(chaiHttp);
chai.should();
const labelData = require("./label.token.json");

describe("Add Label", () => {
  it("when call AddLabel api, should return appropriate response from controller", (done) => {
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

  it("when call AddLabel api, should return appropriate response from controller", (done) => {
    const token = labelData.notes.inValidToken;
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
        res.should.have.status(400);
        return done();
      });
  });

  it("when call AddLabel api with valid input, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/addLabel/61ca792c3e0c670ef5737934")
      .set({ authorization: token })
      .send({ labelName: "fakeName" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it.only("when call AddLabel api with false params, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/addLabel/61ca792c3e0c670ef4")
      .set({ authorization: token })
      .send({ labelName: "fakeName" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });
});
