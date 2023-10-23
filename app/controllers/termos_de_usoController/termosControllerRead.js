class TermosController {
    viewPage(req, res) {
        return res.render("pages/termos_de_uso.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const TermosControllerRead = new TermosController();

module.exports = TermosControllerRead;