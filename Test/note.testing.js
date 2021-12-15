const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');
chai.use(chaiHttp);
chai.should();

const registrationData = require('./note.userDetails.json');

// Test cases for Registration
describe('registration', () => {

    it('given registration details is empty then not save in DB', (done) => {

        const userDetails = registrationData.userInformation.isEmpty;

        chai.request(server).post('/register').send(userDetails).end((err, res) => {
            if (err) {
                console.log("Plz check again & enter with proper format");
                return done();
            }
            res.should.have.status(500);
            console.log("Success...!! Test Case Passes for empty details....");
            done();
        })
    })

    it('given registration details if proper then save in DB', (done) => {

        const userDetails = registrationData.userInformation.fullInformation;

        chai.request(server).post('/register').send(userDetails).end((err, res) => {
            if (err) {
                console.log("Plz check again & enter with proper format");
                return done();
            }
            res.should.have.status(200);
            console.log("Success...!! Test Case Passes for Proper details....");
            done();
        })
    })

    it('given registration details without First Name then not save in DB', (done) => {

        const userDetails = registrationData.userInformation.withoutFirstName;

        chai.request(server).post('/register').send(userDetails).end((err, res) => {
            if (err) {
                console.log("Plz check again & enter with proper format");
                return done();
            }
            res.should.have.status(400);
            console.log("Success...!! Test Case Passes for ImProper details....");
            done();
        })
    })

    it('given registration details without Last Name then not save in DB', (done) => {

        const userDetails = registrationData.userInformation.withoutLastName;

        chai.request(server).post('/register').send(userDetails).end((err, res) => {
            if (err) {
                console.log("Plz check again & enter with proper format");
                return done();
            }
            res.should.have.status(400);
            console.log("Success...!! Test Case Passes for ImProper details....");
            done();
        })
    })

    it('given registration details without email then not save in DB', (done) => {

        const userDetails = registrationData.userInformation.withoutEmail;

        chai.request(server).post('/register').send(userDetails).end((err, res) => {
            if (err) {
                console.log("Plz check again & enter with proper format");
                return done();
            }
            res.should.have.status(400);
            console.log("Success...!! Test Case Passes for ImProper details....");
            done();
        })
    })
})


// Test cases for login

describe('Login', () => {
    it('given Login details if true then sign in ', (done) => {

        const userDetails = registrationData.userInformation.correctLogin;

        chai.request(server).post('/login').send(userDetails).end((err, res) => {
            if (err) {
                console.log("Plz check again & enter with proper format");
                return done();
            }
            res.should.have.status(200);
            console.log("Success...!! Test Case Passes for Login details....");
            done();
        })
    })

    it('given Login details if false then not sign in ', (done) => {

        const userDetails = registrationData.userInformation.wrongLogin;

        chai.request(server).post('/login').send(userDetails).end((err, res) => {
            if (err) {
                console.log("Plz check again & enter with proper format");
                return done();
            }
            res.should.have.status(400);
            console.log("Success...!! Test Case Passes for false Login details....");
            done();
        })
    })
})