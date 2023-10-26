const express = require('express')
const router = express.Router()


const jwt = require("jsonwebtoken");

const homeControllerRead = require("../controllers/homeController/homeControllerRead");
const indexControllerRead = require("../controllers/enderecoController/indexControllerRead");
const TermosControllerRead = require("../controllers/termos_de_usoController/termosControllerRead");
const ofertasControllerRead = require("../controllers/ofertasController/ofertasControllerRead");
const ofertasmaisControllerRead = require("../controllers/ofertasmaisController/ofertasmaisControllerRead");
const pacotespagControllerRead = require("../controllers/pacotespagController/pacotespagControllerRead");
const perfilControllerRead = require("../controllers/perfilController/perfilControllerRead");

const usuarioconfigControllerRead = require("../controllers/usuarioconfigController/usuarioconfigControllerRead");


const cadastroControllerRead = require("../controllers/cadastroController/cadastroControllerRead");
const cadastroControllerCreate = require("../controllers/cadastroController/cadastroControllerCreate");


const loginControllerRead = require("../controllers/loginController/loginControllerRead");
const loginControllerAuth = require("../controllers/loginController/loginControllerAuth");


const autenticacaoMiddleware = require("../middlewares/autenticacaoMiddleware");
const regrasValidacaoMiddleware = require("../middlewares/regrasValidacaoMiddleware");
const validacaoFormularioMiddleware = require("../middlewares/validacaoFormularioMiddleware");


const editarPerfilControllerRead = require("../controllers/editarPerfilController/editarPerfilControllerRead");
const editarPerfilControllerUpdate = require("../controllers/editarPerfilController/editarPerfilControllerUpdate");

//Conxão das Pags restantes Abaixo


router.get("/login", loginControllerRead.getPage);
router.post("/login",
validacaoFormularioMiddleware.validacaoLogin,
loginControllerAuth.autorizarUsuario);

router.get("/cadastre-se", cadastroControllerRead.getPage);
router.post("/cadastro",
regrasValidacaoMiddleware.cadastroValidationRules,
validacaoFormularioMiddleware.validacaoCadastro,
autenticacaoMiddleware.encriptarSenha,
cadastroControllerCreate.createUsuario);

router.get("/usuarioconfigs", usuarioconfigControllerRead.viewPage);

router.get("/", homeControllerRead.viewPage);
router.get("/index", indexControllerRead.viewPage);
router.get("/termos_de_uso", TermosControllerRead.viewPage);
router.get("/ofertas", ofertasControllerRead.viewPage);
router.get("/ofertas-vermais", ofertasmaisControllerRead.viewPage);
router.get("/pacotespag", pacotespagControllerRead.viewPage);



router.get("/editar-perfil",
autenticacaoMiddleware.validateJWT,
editarPerfilControllerRead.getPage);

router.post("/editar",
autenticacaoMiddleware.validateJWT,
regrasValidacaoMiddleware.editarPerfilValidationRules,
validacaoFormularioMiddleware.editarPerfilValidation,
editarPerfilControllerUpdate.editUser);

//router.get("/usuarioconfigs", usuarioconfigControllerRead.viewPage);

router.get("/usuariorecom",
autenticacaoMiddleware.validateJWT,
perfilControllerRead.getPage);






module.exports = router