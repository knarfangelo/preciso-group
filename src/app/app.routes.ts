import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { InicioComponent } from './components/inicio/inicio.component';
export const routes: Routes = [
    {path:'nosotros', component:PrincipalComponent},
    {path:'', component:PrincipalComponent},
    {path:'inicio', component:InicioComponent},    
];
