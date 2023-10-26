 class usuarioconfigController {
    viewPage(req, res) {
         return res.render("pages/usuarioconfigs.ejs", {
             data: {
                page: "INFOTUR"
            }
        })
     }
 }

 const usuarioconfigControllerRead = new usuarioconfigController();

 module.exports = usuarioconfigControllerRead;