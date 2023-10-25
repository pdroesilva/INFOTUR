const usuarioModel = require("../../models/Usuario");
const jwt = require("jsonwebtoken");

class EditarPerfilController {	
  constructor() {
		this.editUser = this.editUser.bind(this);
	}

    async editUser(req, res) {
    const token = req.session.token;
    const {userId} = jwt.decode(token, process.env.SECRET);
    const user = await usuarioModel.findUserById(userId);

    const {nome, email, telefone, cpf } = req.body;

    try {
		await usuarioModel.updatePerfil({
            nome,
            email,
            telefone,
            cpf
		}, userId);
		return res.redirect("/editar-perfil");
		} catch (erro) {
			console.log(erro);

			if (erro.code === "P2002") {
				return res.render("pages/editar-perfil.ejs", {
					data: {
						page_name: "Editar perfil",
						input_values: {
                            nome,
                            email,
                            telefone,
                            cpf
						},
						errors: {
							email_error: {
								msg: "Email já cadastrado!",
							},
						},
					},
				});
			}

			return res.render("pages/editar-perfil.ejs", {
				data: {
					page_name: "Editar perfil",
					input_values: {
                        nome,
                        email,
                        telefone,
                        cpf
					},
					errors: {
						sistema_error: {
							msg: "Erro de sistema, tente novamente mais tarde!",
						},
					},
				},
			});
		}
    }
}

const editarPerfilControllerUpdate = new EditarPerfilController()

module.exports = editarPerfilControllerUpdate;