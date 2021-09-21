import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInsumoComponent } from './registro-insumo.component';

describe('RegistroInsumoComponent', () => {
  let component: RegistroInsumoComponent;
  let fixture: ComponentFixture<RegistroInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
