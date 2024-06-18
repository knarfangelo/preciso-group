import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
export const routes: Routes = [
    {path:'nosotros', component:PrincipalComponent},
    {path:'', component:PrincipalComponent},
    {path:'inicio', component:InicioComponent},
    {path:'servicios', component:ServiciosComponent},
];
