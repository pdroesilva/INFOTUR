const usuarioModel = require("../models/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

class ValidacaoFormularios {
    constructor() {
        this.validacaoCadastro = this.validacaoCadastro.bind(this);
        this.validacaoLogin = this.validacaoLogin.bind(this);
		this.editarPerfilValidation = this.editarPerfilValidation.bind(this);
    }

    validacaoCadastro(req, res, next) {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			const { nome, email, telefone, senha, cpf } = req.body;

			const nome_error = errors.errors.find((error) => error.path === "nome");
			const email_error = errors.errors.find((error) => error.path === "email");
			const telefone_error = errors.errors.find((error) => error.path === "telefone");
			const senha_error = errors.errors.find((error) => error.path === "senha");
			const cpf_error = errors.errors.find((error) => error.path === "cpf");

			return res.render("pages/cadastre-se.ejs", {
				data: {
					page_name: "Cadastro",
					input_values: {
						nome,
						email,
						telefone,
						senha,
						cpf,
					},
					errors: {
						nome_error,
						email_error,
						telefone_error,
						senha_error,
						cpf_error,
					},
				},
			});
		}

		return next();
	}

	async validacaoLogin(req, res, next) {
		const { email, senha } = req.body;

		const user = await usuarioModel.findUserByEmail(email);

		if (!user) {
			return res.render("pages/login.ejs", {
				data: {
					input_values: {
						email,
						senha,
					},
					errors: {
						email_error: {
							msg: "Usuário não encontrado",
						},
					},
				},
			});
		}

		bcrypt
			.compare(senha, user.senha)
			.then((auth) => {
				if (auth) {
					const token = jwt.sign({ userId: user.id }, process.env.SECRET);

					req.session.token = token;

					

					return next();
				}

				return res.render("pages/login.ejs", {
					data: {
						input_values: {
							email,
							senha,
						},
						errors: {
							senha_error: {
								msg: "Senha incorreta",
							},
						},
					},
				});
			})
			.catch((erro) => {
				console.log(erro);
				return res.render("pages/login.ejs", {
					data: {
						input_values: {
							email,
							senha,
						},
						errors: {
							sistema_error: {
								msg: "Erro de sistema, tente novamente mais tarde!",
							},
						},
					},
				});
			});
	}


	editarPerfilValidation(req, res, next) {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			const {nome, email, cpf, telefone} = req.body;

			const nome_error = errors.errors.find((error) => error.path === "nome");
			const email_error = errors.errors.find((error) => error.path === "email");
			const telefone_error = errors.errors.find((error) => error.path === "telefone");
			const cpf_error = errors.errors.find((error) => error.path === "cpf");

            

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
						nome_error,
						email_error,
						telefone_error,
						cpf_error
					},
				},
			});
		}

		return next();
	}
}

const validacaoFormulariosMiddleware = new ValidacaoFormularios();

module.exports = validacaoFormulariosMiddleware;