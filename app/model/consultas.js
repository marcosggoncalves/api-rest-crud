class Consultas{
	_salvar_registro(schema,callback){
		return schema.save(callback);
	}
	_carregar_todos_registros(schema,callback){
		return schema.find({}).sort({_id: -1}).limit(10).exec(callback);
	}
	_deletar_registro(schema,where,callback){
		return schema.deleteOne(where,callback);
	}
	_filter_registro(schema,cpf,callback){
		return schema.find({cpf:cpf}).exec(callback);
	}
}
module.exports = new Consultas();
