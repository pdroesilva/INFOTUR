class CadastroController {
    getPage(req, res) {
        return res.render("pages/cadastre-se", {
            data: {
                page: "Cadastro"
            }
        })
    }
}

const CadastroControllerRead = new CadastroController();

module.exports = CadastroControllerRead;