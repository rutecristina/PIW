import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../../models/aluno.model';
import { AlunoService } from 'src/app/services/aluno.services';

@Component({
  selector: 'app-registrar-aluno',
  templateUrl: './registrar-aluno.component.html',
  styleUrls: ['./registrar-aluno.component.css']
})
export class RegistrarAlunoComponent implements OnInit {
  
  constructor(
    private aluno: Aluno,
    private service: AlunoService
    ) { }

  ngOnInit() {

  }

  onSubmit() {
    this.service.register(this.aluno).subscribe((res: Aluno) => {
      console.log('Aluno' + res.name +  'registrado');
    });
  }

}
