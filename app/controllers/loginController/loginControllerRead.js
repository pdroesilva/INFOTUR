class loginController {
    getPage(req, res) {
        return res.render("pages/login", {
            data: {
                page: "Login"
            }
        })
    }
}

const loginControllerRead = new loginController();

module.exports = loginControllerRead;