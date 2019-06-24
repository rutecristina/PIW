import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
}) 
export class AlunoService {

  url: string = 'http://localhost:3000/alunos';

  constructor(private httpClient: HttpClient) { }

  register(alu:Aluno) {
    return this.httpClient.post(this.url + '/registrar', alu);
  }

  list() {
    return this.httpClient.get(this.url + '/listar');  
  }

  delete(id:number) {
    return this.httpClient.delete(`${this.url}/apagar/${id}`);
  }

  retrieve(id:number) {
    return this.httpClient.get(`${this.url}/recuperar/${id}`);
  }

  update(alu:Aluno) {
    return this.httpClient.put(`${this.url}/editar/${alu._id}`, alu);
  }
}
