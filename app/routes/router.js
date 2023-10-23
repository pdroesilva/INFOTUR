const express = require('express')
const router = express.Router()


const jwt = require("jsonwebtoken");

const homeControllerRead = require("../controllers/homeController/homeControllerRead");
const indexControllerRead = require("../controllers/enderecoController/indexControllerRead");
const TermosControllerRead = require("../controllers/termos_de_usoController/termosControllerRead");
const ofertasControllerRead = require("../controllers/ofertasController/ofertasControllerRead");
const ofertasmaisControllerRead = require("../controllers/ofertasmaisController/ofertasmaisControllerRead");

const cadastroControllerRead = require("../controllers/cadastroController/cadastroControllerRead");
const cadastroControllerCreate = require("../controllers/cadastroController/cadastroControllerCreate");



const autenticacaoMiddleware = require("../middlewares/autenticacaoMiddleware");
const regrasValidacaoMiddleware = require("../middlewares/regrasValidacaoMiddleware");
const validacaoFormularioMiddleware = require("../middlewares/validacaoFormularioMiddleware");



//Conxão das Pags restantes Abaixo


//router.get("/login", loginControllerRead.getPage);
//router.post("/login",
//validacaoFormulariosMiddleware.validacaoLogin,
//loginControllerAuth.autorizarUsuario);

router.get("/cadastre-se", cadastroControllerRead.getPage);
router.post("/cadastro",
regrasValidacaoMiddleware.cadastroValidationRules,
validacaoFormularioMiddleware.validacaoCadastro,
autenticacaoMiddleware.encriptarSenha,
cadastroControllerCreate.createUsuario);



//router.get("/personais", personaisControllerRead.viewPage);

router.get("/", homeControllerRead.viewPage);
router.get("/index", indexControllerRead.viewPage);
router.get("/termos_de_uso", TermosControllerRead.viewPage);
router.get("/ofertas", ofertasControllerRead.viewPage);
router.get("/ofertas-vermais", ofertasmaisControllerRead.viewPage);





module.exports = router