var express = require("express");
var router = express.Router();

var avaliardeputadosController = require("../controllers/avaliardeputadosController");

router.post("/deputados_avaliados_positivamente", function (req, res) {
    avaliardeputadosController.deputados_positivamente(req, res);
});

router.post("/deputados_avaliados_negativamente", function (req, res) {
    avaliardeputadosController.deputados_negativamente(req, res);
});

module.exports = router;

