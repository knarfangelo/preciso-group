import { Component } from '@angular/core';
import { NavResponsiveComponent } from '../../nav-responsive/nav-responsive.component';
import { NavegacionComponent } from '../../navegacion/navegacion.component';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappComponent } from "../whatsapp/whatsapp.component";

@Component({
    selector: 'app-subservicios-5',
    standalone: true,
    templateUrl: './subservicios-5.component.html',
    styleUrl: './subservicios-5.component.css',
    imports: [NavResponsiveComponent, NavegacionComponent, FooterComponent, WhatsappComponent]
})
export class Subservicios5Component {
  irAExterno() {
    window.open('https://wa.link/j87pss', '_blank');
  }
}
