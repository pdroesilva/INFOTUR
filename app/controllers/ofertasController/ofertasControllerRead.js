class ofertasController {
    viewPage(req, res) {
        return res.render("pages/ofertas.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const ofertasControllerRead = new ofertasController();

module.exports = ofertasControllerRead;