var express = require('express')
var router = express.Router()
var bcrypt = require('bcryptjs')
var salr = bcrypt.genSaltSync(12)
var mysql = require('mysql -hcontainers-us-west-186.railway.app -uroot -pN7AmMmwDULjN5JLC7OJK --port 7102 --protocol=TCP railway')
var { body, validationResult } = require('express-validator')

var fabricDeConexao = require('../../config/connection-factory')
const session = require('express-session')
var bd = fabricDeConexao()

bd.connect((err) => {
    if(err){
      throw err
    }
    console.log('Concectado ao banco de dados MySQL')
})


router.get('/', function(req, res){
    res.render('pages/cadastre-se')
})

router.get('/cadastre-se', function(req, res){
    res.render('pages/cadastre-se')
})

router.post('/cadastro',  (req, res) => {
    const { nome, email, senha , cpf, telefone} = req.body

    if (nome && email && senha && cpf && telefone){
    bd.query('select * from cadastro where email = ?',
    [email],
    (error, results) => {
        if(results.length > 0) {
            res.send('Email já cadastrado')
        } else {
            const hashedPassword = bcrypt.hashSync(senha)

            bd.query(
            'insert into cadastro (nome, email, senha ,cpf, telefone) values (?, ?, ?, ?, ?)',
            [nome, email, hashedPassword, cpf , telefone],
            (error, results) => {
                if(error){
                    console.error('Erro ao cadastrar o usuário:', error);
                    res.send('Erro ao cadastrar o usuário');
                } else {
                    res.redirect('/login');
                }
            }
            )
        }
    })
    } else {
        res.send('Por favor, preencha todos os campos')
    }
})



router.get('/login', function(req, res){
    res.render('pages/login');
});

router.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (email && senha) {
        bd.query(
            'SELECT * FROM cadastro WHERE email = ?',
            [email],
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.send('Ocorreu um erro ao autenticar.');
                    return;
                }

                if (results && results.length > 0){
                    const storedPassword = results[0].senha;
                    if(bcrypt.compareSync(senha, storedPassword)){
                        req.session.loggedin = true;
                        req.session.email = email;
                        res.redirect('/home'); 
                    } else {
                        res.send('Senha incorreta');
                    }
                } else {
                    res.send('Email não encontrado');
                }
            }
        );
    } else {
        res.send('Informe um email e senha');
    }
});

// Rota para deletar um login
router.get('/delete-login', function(req, res){
    res.render('pages/delete-login');
});

router.post('/delete-login', (req, res) => {
    const { email, senha } = req.body;

    if (email && senha) {
        bd.query(
            'SELECT * FROM cadastro WHERE email = ?',
            [email],
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.send('Ocorreu um erro ao autenticar para exclusão.');
                    return;
                }

                if (results && results.length > 0){
                    const storedPassword = results[0].senha;
                    if(bcrypt.compareSync(senha, storedPassword)){
                        // Senha correta, prosseguir com a exclusão
                        bd.query(
                            'DELETE FROM cadastro WHERE email = ?',
                            [email],
                            (error, deleteResults) => {
                                if (error) {
                                    console.error(error);
                                    res.send('Ocorreu um erro ao excluir a conta.');
                                    return;
                                }

                                if (deleteResults.affectedRows > 0) {
                                    res.send('Conta excluída com sucesso!');
                                } else {
                                    res.send('Erro ao excluir a conta. Verifique suas credenciais.');
                                }
                            }
                        );
                    } else {
                        res.send('Senha incorreta');
                    }
                } else {
                    res.send('Email não encontrado');
                }
            }
        );
    } else {
        res.send('Informe um email e senha para excluir a conta');
    }
});



router.get('/alterar-senha', function(req, res){
    res.render('pages/alterar-senha');
});

router.post('/alterar-senha', (req, res) => {
    const { email, senhaAtual, novaSenha } = req.body;

    if (email && senhaAtual && novaSenha) {
        bd.query(
            'SELECT * FROM cadastro WHERE email = ?',
            [email],
            (error, results) => {
                if (error) {
                    console.error(error);
                    res.send('Ocorreu um erro ao buscar o usuário.');
                    return;
                }

                if (results && results.length > 0) {
                    const storedPassword = results[0].senha;
                    if (bcrypt.compareSync(senhaAtual, storedPassword)) {
                        // Senha atual corresponde à senha armazenada no banco de dados
                        // Agora você pode atualizar a senha no banco de dados
                        const hashedNovaSenha = bcrypt.hashSync(novaSenha);
                        bd.query(
                            'UPDATE cadastro SET senha = ? WHERE email = ?',
                            [hashedNovaSenha, email],
                            (error) => {
                                if (error) {
                                    console.error(error);
                                    res.send('Ocorreu um erro ao alterar a senha.');
                                } else {
                                    res.redirect('/usuarioconfigs'); 
                                }
                            }
                        );
                    } else {
                        res.send('Senha atual incorreta');
                    }
                } else {
                    res.send('Email não encontrado');
                }
            }
        );
    } else {
        res.send('Informe o email, a senha atual e a nova senha.');
    }
});

//Conxão das Pags restantes Abaixo

router.get('/ofertas', function (req, res) {
    res.render('pages/ofertas');
});

router.get('/endereco', function (req, res) {
    res.render('pages/endereco');
});

router.get('/ofertas-vermais', function (req, res) {
    res.render('pages/ofertas-vermais');
});

router.get('/pacotes_confimacao', function (req, res) {
    res.render('pages/pacotes_confimacao');
});

router.get('/qrcode', function (req, res) {
    res.render('pages/qrcode');
});

router.get('/termos_de_uso', function (req, res) {
    res.render('pages/termos_de_uso');
});

router.get('/usuarioconfigs', function (req, res) {
    res.render('pages/usuarioconfigs');
});

router.get('/usuariorecom', function (req, res) {
    res.render('pages/usuariorecom');
});

router.get('/usuariofav', function (req, res) {
    res.render('pages/usuariofav');
});

router.get('/pacotespag', function (req, res) {
    res.render('pages/pacotespag');
});

router.get('/home', function (req, res) {
    res.render('pages/home');
});

module.exports = router