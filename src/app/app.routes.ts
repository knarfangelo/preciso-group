import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { Subservicios1Component } from './components/subservicios-1/subservicios-1.component';
import { Subservicios2Component } from './components/subservicios-2/subservicios-2.component';
import { Subservicios3Component } from './components/subservicios-3/subservicios-3.component';
import { Subservicios4Component } from './components/subservicios-4/subservicios-4.component';
import { Subservicios5Component } from './components/subservicios-5/subservicios-5.component';
import { Subservicios6Component } from './components/subservicios-6/subservicios-6.component';
import { Subservicios7Component } from './components/subservicios-7/subservicios-7.component';
import { Subservicios8Component } from './components/subservicios-8/subservicios-8.component';
export const routes: Routes = [
    {path:'nosotros/:id', component:NosotrosComponent},
    {path:'', component:PrincipalComponent},
    {path:'inicio', component:InicioComponent},
    {path:'servicios', component:ServiciosComponent},
    {path:'subservicios1', component:Subservicios1Component}, 
    {path:'subservicios2', component:Subservicios2Component}, 
    {path:'subservicios3', component:Subservicios3Component}, 
    {path:'subservicios4', component:Subservicios4Component}, 
    {path:'subservicios5', component:Subservicios5Component}, 
    {path:'subservicios6', component:Subservicios6Component}, 
    {path:'subservicios7', component:Subservicios7Component}, 
    {path:'subservicios8', component:Subservicios8Component}, 
];
