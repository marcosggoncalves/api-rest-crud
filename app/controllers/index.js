module.exports.index =(req,res)=>{
	let schemas = require('../../config/connect');
	let consulta = require('../model/consultas');

	consulta._carregar_todos_registros(schemas.createUsuario,(err,result)=>{
		if(err){
			res.status(404).json({'usuarios':[],status:false});
		}else{
			res.json({'usuarios':result,status:true});
		}
	});	
}