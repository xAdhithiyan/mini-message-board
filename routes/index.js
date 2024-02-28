const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    name: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    name: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini MessageBoard", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("forms");
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    name: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
