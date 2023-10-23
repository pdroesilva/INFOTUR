class indexController {
    viewPage(req, res) {
        return res.render("pages/index.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const indexControllerRead = new indexController();

module.exports = indexControllerRead;