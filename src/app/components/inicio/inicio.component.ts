import { Component } from '@angular/core';
import { ServiciosComponent } from '../servicios/servicios.component';
import { Servicios2Component } from '../servicios2/servicios2.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { FooterComponent } from '../footer/footer.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { BlogComponent } from '../blog/blog.component';
import { RouterLink } from '@angular/router';
import { NavResponsiveComponent } from '../../nav-responsive/nav-responsive.component';
import { Subservicios1Component } from '../subservicio/subservicios-1/subservicios-1.component';
import { Subservicios3Component } from '../subservicio/subservicios-3/subservicios-3.component';
import { Subservicios7Component } from '../subservicio/subservicios-7/subservicios-7.component';
import { Subservicios2Component } from '../subservicio/subservicios-2/subservicios-2.component';
import { Subservicios4Component } from '../subservicio/subservicios-4/subservicios-4.component';
import { Subservicios5Component } from '../subservicio/subservicios-5/subservicios-5.component';
import { Subservicios6Component } from '../subservicio/subservicios-6/subservicios-6.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ServiciosComponent, Servicios2Component, NosotrosComponent, FooterComponent, GaleriaComponent, BlogComponent, RouterLink, NavResponsiveComponent, Subservicios1Component, Subservicios3Component, Subservicios7Component, Subservicios2Component,Subservicios4Component,Subservicios5Component,Subservicios6Component],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

     

}
