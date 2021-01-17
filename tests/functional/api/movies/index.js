import chai from "chai";
import request from "supertest";
import dotenv from 'dotenv';

const expect = chai.expect;
dotenv.comfig()

let api;
let token = "eyJhbGciOiJIUzI1NiJ9.dXNlcjE.FmYria8wq0aFDHnzYWhKQrhF5BkJbFNN1PqNyNQ7V4M"

const sampleMovie = {
  id: 337401,
  title: "Mulan",
};

describe("Movies endpoint", () => {
  beforeEach(async () => {
    try {
      api = require("../../../../index");
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  });
  afterEach(() => {
    api.close(); // Release PORT 8080
    delete require.cache[require.resolve("../../../../index")];
  });
  describe("GET /movies ", () => {
    it("should return 20 movies and a status 200", (done) => {
      request(api)
        .get("/api/movies")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.equal(20);
          done();
        });
    });
  });

  describe("GET /movies/:id", () => {
    describe("when the id is valid", () => {
      it("should return the matching movie", () => {
        return request(api)
          .get(`/api/movies/${sampleMovie.id}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(res.body).to.have.property("title", sampleMovie.title);
          });
      });
    });
    describe("when the id is invalid", () => {
      it("should return the NOT found message", () => {
        return request(api)
          .get("/api/movies/xxx")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect({
            success: false,
            status_code: 34,
            status_message: "The resource you requested could not be found.",
          });
      });
    });
  });

  describe('GET /movies/page/:page', () => {
    describe('When page is not valid', () => {
      it('should return the 500 error', () => {
        return request(api)
          .get('/api/movies/page/xx')
          .set("Accept", "application/json")
          .set("Authorization", "Bearer " + token)
          .expect(500);
      })
    })

    describe('When page is valid', () => {
      it('should return the movies', () => {
        return request(api)
          .get('/api/movies/page/2')
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
          .then(res => {
            expect(res.body.length).to.eq(20);
          })
      })
    })
  })

  describe('GET /movies/upcoming/:page', () => {
    describe('When page is not valid', () => {
      it('should return the 500 error', () => {
        return request(api)
          .get('/api/movies/upcoming/xx')
          .set("Accept", "application/json")
          .set("Authorization", "Bearer " + token)
          .expect(500);
      })
    })

    describe('When page is valid', () => {
      it('should return the movies', () => {
        return request(api)
          .get('/api/movies/upcoming/2')
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
      })
    })
  })

  describe('GET /movies/nowplaying/:page', () => {
    describe('When page is not valid', () => {
      it('should return the 500 error', () => {
        return request(api)
          .get('/api/movies/nowplaying/xx')
          .set("Accept", "application/json")
          .set("Authorization", "Bearer " + token)
          .expect(500);
      })
    })

    describe('When page is valid', () => {
      it('should return the movies', () => {
        return request(api)
          .get('/api/movies/nowplaying/2')
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
      })
    })
  })

  describe('GET /movies/popular/:page', () => {
    describe('When page is not valid', () => {
      it('should return the 500 error', () => {
        return request(api)
          .get('/api/movies/popular/xx')
          .set("Accept", "application/json")
          .set("Authorization", "Bearer " + token)
          .expect(500);
      })
    })

    describe('When page is valid', () => {
      it('should return the movies', () => {
        return request(api)
          .get('/api/movies/popular/2')
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
      })
    })
  })

  describe('GET /movies/toprated/:page', () => {
    describe('When page is not valid', () => {
      it('should return the 500 error', () => {
        return request(api)
          .get('/api/movies/toprated/xx')
          .set("Accept", "application/json")
          .set("Authorization", "Bearer " + token)
          .expect(500);
      })
    })

    describe('When page is valid', () => {
      it('should return the movies', () => {
        return request(api)
          .get('/api/movies/toprated/2')
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
      })
    })
  })

  describe('GET /movies/trending/:page', () => {
    describe('When page is not valid', () => {
      it('should return the 500 error', () => {
        return request(api)
          .get('/api/movies/trending/xx')
          .set("Accept", "application/json")
          .set("Authorization", "Bearer " + token)
          .expect(500);
      })
    })

    describe('When page is valid', () => {
      it('should return the movies', () => {
        return request(api)
          .get('/api/movies/trending/2')
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .expect(200)
      })
    })
  })
});
