class Consultas{
	_salvar_registro(schema,callback){
		return schema.save(callback);
	}
	_carregar_todos_registros(schema,callback){
		return schema.find(callback);
	}
}
module.exports = new Consultas();
