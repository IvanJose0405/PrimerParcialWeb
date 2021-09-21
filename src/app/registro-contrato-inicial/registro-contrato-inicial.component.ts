import { Component, OnInit } from '@angular/core';
import { contrato } from '../models/contrato';
import { ContratoServiceService } from '../services/contrato-service.service';

@Component({
  selector: 'app-registro-contrato-inicial',
  templateUrl: './registro-contrato-inicial.component.html',
  styleUrls: ['./registro-contrato-inicial.component.css']
})
export class RegistroContratoInicialComponent implements OnInit {
  contratoGuardar :contrato;

  constructor(private contratoServices: ContratoServiceService) { 
    this.contratoGuardar=new contrato();
  }
  guardar(){
    
    this.contratoServices.guardarrContratos(this.contratoGuardar)
  }

  ngOnInit(): void {
  }

}
