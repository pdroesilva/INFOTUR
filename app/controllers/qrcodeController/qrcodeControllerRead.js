class qrcodeController {
    viewPage(req, res) {
        return res.render("pages/qrcode.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const qrcodeControllerRead = new qrcodeController();

module.exports = qrcodeControllerRead;