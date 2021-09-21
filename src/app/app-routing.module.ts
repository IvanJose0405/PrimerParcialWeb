import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroContratoInicialComponent } from './registro-contrato-inicial/registro-contrato-inicial.component';
import { RegistroInsumoComponent } from './registro-insumo/registro-insumo.component';

const routes: Routes = [
{ 
  path: 'registroContratoInicial', 
  component: RegistroContratoInicialComponent, 
},
{
  path: 'registroInsumo', 
  component: RegistroInsumoComponent, 
}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
