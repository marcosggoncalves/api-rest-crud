const router = require('express').Router();
const cadastroUsuario = require('../controllers/cadastroUsuario');
const { check } = require('express-validator');

router.post('/usuario',
	[
		check('nome_completo', 'Nome completo é obrigatório').not().isEmpty(),
		check('cpf', 'CPF é obrigatório').not().isEmpty(),
		check('email', 'E-mail é obrigatório').not().isEmpty(),
		check('endereco', 'Endereço é obrigatório').not().isEmpty()
	],cadastroUsuario.cadastro_usuario);

module.exports = router;