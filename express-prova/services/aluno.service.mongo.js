const ServiceModel = require('../models/aluno');

class AlunoService{

    static register (req,res){
        ServiceModel.create(req.body).then(
            (aluno)=>{
                res.status(201).json(aluno);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static list (req,res){
        ServiceModel.find().then(
            (alunos)=>{
                res.status(201).json(alunos);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
                console.log(error)
            }
        );    
    }

    static update (req,res){
        let id = req.params.id;
        let data = req.body;
        ServiceModel.findByIdAndUpdate(id, data, {'new':true}).then(
            (aluno)=>{
                res.status(201).json(aluno);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static delete(req,res){
        ServiceModel.findByIdAndRemove(req.params.id).then(
            (aluno)=>{
                res.status(201).json(aluno);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static retrieve (req,res){
        ServiceModel.findById(req.params.id).then(
            (aluno)=>{
                res.status(201).json(aluno);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }
}

module.exports = AlunoService