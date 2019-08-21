module.exports.index =(req,res)=>{
	const schemas = require('../../config/connect');
	const consulta = require('../model/consultas');

	consulta._carregar_todos_registros(schemas.createUsuario,(err,result)=>{
		if(err){
			res.status(404).json({'usuarios':[],status:false});
		}else{
			res.status(200).json({'usuarios':result,status:true});
		}
	});	
}