class monumentosController {
    viewPage(req, res) {
        return res.render("pages/monumentos.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const monumentosControllerRead = new monumentosController();

module.exports = monumentosControllerRead;