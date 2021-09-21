import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { contrato } from '../models/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoServiceService {

  constructor() { }
  consultarContratos(): contrato[]{
    return JSON.parse(localStorage.getItem('RegistroContratos') || '{}');
  }

  guardarrContratos(contratoGuardar: contrato){
    
    let listaContratos:contrato[]=[];
    if(this.consultarContratos().length>0){
      listaContratos=this.consultarContratos();
    }
    listaContratos.push(contratoGuardar);
    localStorage.setItem('RegistroContratos', JSON.stringify(listaContratos));
    alert('El contrato se ha guardado correctamente')

  }
}
