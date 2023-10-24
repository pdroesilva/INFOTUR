class pacotespagController {
    viewPage(req, res) {
        return res.render("pages/pacotespag.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const pacotespagControllerRead = new pacotespagController();

module.exports = pacotespagControllerRead;