import { Router } from '@angular/router';
import { AlunoService } from './../../services/aluno.services';
import { Aluno } from './../../models/aluno.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {

  alunos:Aluno[];

  constructor(private alunoService: AlunoService,
              private router:Router) { 
    this.alunos = [];
  }

  ngOnInit() {
    this.list();
  }

  list(){
    this.alunoService.list().subscribe(
      (res:Aluno[])=>{
        this.alunos = res;
      }
    );
  }

  delete(id:number){
    if(!confirm("Are you sure?")){
      return this.alunoService.delete(id).subscribe((res:any) => {
        console.log('Aluno jubilado');
      });
    } 
    
    this.alunoService.delete(id).subscribe(
      (res:any)=>{
        console.log(`Aluno id ${id} deleted!`);
        this.list();
      }
    );
  }

  edit(id:number){
    //nevegação imperativa
    this.router.navigate(['editar/' + id]);
  }

}