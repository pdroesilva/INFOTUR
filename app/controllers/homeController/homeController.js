class HomeController {
    viewPage(req, res) {
        return res.render("pages/home.ejs", {
            data: {
                page: "INFOTUR"
            }
        })
    }
}

const homeControllerRead = new HomeController();

module.exports = homeControllerRead;