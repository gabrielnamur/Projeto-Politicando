var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

router.post("/resultadoquestionario", function (req, res) {
    questionarioController.entrar(req, res);
});

router.post("/cadastrar", function (req, res) {
    questionarioController.enviarResultado(req, res);
});

module.exports = router;

