class pacotesconfirmacaoController {
    viewPage(req, res) {
        return res.render("pages/pacotes_confimacao.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const pacotesconfirmacaoControllerRead = new pacotesconfirmacaoController();

module.exports = pacotesconfirmacaoControllerRead;