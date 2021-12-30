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
  it("when call getLabel with inValid token , should return appropriate response from controller", (done) => {
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

  it("when call getLabel with valid token , should return appropriate response from controller", (done) => {
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

  it("check validation , should return appropriate response from controller", (done) => {
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

  it("when call getLabel with valid token , should return appropriate response from service", (done) => {
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

  it("when call getLabel with valid token , should return appropriate response from model", (done) => {
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

  it("check with valid token , should return appropriate response from model", (done) => {
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

  it("check with invalid token , should return appropriate response from model", (done) => {
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

  it("check without token , should return appropriate response from model", (done) => {
    chai
      .request(server)
      .get("/getLabel")
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(500);
        return done();
      });
  });
});

// api for getLabel by Id

describe("Get Label By ID", () => {
  it("when call getLabelById with valid token , should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel/61cc4aec22dd21239e23cdf0")
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

  it("when call getLabelById with invalid token , should return appropriate response from controller", (done) => {
    const token = labelData.notes.inValidToken;
    chai
      .request(server)
      .get("/getLabel/61cc4aec22dd21239e23cdf0")
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

  it("check validation of true params , should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel/61cc4aec22dd21239e23cdf0")
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

  it("check validation of false params , should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel/61cc4e23cdf0")
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

  it("when call getLabelById with valid token , should return appropriate response from service", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel/61cc4aec22dd21239e23cdf0")
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

  it("when call getLabelById with valid token , should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel/61cc4aec22dd21239e23cdf0")
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

  it("check with valid params , should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel/61cc4aec22dd21239e23cdf0")
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

  it("check with false params , should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/getLabel/61cc4ae7c22dd21239e23cdf0")
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
});

// api for updateLabelById

describe("Update Label", () => {
  it("when call update label api, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .put("/updateLabel/61cc4aec22dd21239e23cdf0")
      .set({ authorization: token })
      .send({ labelName: "Rohit" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when call update label api, should return appropriate response from controller", (done) => {
    const token = labelData.notes.inValidToken;
    chai
      .request(server)
      .put("/updateLabel/61cc4aec22dd21239e23cdf0")
      .set({ authorization: token })
      .send({ labelName: "Rohit" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("check validation with true input, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .put("/updateLabel/61cc4aec22dd21239e23cdf0")
      .set({ authorization: token })
      .send({ labelName: "Rohit rupali" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("check validation with false labelName, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .put("/updateLabel/61cc4aec22dd21239e23cdf0")
      .set({ authorization: token })
      .send({ labelName: "Ro" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("check validation with false params, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .put("/updateLabel/61cc239e23cdf0")
      .set({ authorization: token })
      .send({ labelName: "Rohithdffd" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("when call updateLabel api, should return appropriate response from service", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .put("/updateLabel/61cc4aec22dd21239e23cdf0")
      .set({ authorization: token })
      .send({ labelName: "RohitGujpta" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when call updateLabel api, should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .put("/updateLabel/61cc4aec22dd21239e23cdf0")
      .set({ authorization: token })
      .send({ labelName: "RohitGuphhta" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("check updation with true id, should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .put("/updateLabel/61cc4aec22dd21239e23cdf0")
      .set({ authorization: token })
      .send({ labelName: "RohitGupta" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("check updation with false id, should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .put("/updateLabel/61cc4aec224dd21239e23cdf0")
      .set({ authorization: token })
      .send({ labelName: "RohitGupta" })
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
