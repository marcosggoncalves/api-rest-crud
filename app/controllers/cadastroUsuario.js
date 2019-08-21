module.exports.cadastro_usuario = (req,res)=>{
	let schemas = require('../../config/connect');
	let consulta = require('../model/consultas');
	let { check, validationResult } = require('express-validator');
	
	let errors = validationResult(req);

	if(!errors.isEmpty()){
		res.json({
			status:false,
			validation:errors.array()
		});
	}else{
		let usuario = new schemas.createUsuario(req.body);
		consulta._salvar_registro(usuario,(err,result)=>{
			if(err){
				res.status(404).json({
					status:false,
					message:'Não foi possivel cadastrar usuário, tente novamente.'
				});
			}else{
				res.json({
					status:true,
					message:'Usuário registrado com sucesso.'
				});
			}
		});
	}
}