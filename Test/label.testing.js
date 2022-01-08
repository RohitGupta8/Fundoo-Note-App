/* eslint-disable node/handle-callback-err */
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
chai.use(chaiHttp);
chai.should();
const labelData = require("./label.token.json");

describe("Add Label", () => {
  it("when call label api, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/label/61d17503de0a748e8ba98b09")
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

  it("when call label api, should return appropriate response from controller", (done) => {
    const token = labelData.notes.inValidToken;
    chai
      .request(server)
      .post("/label/61d17503de0a748e8ba98b09")
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

  it("when call label api with valid input, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/label/61d17503de0a748e8ba98b09")
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

  it("when call label api with false params, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/label/61ca792c3e0c670ef4")
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

  it("when call label api with false label, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/label/61d17503de0a748e8ba98b09")
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

  it("when call label api, should return appropriate response from Service", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/label/61d17503de0a748e8ba98b09")
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

  it("when call label api, should return appropriate response from Model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .post("/label/61d17503de0a748e8ba98b09")
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
      .post("/label/61d17503de0a748e8ba98b09")
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
      .post("/label/62cecf7eea3e31a5d1e23134")
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

// api for findLabels

describe("findLabels", () => {
  it("when call findLabels with inValid token , should return appropriate response from controller", (done) => {
    const token = labelData.notes.inValidToken;
    chai
      .request(server)
      .get("/label")
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

  it("when call findLabels with valid token , should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/label")
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
      .get("/label")
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

  it("when call findLabels with valid token , should return appropriate response from service", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/label")
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

  it("when call findLabels with valid token , should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/label")
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
      .get("/label")
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
      .get("/label")
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
      .get("/label")
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

// api for findLabels by Id

describe("Get Label By ID", () => {
  it("when call getLabelById with valid token , should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/label/61d179c1d67af48269572ada")
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
      .get("/label/61d179c1d67af48269572ada")
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
      .get("/label/61d179c1d67af48269572ada")
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
      .get("/label/61cc4e23cdf0")
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
      .get("/label/61d179c1d67af48269572ada")
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
      .get("/label/61d179c1d67af48269572ada")
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
      .get("/label/61d179c1d67af48269572ada")
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
      .get("/label/61cc4ae7c22dd212e23cdf0")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(500);
        return done();
      });
  });

  it("check Data from DB not from Redis with true input,Should response 201", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .get("/label/61d179c1d67af48269572ada")
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

// api for updateLabelById

describe("Update Label", () => {
  it("when call update label api, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .put("/label/61d179c1d67af48269572ada")
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
      .put("/label/61d179c1d67af48269572ada")
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
      .put("/label/61d179c1d67af48269572ada")
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
      .put("/label/61d179c1d67af48269572ada")
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
      .put("/label/61cc239e23cdf0")
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

  it("when call upgradeLabel api, should return appropriate response from service", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .put("/label/61d179c1d67af48269572ada")
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

  it("when call upgradeLabel api, should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .put("/label/61d179c1d67af48269572ada")
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
      .put("/label/61d179c1d67af48269572ada")
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
      .put("/label/61cc4aec224dd21239e23cdf0")
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

// api for removeLabel

describe("Delete Label", () => {
  it("when call delete label api, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .delete("/label/61d194c6da5e366b59de42b1")
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

  it("when call delete label api with false token, should return appropriate response from controller", (done) => {
    const token = labelData.notes.inValidToken;
    chai
      .request(server)
      .delete("/label/61cc4aec224dd21239e23cdf0")
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

  it("check validation with true params, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .delete("/label/61d194c6da5e366b59de42b1")
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

  it("check validation with false params, should return appropriate response from controller", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .delete("/label/61c239e23cdf0")
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

  it("when call delete label api, should return appropriate response from service", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .delete("/label/61d194c6da5e366b59de42b1")
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

  it("when call delete label api, should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .delete("/label/61d194c6da5e366b59de42b1")
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

  it("check with true id, should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .delete("/label/61d194c6da5e366b59de42b1")
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

  it("check with false id, should return appropriate response from model", (done) => {
    const token = labelData.notes.validToken;
    chai
      .request(server)
      .delete("/label/61cc4eec4ld403e9aba0882")
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
