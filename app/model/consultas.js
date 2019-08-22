class Consultas{
	_salvar_registro(schema,callback){
		return schema.save(callback);
	}
	_carregar_todos_registros(schema,callback){
		return schema.find(callback);
	}
	_deletar_registro(schema,where,callback){
		return schema.deleteOne(where,callback);
	}
}
module.exports = new Consultas();
