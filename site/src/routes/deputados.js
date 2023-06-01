var express = require("express");
var router = express.Router();

var deputadosController = require("../controllers/deputadosController");

router.post("/deputados_avaliados_positivamente", function (req, res) {
    deputadosController.deputados_positivamente(req, res);
});

router.post("/deputados_avaliados_negativamente", function (req, res) {
    deputadosController.deputados_negativamente(req, res);
});

router.get("/pegarDeslikes", function(req, res){
    deputadosController.pegarDeslikes(req, res)
})

router.get("/pegarlikes", function(req, res){
    deputadosController.pegarlikes(req, res)
})

module.exports = router;

