import { Component, OnInit } from '@angular/core';
import { insumo } from '../models/insumo';
import { InsumoServicesService } from '../services/insumo-services.service';

@Component({
  selector: 'app-registro-insumo',
  templateUrl: './registro-insumo.component.html',
  styleUrls: ['./registro-insumo.component.css']
})
export class RegistroInsumoComponent implements OnInit {
  insumo: insumo;
  constructor(private insumoService : InsumoServicesService) { 
    this.insumo=new insumo();
  }

  ngOnInit(): void {
  }

  guardarInsumo(){
    this.insumoService.guardarInsumo(this.insumo);
  }

}
