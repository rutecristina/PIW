import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAlunoComponent } from './registrar-aluno.component';

describe('RegistrarAlunoComponent', () => {
  let component: RegistrarAlunoComponent;
  let fixture: ComponentFixture<RegistrarAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
