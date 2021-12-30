/* eslint-disable node/handle-callback-err */
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
      .post("/addLabel/61cc4dffb33009b46075b861")
      .set({ authorization: token })
      .send({ labelName: "fakeNamefff" })
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
      .post("/addLabel/61cc4dffb33009b46075b861")
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
      .post("/addLabel/61cc4dffb33009b46075b861")
      .set({ authorization: token })
      .send({ labelName: "fakeNamgge" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when call AddLabel api with false params, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/addLabel/61ca792c3e0c670ef4")
      .set({ authorization: token })
      .send({ labelName: "fakfeName" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("when call AddLabel api with false label, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/addLabel/61cc4dffb33009b46075b861")
      .set({ authorization: token })
      .send({ labelName: "fake" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("when call AddLabel api, should return appropriate response from Service", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/addLabel/61cc4dffb33009b46075b861")
      .set({ authorization: token })
      .send({ labelName: "fakkkeName" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when call AddLabel api, should return appropriate response from Model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/addLabel/61cc4dffb33009b46075b861")
      .set({ authorization: token })
      .send({ labelName: "fakeNammme" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when note id present then add to DB, should return appropriate response from Model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/addLabel/61cc4dffb33009b46075b861")
      .set({ authorization: token })
      .send({ labelName: "fakeNallme" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when note id absent then status code 400, should return appropriate response from Model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/addLabel/62cc4dffb33009b46075b861")
      .set({ authorization: token })
      .send({ labelName: "fakeNallme" })
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

// api for getLabel

describe("GetLabel", () => {
  it.only("when call getLabel with inValid token , should return appropriate response from controller", (done) => {
    const token = labelData.notes.inValidToken;
    chai
      .request(server)
      .get("/getLabel")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it.only("when call getLabel with valid token , should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it.only("check validation , should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it.only("when call getLabel with valid token , should return appropriate response from service", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it.only("when call getLabel with valid token , should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it.only("check with valid token , should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel")
      .set({ authorization: token })
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
