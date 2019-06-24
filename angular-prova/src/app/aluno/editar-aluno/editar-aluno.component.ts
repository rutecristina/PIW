import { NgForm } from '@angular/forms';
import { AlunoService } from './../../services/aluno.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from './../../models/aluno.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  aluno:Aluno = new Aluno();
  
  constructor(private activatedRoute:ActivatedRoute,
              private alunoService:AlunoService,
              private router:Router) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.alunoService.retrieve(id).subscribe(
      (res:Aluno)=>{
        this.aluno = res;
      }
    );
  }

  onSubmit(){

    this.alunoService.update(this.aluno).subscribe(
      (res:Aluno)=>{
        console.log(`Aluno id ${res._id} updated!`);
        this.router.navigate(['listar']);
      },
    );
  }
}