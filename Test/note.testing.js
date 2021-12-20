const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
chai.use(chaiHttp);
chai.should();

const registrationData = require("./note.userDetails.json");

// Test cases for Registration
describe("registration", () => {
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
