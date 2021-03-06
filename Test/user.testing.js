/* eslint-disable node/handle-callback-err */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
chai.use(chaiHttp);
chai.should();
const faker = require("faker");
const registrationData = require("./user.Details.json");

// Test cases for Registration
// eslint-disable-next-line no-undef
describe("registration", () => {
  // eslint-disable-next-line no-undef
  it("Should return status code - 400,When given registration details is empty.", (done) => {
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
    const registerfaker = {
      firstName: faker.name.findName(8),
      lastName: faker.name.lastName(8),
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    chai.request(server).post("/register").send(registerfaker).end((err, res) => {
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
  it(" when call Forgot password api,should return response status success", (done) => {
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

  it(" when call Forgot password api, should validate the input & return appropriate response", (done) => {
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

  it(" when call Forgot password api, Should return appropriate response from ForgotPassword service", (done) => {
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

  it("when call Forgot password api, Should return appropriate response from ForgotPassword model", (done) => {
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
  
  it(" given email is present in DB then send mail, should return appropriate response", (done) => {
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

  it(" given email not exist in DB then send no mail, should return appropriate response", (done) => {
    chai
      .request(server)
      .post("/forgotPassword")
      .send({ email: "rohithg213@gmail.com" })
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

// Test cases for RESET Password API

describe("Reset Password API", () => {  
  it("when call reset password api, should return appropriate response", (done) => {
    chai
      .request(server)
      .patch("/resetPassword")
      .send({ email: "rohitg213@gmail.com", password: "clickN70+5", code: "8mi58tkpmi" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(200);
        return done();
      });
  });

  it("should validate the input , return appropriate response", (done) => {
    chai
      .request(server)
      .patch("/resetPassword")
      .send({ email: "rohitg213@gmail.com", password: "clickN70+7", code: "8mi58tkpmi" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(200);
        return done();
      });
  });

  it("should validate the wrong input of password, return appropriate response", (done) => {
    chai
      .request(server)
      .patch("/resetPassword")
      .send({ email: "rohitg213@gmail.com", password: "Jh", code: "5illecgn" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("should validate the wrong input of email, return appropriate response", (done) => {
    chai
      .request(server)
      .patch("/resetPassword")
      .send({ email: "rohitg213gmail.com", password: "clickN70@hj", code: "8mi58tkpmi" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("when call reset password api, should return appropriate response from reset service", (done) => {
    chai
      .request(server)
      .patch("/resetPassword")
      .send({ email: "rohitg213@gmail.com", password: "clickN70+7", code: "8mi58tkpmi" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(200);
        return done();
      });
  });

  it("when call reset password api, should return appropriate response from resetPassword model", (done) => {
    chai
      .request(server)
      .patch("/resetPassword")
      .send({ email: "rohitg213@gmail.com", password: "clickN70+7", code: "8mi58tkpmi" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(200);
        return done();
      });
  });

  it("when call reset password api then update with new password, should return appropriate response", (done) => {
    chai
      .request(server)
      .patch("/resetPassword")
      .send({ email: "rohitg213@gmail.com", password: "clickN70+7", code: "8mi58tkpmi" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(200);
        return done();
      });
  });

  it("when update with new password from wrong OTP, should return appropriate response", (done) => {
    chai
      .request(server)
      .patch("/resetPassword")
      .send({ email: "rohitg213@gmail.com", password: "clickN70+", code: "5il2wgn" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(401);
        return done();
      });
  });
});

// api for Verification of user

describe("Verify User", () => {
  it("given details when proper,should return appropriate response from controller", (done) => {
    chai
      .request(server)
      .get("/verifyUser/:token")
      .send({ token: "req.params.token" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(404);
        return done();
      });
  });

  it("given details when improper,should return appropriate response from controller", (done) => {
    chai
      .request(server)
      .get("/verifyUser/")
      .send({ token: "req.params.token" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(404);
        return done();
      });
  });

  it("given details when proper,should return appropriate response from service", (done) => {
    chai
      .request(server)
      .get("/verifyUser/:token")
      .send({ token: "req.params.token" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(404);
        return done();
      });
  });

  it("given details when proper,should return appropriate response from model", (done) => {
    const data = ({ email: "mkaubr007@gmail.com" });
    chai
      .request(server)
      .get("/verifyUser/:token")
      .send({ token: "req.params.token", data })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(404);
        return done();
      });
  });

  it("given proper details in signUp then send verify mail ,should return proper response ", (done) => {
    const registerfaker = {
      firstName: faker.name.findName(8),
      lastName: faker.name.lastName(8),
      email: faker.internet.email(),
      password: faker.internet.password()
    };
    chai
      .request(server)
      .post("/register")
      .send(registerfaker)
      .end((err, res) => {
        if (err) {
          console.log("Plz check again & enter with proper format");
          return done();
        }
        res.should.have.status(200);
        done();
      });
  });

  it("check Login after signup without verify mail,should return proper response", (done) => {
    const userDetails = registrationData.userInformation.wrongLogin;

    chai.request(server)
      .post("/login")
      .send(userDetails)
      .end((err, res) => {
        if (err) {
          return done();
        }
        res.should.have.status(400);
        done();
      });
  });

  it("check login after verify mail, should return 200 ", (done) => {
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
});
