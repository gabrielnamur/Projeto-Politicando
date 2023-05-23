var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

router.post("/resultadoquestionario", function (req, res) {
    questionarioController.entrar(req, res);
});

module.exports = router;