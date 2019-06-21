import express from "express";

const mysql = require("mysql");
const connexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "node-boiler-plate"
});
connexion.connect();

// Create express router
const router = express.Router();

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

/*
 * Login
 */
router.post("/login", (req, res) => {
  /* 
  connexion.query(`SELECT * FROM users WHERE username='${req.body.username}'  and password='${req.body.password}'`, (error, results, fields) => {
    if (error) {
      res.json({ msg: "Error get all", err: error });
    } else {
      const { test } = res.json({ msg: "User connection", user: results });


      console.log(req.body.password)
    }
  });
 */
  if (req.body.username === "admin" && req.body.password === "admin") {
    req.session.authUser = { username: req.body.username };
    return res.json({ username: req.body.username });
  }
  res.status(401).json({ message: "Bad credentials" });
});
//

/*
 * Logout
 */
router.post("/logout", (req, res) => {
  delete req.session.authUser;
  res.json({ ok: true });
});
//

/*
 * Select all articles
 */
router.post("/articles", (req, res) => {
  connexion.query("SELECT * FROM post", (error, results, fields) => {
    if (error) {
      res.json({ msg: "Error get all", err: error });
    } else {
      res.json({ msg: "Get ALL", data: results });
    }
  });
});
//

/*
 * Select one article
 */
router.post("/article", (req, res) => {
  connexion.query(
    `SELECT * FROM post WHERE _id='${req.body._id}'`,
    (error, results, fields) => {
      if (error) {
        res.json({ msg: "Error get all", err: error });
      } else {
        res.json({ msg: "Article selected", data: results });
      }
    }
  );
});
//

/*
 * Edit article
 */
router.post("/editArticle", (req, res) => {
  connexion.query(    
    `UPDATE post SET  explicationNom = '${req.body.explicationNom.replace(/'/g, `''`)}', events = '${req.body.events.replace(/'/g, `''`)}',  pictures = '${req.body.pictures.replace(/'/g, `''`)}' , station = '${req.body.station.replace(/'/g, `''`)}', status = '${req.body.status.replace(/'/g, `''`)}', linesStation = '${req.body.linesStation.replace(/'/g, `''`)}', linkBienvenue = '${req.body.linkBienvenue.replace(/'/g, `''`)}', audios = '${req.body.audios.replace(/'/g, `''`)}', nextStep = '${req.body.nextStep.replace(/'/g, `''`)}' WHERE post._id = ${req.body._id};`,
    (error, results, fields) => {
      if (error) {
        res.json({ msg: "Error", err: error });
      } else {
        res.json({ msg: "Article was edit", data: results });
      }
    }
  );
});
//

/*
 * Remove article
 */
router.post("/removeArticle", (req, res) => {
  connexion.query(
    `DELETE FROM post WHERE post._id = ${req.body._id}`,
    (error, results, fields) => {
      if (error) {
        res.json({ msg: "Error", err: error });
      } else {
        res.json({ msg: "Article was remove", data: results });
      }
    }
  );
});
//

/*
 * Create article
 */
router.post("/createArticle", (req, res) => {

  /* `INSERT INTO post (_id, title, content) VALUES (NULL, '${
    req.body.title
  }', '${req.body.content}');`, */
  
  connexion.query(
    `INSERT INTO post (_id, station, status, linesStation, linkBienvenue, explicationNom, events, pictures, audios, nextStep) VALUES (NULL, 'qqqq', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q');`,
    (error, results, fields) => {
      if (error) {
        res.json({ msg: "Error", err: error });
      } else {
        res.json({ msg: "Article was create !" });
      }
    }
  );
});
//

// Export the server middleware
export default {
  path: "/api",
  handler: router
};
