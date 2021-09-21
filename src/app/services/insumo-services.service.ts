import { Injectable } from '@angular/core';
import { insumo } from '../models/insumo'; 
import { ContratoServiceService } from './contrato-service.service';
import { contrato } from '../models/contrato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsumoServicesService {

  constructor(private contratoService: ContratoServiceService) { 

  }

  consultarInsumos(): insumo[]{
    return JSON.parse(localStorage.getItem('listaInsumos') || '{}');
  }

  guardarInsumo(insumoGuardar : insumo){
    var contratoEncontrado;
    contratoEncontrado= this.buscarContrato(insumoGuardar);
    if(contratoEncontrado==null){
      alert("No se encuentra al contrato con este código");
    }else{
      if(this.validarPrecio(insumoGuardar)){
        alert("el valor del insumo es mayor al del contrato")
      }else{
        this.actualizarCantidad(insumoGuardar);
      }
    }


  }

  actualizarCantidad(insumo: insumo){
    let listaContratos : contrato[] = [];
    if(this.contratoService.consultarContratos().length>0){
      listaContratos=this.contratoService.consultarContratos();
    }
    listaContratos.forEach((c)=>{
      if(c.codigo==insumo.codigo){
          c.valorContrato=c.valorContrato-insumo.valorDelProducto;
      }
    });
    let listaInsumos:insumo[]=[];
    if(this.consultarInsumos().length>0){
      listaInsumos=this.consultarInsumos();
    }
    localStorage.setItem('RegistroContratos', JSON.stringify(listaContratos));
    listaInsumos.push(insumo);
    localStorage.setItem('listaInsumos', JSON.stringify(listaInsumos));
    alert('Insumo guardado correctamente');

  }

  validarPrecio(insumo: insumo){
    let listaContratos : contrato[] = [];
    var mayor=false;
    if(this.contratoService.consultarContratos().length>0){
      listaContratos=this.contratoService.consultarContratos();
    }
    listaContratos.forEach((c)=>{
      if(c.codigo==insumo.codigo){
        if(c.valorContrato<insumo.valorDelProducto){
          mayor=true;
        }
      }else{
        mayor=false;
      }
    });
    return mayor;

  }
  

  buscarContrato(insumo: insumo){
    debugger
    let listaContratos : contrato[] = [];
    var contrato;
    if(this.contratoService.consultarContratos().length>0){
      listaContratos=this.contratoService.consultarContratos();
    }
    listaContratos.forEach((c)=>{
      if(c.codigo==insumo.codigo){
        contrato=c;
      }else{
        contrato=null;
      }
    });
    return contrato;

  }
}
