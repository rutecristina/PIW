var alunoService = require('../services/aluno.service.mongo');
var express = require('express');
var router = express.Router();

router.get('/listar', function (req, res, next) {
    alunoService.list(req, res);
});

router.post('/registrar', function (req, res, next) {
    alunoService.register(req, res);
});

router.put('/editar/:id', function (req, res, next) {
    alunoService.update(req, res);
});

router.delete('/apagar/:id', function (req, res, next) {
    alunoService.delete(req, res);
});

router.get('/recuperar/:id', function (req, res, next) {
    alunoService.retrieve(req, res);
});

module.exports = router;