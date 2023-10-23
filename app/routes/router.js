const express = require('express')
const router = express.Router()


const jwt = require("jsonwebtoken");

const homeControllerRead = require("../controllers/homeController/homeController");
//Conxão das Pags restantes Abaixo


//router.get("/login", loginControllerRead.getPage);
//router.post("/login",
//validacaoFormulariosMiddleware.validacaoLogin,
//loginControllerAuth.autorizarUsuario);
//
//router.get("/cadastro", cadastroControllerRead.getPage);
//router.post("/cadastro",
//validacaoRegrasMiddleware.cadastroValidationRules,
//validacaoFormulariosMiddleware.validacaoCadastro,
//autenticacaoMiddleware.encriptarSenha,
//cadastroControllerCreate.createUsuario);
//
//
//
//router.get("/personais", personaisControllerRead.viewPage);

router.get("/", homeControllerRead.viewPage);


module.exports = router