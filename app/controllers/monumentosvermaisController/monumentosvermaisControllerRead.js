class monumentosvermaisController {
    viewPage(req, res) {
        return res.render("pages/monumentos-vermais.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const monumentosvermaisControllerRead = new monumentosvermaisController();

module.exports = monumentosvermaisControllerRead;