import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroContratoInicialComponent } from './registro-contrato-inicial.component';

describe('RegistroContratoInicialComponent', () => {
  let component: RegistroContratoInicialComponent;
  let fixture: ComponentFixture<RegistroContratoInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroContratoInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroContratoInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
