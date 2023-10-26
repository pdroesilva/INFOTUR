class usuariofavController {
    viewPage(req, res) {
        return res.render("pages/usuariofav.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const usuariofavControllerRead = new usuariofavController();

module.exports = usuariofavControllerRead;