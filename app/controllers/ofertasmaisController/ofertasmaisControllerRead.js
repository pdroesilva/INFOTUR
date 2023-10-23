class ofertasmaisController {
    viewPage(req, res) {
        return res.render("pages/ofertas-vermais.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const ofertasmaisControllerRead = new ofertasmaisController();

module.exports = ofertasmaisControllerRead;