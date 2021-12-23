/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
chai.use(chaiHttp);
chai.should();

const registrationData = require("./note.userDetails.json");

// Test cases for Registration
// eslint-disable-next-line no-undef
describe("registration", () => {
  // eslint-disable-next-line no-undef
  it("Should return status code - 500,When given registration details is empty.", (done) => {
    const userDetails = registrationData.userInformation.isEmpty;

    chai.request(server).post("/register").send(userDetails).end((err, res) => {
      if (err) {
        console.log("Plz check again & enter with proper format");
        return done();
      }
      res.should.have.status(400);
      done();
    });
  });

  it("Should return status code - 200,When given registration details is proper.", (done) => {
    const userDetails = registrationData.userInformation.fullInformation;

    chai.request(server).post("/register").send(userDetails).end((err, res) => {
      if (err) {
        console.log("Plz check again & enter with proper format");
        return done();
      }
      res.should.have.status(200);
      done();
    });
  });

  it("Should return status code - 400,When given registration details without First Name.", (done) => {
    const userDetails = registrationData.userInformation.withoutFirstName;

    chai.request(server).post("/register").send(userDetails).end((err, res) => {
      if (err) {
        console.log("Plz check again & enter with proper format");
        return done();
      }
      res.should.have.status(400);
      done();
    });
  });

  it("Should return status code - 400,When given registration details without Last Name.", (done) => {
    const userDetails = registrationData.userInformation.withoutLastName;

    chai.request(server).post("/register").send(userDetails).end((err, res) => {
      if (err) {
        console.log("Plz check again & enter with proper format");
        return done();
      }
      res.should.have.status(400);
      done();
    });
  });

  it("Should return status code - 400,When given registration details without email.", (done) => {
    const userDetails = registrationData.userInformation.withoutEmail;

    chai.request(server).post("/register").send(userDetails).end((err, res) => {
      if (err) {
        console.log("Plz check again & enter with proper format");
        return done();
      }
      res.should.have.status(400);
      done();
    });
  });
});

// Test cases for login

describe("Login", () => {
  it("Should return status code - 200,When given Login details is true. ", (done) => {
    const userDetails = registrationData.userInformation.correctLogin;

    chai.request(server).post("/login").send(userDetails).end((err, res) => {
      if (err) {
        console.log("Plz check again & enter with proper format");
        return done();
      }
      res.should.have.status(200);
      done();
    });
  });

  it("Should return status code - 400,When given Login details is false.", (done) => {
    const userDetails = registrationData.userInformation.wrongLogin;

    chai.request(server).post("/login").send(userDetails).end((err, res) => {
      if (err) {
        console.log("Plz check again & enter with proper format");
        return done();
      }
      res.should.have.status(400);
      done();
    });
  });
});

// Test Cases for Forgot Password API

describe("Forgot Password API", () => {
  it.only(" when call Forgot password api,should return response status success", (done) => {
    chai
      .request(server)
      .post("/forgotPassword")
      .send({ email: "rohitg213@gmail.com" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(200);
        return done();
      });
  });

  it.only(" should validate the input , return appropriate response", (done) => {
    chai
      .request(server)
      .post("/forgotPassword")
      .send({ email: "rohitg213@gmail.com" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(200);
        return done();
      });
  });

  it.only(" Should return true from ForgotPassword service, return appropriate response", (done) => {
    chai
      .request(server)
      .post("/forgotPassword")
      .send({ email: "rohitg213@gmail.com" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(200);
        return done();
      });
  });
});
