require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../models/userDb.js");
const secrets = require("../configs/secrets.js");

// for endpoints beginning with /api/auth
router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password); // 2 ^ n
  user.password = hash;

  Users.insert(user) //uses add from users-model
    .then(saved => {
      res.status(201).json({
        message: "You have Successfully registered",
        saved
      });
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});

router.post("/login", (req, res) => {
  let { email, password } = req.body;
  Users.findBy(email)
    .then(users => {
      if (users[0]) {
        // && bcrypt.compareSync(password, users[0].password)) {
        // Users;
        // const token = genToken(users[0]);
        // const id = users.id;
        // const type = users.stylist;
        // res.status(200).json({
        //   message: `Welcome!`,
        //   token,
        //   id,
        //   type
        // });
        // hi
        res.status(200).json({user: users[0], passHash: bcrypt.hashSync(password), userHash: users[0].password, isSame: bcrypt.compareSync(password, users[0].password)});
      } else {
        res
          .status(401)
          .json({
            message: "Invalid Credentials",
            users: users,
            user: users[0]
          });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

function genToken(user) {
  const payload = {
    subject: user.id,
    email: user.email,
    stylist: user.stylist
  };
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
module.exports = router;
