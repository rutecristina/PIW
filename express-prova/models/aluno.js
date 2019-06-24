var mongoose = require('mongoose');

//criando o schema, o qual servirá para criar o modelo (collections)
var AlunoSchema = mongoose.Schema(
    {
        name: {type:String, required:true, max:100},
        ap1: {type:Number, required:true, max:100},
        ap2: {type:Number, required:true, max:100},
    }
);

//criando o modelo a partir do schema acima, o qual servirá para incluir as instâncias (documentos)
var AlunoModel = mongoose.model('alunos', AlunoSchema);


//retornando o modelo a ser usado pelo serviço (CRUD).
module.exports = AlunoModel;