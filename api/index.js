import express from "express";


/* const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:8886/node-boiler-plate', {useNewUrlParser: true}); */

/* 
port: 3306,
 */


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

// Add POST - /api/login
router.post("/login", (req, res) => {
  if (req.body.username === "demo" && req.body.password === "demo") {
    req.session.authUser = { username: "demo" };
    return res.json({ username: "demo" });
  }
  res.status(401).json({ message: "Bad credentials" });
});

// Add POST - /api/logout
router.post("/logout", (req, res) => {
  delete req.session.authUser;
  res.json({ ok: true });
});

router.post("/article", (req, res) => {
  connexion.query("SELECT * FROM post", (error, results, fields) => {
    if (error) {
      res.json({ msg: "Error get all", err: error });
    } else {
      res.json({ msg: "Get ALL", data: results });
    }
  });
});


// Export the server middleware
export default {
  path: "/api",
  handler: router
};

