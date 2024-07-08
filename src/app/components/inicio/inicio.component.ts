import { Component } from '@angular/core';
import { ServiciosComponent } from '../servicios/servicios.component';
import { Servicios2Component } from '../servicios2/servicios2.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { FooterComponent } from '../footer/footer.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { BlogComponent } from '../blog/blog.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavResponsiveComponent } from '../../nav-responsive/nav-responsive.component';
import { Subservicios1Component } from '../subservicios-1/subservicios-1.component';
import { Subservicios3Component } from '../subservicios-3/subservicios-3.component';
import { Subservicios7Component } from '../subservicios-7/subservicios-7.component';
import { Subservicios2Component } from '../subservicios-2/subservicios-2.component';
import { Subservicios4Component } from '../subservicios-4/subservicios-4.component';
import { Subservicios5Component } from '../subservicios-5/subservicios-5.component';
import { Subservicios6Component } from '../subservicios-6/subservicios-6.component';
import { WhatsappComponent } from "../whatsapp/whatsapp.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [ServiciosComponent, Servicios2Component, NosotrosComponent, FooterComponent, GaleriaComponent, BlogComponent, RouterLink, NavResponsiveComponent, Subservicios1Component, Subservicios3Component, Subservicios7Component, Subservicios2Component, Subservicios4Component, Subservicios5Component, Subservicios6Component, WhatsappComponent]
})
export class InicioComponent {

  scrollToNosotros(event: Event) {
    event.preventDefault(); // Prevent default anchor tag behavior
    const targetElement = document.getElementById('nosotros');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  }
  scrollToServicio(event: Event) {
    event.preventDefault(); // Prevent default anchor tag behavior
    const targetElement = document.getElementById('servicios');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  }
  scrollToContacto(event: Event) {
    event.preventDefault(); // Prevent default anchor tag behavior
    const targetElement = document.getElementById('contacto');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  }
}
