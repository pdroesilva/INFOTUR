class pacotesController {
    viewPage(req, res) {
        return res.render("pages/pacotes.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const pacotesControllerRead = new pacotesController();

module.exports = pacotesControllerRead;