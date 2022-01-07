const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
chai.use(chaiHttp);
chai.should();
const noteData = require("./note.Token.json");
const faker = require("faker");

describe("Create Note", () => {
  it("when call create note api, should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    const createNotes = {
      title: "Google",
      description: "A JavaScript Promise object contains both"
    };
    chai
      .request(server)
      .post("/note")
      .set({ authorization: token })
      .send(createNotes)
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
    const createNotes = {
      title: faker.name.title(),
      description: "A JavaScript Promise object contains both"
    };
    chai
      .request(server)
      .post("/note")
      .set({ authorization: token })
      .send(createNotes)
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
    const createNotes = {
      title: "Yahooo",
      description: "A JavaScript Promise object contains both"
    };
    chai
      .request(server)
      .post("/note")
      .set({ authorization: token })
      .send(createNotes)
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
      .post("/note")
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
      .post("/note")
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
    const createNotes = {
      title: "Computer",
      description: "A JavaScript Promise object contains both"
    };
    chai
      .request(server)
      .post("/note")
      .set({ authorization: token })
      .send(createNotes)
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
    const createNotes = {
      title: "Kitesdgf",
      description: "A JavaScript Promise object contains both"
    };
    chai
      .request(server)
      .post("/note")
      .set({ authorization: token })
      .send(createNotes)
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
    const createNotes = {
      title: "Gmail id is",
      description: "A JavaScript Promise object contains both"
    };
    chai
      .request(server)
      .post("/note")
      .set({ authorization: token })
      .send(createNotes)
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
      .post("/note")
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
  it("when call findNotes api without token, should return appropriate response from controller", (done) => {
    chai
      .request(server)
      .get("/note")
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(500);
        return done();
      });
  });

  it("when call findNotes api with token, should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/note")
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

  it("when call findNotes api with token, should return appropriate response from controller", (done) => {
    const token = noteData.notes.inValidToken;
    chai
      .request(server)
      .get("/note")
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

  it("when call findNotes api with token is Authentic Request, should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/note")
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

  it("when call findNotes api , should return appropriate response from service", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/note")
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

  it("when call findNotes api , should return appropriate response from model", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/note")
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

  it("when call findNotes api then get all note , should return appropriate response", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/note")
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

  it("when call findNotes api then didnot get all note with invalid token , should return appropriate response", (done) => {
    const token = noteData.notes.inValidToken;
    chai
      .request(server)
      .get("/note")
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
      .get("/note/61d696606632cae8f42d9b49")
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
      .get("/note/61d696606632cae8f42d9b49")
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
      .get("/note/61d696606632cae8f42d9b49")
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
      .get("/note/61d696606632cae8f42d9b49")
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
      .get("/note/61d696606632cae8f42d9b49")
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
      .get("/note/61d696606632cae8f42d9b49")
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
      .get("/note/61d696606632cae8f42d9b49")
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

  it("check data fetch from Redis with false param, should return code = 500", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/note/61d696606632cae8f42d9b489")
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

  it("check data from DB not from Redis, should return code = 500", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .get("/note/61d696606632cae8f42d9b49")
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
    const createNotes = {
      title: "math",
      description: "hgsfgadgsdsdskdnsdnsd"
    };
    chai
      .request(server)
      .put("/note/61d17503de0a748e8ba98b09")
      .set({ authorization: token })
      .send(createNotes)
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
    const createNotes = {
      title: noteData.notes.title,
      description: faker.lorem.word()
    };
    chai
      .request(server)
      .put("/note/61d17503de0a748e8ba98b09")
      .set({ authorization: token })
      .send(createNotes)
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("when call updateNoteById with inValidToken , should return appropriate response from controller", (done) => {
    const token = noteData.notes.inValidToken;
    chai
      .request(server)
      .put("/note/61d17503de0a748e8ba98b09")
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

  it("when call updateNoteById with valid input , should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    const createNotes = {
      title: "family",
      description: "gksjf gjsjsfb shfjsha"
    };
    chai
      .request(server)
      .put("/note/61d17503de0a748e8ba98b09")
      .set({ authorization: token })
      .send(createNotes)
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when call updateNoteById with false title , should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .put("/note/61d17503de0a748e8ba98b09")
      .set({ authorization: token })
      .send({ title: "S", description: "golden period of life" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("when call updateNoteById with false description , should return appropriate response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .put("/note/61d17503de0a748e8ba98b09")
      .set({ authorization: token })
      .send({ title: "School", description: "g" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });

  it("when call updateNoteById with valid input , should return appropriate response from service", (done) => {
    const token = noteData.notes.validToken;
    const createNotes = {
      title: "Yahoo",
      description: "esdgsgsgsrgsgsfgs"
    };
    chai
      .request(server)
      .put("/note/61d17503de0a748e8ba98b09")
      .set({ authorization: token })
      .send(createNotes)
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("when call updateNoteById , should return appropriate response from model", (done) => {
    const token = noteData.notes.validToken;
    const createNotes = {
      title: "Sceince",
      description: "fgsrgeffBJBKWBDKJBWDkvsdvsdvv dh"
    };
    chai
      .request(server)
      .put("/note/61d17503de0a748e8ba98b09")
      .set({ authorization: token })
      .send(createNotes)
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("given id is matched then update, should return proper response", (done) => {
    const token = noteData.notes.validToken;
    const createNotes = {
      title: "noteData.notes.title,",
      description: "faker.lorem.word()"
    };
    chai
      .request(server)
      .put("/note/61d17503de0a748e8ba98b09")
      .set({ authorization: token })
      .send(createNotes)
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

  it("given id is not matched then don't update, should return proper response", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .put("/note/61cbe18720f85e5ea0e771bchjg")
      .set({ authorization: token })
      .send({ title: "School", description: "golden period of life" })
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

// api of Delete Note by Id

describe("removeNoteById", () => {
  it("when call removeNote Api with valid token, should return proper response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .delete("/note/61cbe18720f85e5ea0e771bc")
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

  it("when call removeNote Api with inValid token, should return proper response from controller", (done) => {
    const token = noteData.notes.inValidToken;
    chai
      .request(server)
      .delete("/note/61cbe18720f85e5ea0e771bc")
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

  it("when it is validate with the given id, should return proper response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .delete("/note/61cbe18720f85e5ea0e771ba")
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

  it("when it is validate with the given false id, should return proper response from controller", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .delete("/note/61c8913bdcf696aca")
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

  it("when call removeNote api, should return proper response from service", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .delete("/note/61c8913bdcf696ac219ce3ea")
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

  it("when call removeNote api, should return proper response from model", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .delete("/note/61cbe18720f85e5ea0e771b6")
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

  it("given id present in DB then delete, should return proper response from model", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .delete("/note/61c8913bdcf696ac219ce3ea")
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

  it("given id not present in DB, should return proper response from model", (done) => {
    const token = noteData.notes.validToken;
    chai
      .request(server)
      .delete("/note/61c8913bdcf696ac219c")
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
