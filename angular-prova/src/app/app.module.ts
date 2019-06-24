import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Routes } from '@angular/router';
import { RegistrarAlunoComponent } from './aluno/registrar-aluno/registrar-aluno.component';
import { AlunoModule } from './aluno/aluno.module';
import { ListarAlunoComponent } from './aluno/listar-aluno/listar-aluno.component';
import { EditarAlunoComponent } from './aluno/editar-aluno/editar-aluno.component';
import { HttpClientModule } from '@angular/common/http';

const rotas: Routes = [
  {path: 'registrar', component: RegistrarAlunoComponent},
  {path: 'listar', component: ListarAlunoComponent},
  {path: 'editar/:id', component: EditarAlunoComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AlunoModule,
    FormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
