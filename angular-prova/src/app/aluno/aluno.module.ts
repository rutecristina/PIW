import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrarAlunoComponent } from './registrar-aluno/registrar-aluno.component';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { Aluno } from '../models/aluno.model';
import { AlunoService } from '../services/aluno.services';

@NgModule({
  declarations: [
    RegistrarAlunoComponent,
    ListarAlunoComponent,
    EditarAlunoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RegistrarAlunoComponent,
    ListarAlunoComponent,
    EditarAlunoComponent
  ],
  providers: [Aluno, AlunoService]
})
export class AlunoModule { }
