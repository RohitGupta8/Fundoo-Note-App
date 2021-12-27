const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
chai.use(chaiHttp);
chai.should();
const noteData = require("./note.Token.json");

describe("Create Note", () => {
  it("when call create note api, should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .post("/createNote")
      .set({ authorization: token })
      .send(token)
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when call create note api, should return appropriate response from controller with invalid token", (done) => {
    const token = noteData.notes.inValidToken;
    chai
      .request(server)
      .post("/createNote")
      .set({ authorization: token })
      .send(token)
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("give valid input, should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .post("/createNote")
      .set({ authorization: token })
      .send({ title: "google", description: "google is good search engine" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("give invalid title , should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .post("/createNote")
      .set({ authorization: token })
      .send({ title: "go", description: "google is good search engine" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("give invalid description, should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .post("/createNote")
      .set({ authorization: token })
      .send({ title: "google", description: "googl" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("when call createNoteAPI, should return appropriate response from service", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .post("/createNote")
      .set({ authorization: token })
      .send({ title: "google", description: "google is good search engine" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when call createNoteAPI, should return appropriate response from model", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .post("/createNote")
      .set({ authorization: token })
      .send({ title: "google", description: "google is good search engine" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when call createNoteAPI with validToken, should return appropriate response from model", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .post("/createNote")
      .set({ authorization: token })
      .send({ title: "google", description: "google is good search engine" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when call createNoteAPI with inValid token, should return appropriate response from model", (done) => {
    const token = noteData.notes.inValidToken;
    chai
      .request(server)
      .post("/createNote")
      .set({ authorization: token })
      .send({ title: "google", description: "google is good search engine" })
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

// api for get all notes

describe("Get all Notes", () => {
  it("when call getNote api without token, should return appropriate response from controller", (done) => {
    chai
      .request(server)
      .get("/getNote")
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(500);
        return done();
      });
  });

  it("when call getNote api with token, should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/getNote")
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

  it("when call getNote api with token, should return appropriate response from controller", (done) => {
    const token = noteData.notes.inValidToken;
    chai
      .request(server)
      .get("/getNote")
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

  it("when call getNote api with token is Authentic Request, should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/getNote")
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

  it("when call getNote api , should return appropriate response from service", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/getNote")
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

  it("when call getNote api , should return appropriate response from model", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/getNote")
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

  it("when call getNote api then get all note , should return appropriate response", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/getNote")
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

  it("when call getNote api then didnot get all note with invalid token , should return appropriate response", (done) => {
    const token = noteData.notes.inValidToken;
    chai
      .request(server)
      .get("/getNote")
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

// api for getNoteById

describe("GetNoteById", () => {
  it("when call getNoteById with InvalidToken , should return appropriate response", (done) => {
    chai
      .request(server)
      .get("/getNote/:id")
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(500);
        return done();
      });
  });

  it("when call getNoteById with validToken , should return appropriate response", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/getNote/:id")
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

  it("given token is verified then given id should be validated", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/getNote/61c8407f4e180a62acac73b3")
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

  it("given token is not verified then given id should not be validated", (done) => {
    const token = noteData.notes.inValidToken;
    chai
      .request(server)
      .get("/getNote/61c8407f4e180a62acac73b3")
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

  it("when call getNoteById with validToken , should return appropriate response from service", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/getNote/61c8407f4e180a62acac73b3")
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

  it("when call getNoteById with validToken , should return appropriate response from model", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/getNote/61c8407f4e180a62acac73b3")
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

  it("when call getNoteById with validToken using find method , should return appropriate response from model", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/getNote/61c8407f4e180a62acac73b3")
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

// api for update note by id

describe("Update Note By Id", () => {
  it("when call updateNoteById with validToken , should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .put("/updateNote/:id")
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

  it("when call updateNoteById with inValidToken , should return appropriate response from controller", (done) => {
    const token = noteData.notes.inValidToken;
    chai
      .request(server)
      .put("/updateNote/:id")
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

  it.only("when call updateNoteById with inValidToken , should return appropriate response from controller", (done) => {
    const token = noteData.notes.inValidToken;
    chai
      .request(server)
      .put("/updateNote/:id")
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
