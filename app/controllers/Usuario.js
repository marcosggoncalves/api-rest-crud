module.exports.index =(req,res)=>{
	let schemas = require('../../config/connect');
	let consulta = require('../model/consultas');

	consulta._carregar_todos_registros(schemas.createUsuario,(err,result)=>{
		if(err){
			res.status(404).json({'usuarios':[],status:false});
		}else{
			console.log('Consulta realizada com sucesso !!!');
			res.json({'usuarios':result,status:true});
		}
	});	
}
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
module.exports.deletar_usuario  = (req, res) =>{
    let schemas = require('../../config/connect');
	let consulta = require('../model/consultas');

	if(req.params.cpf < 0){
		res.status(404).json({
			status:false,
			message:'Digite um id válido'
		});
	}else{
		consulta._deletar_registro(schemas.createUsuario,{cpf:req.params.cpf},(err,result)=>{
			if(err){
				res.status(404).json({
					status:false,
					message:'Não foi possivel deletar usuário, tente novamente.'
				});
			}else{
				if(result.n == 0){
					res.status(404).json({
						status:false,
						message:'Não existe usuário com essa informação.'
					});
				}else{
					res.json({
						status:true,
						message:'Usuário deletado com sucesso.'
					});
				}
			}
		});
	}
}