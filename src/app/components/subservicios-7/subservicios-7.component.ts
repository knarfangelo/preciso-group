import { Component } from '@angular/core';
import { NavResponsiveComponent } from '../../nav-responsive/nav-responsive.component';
import { NavegacionComponent } from '../../navegacion/navegacion.component';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappComponent } from "../whatsapp/whatsapp.component";

@Component({
    selector: 'app-subservicios-7',
    standalone: true,
    templateUrl: './subservicios-7.component.html',
    styleUrl: './subservicios-7.component.css',
    imports: [NavResponsiveComponent, NavegacionComponent, FooterComponent, WhatsappComponent]
})
export class Subservicios7Component {
  irAExterno() {
    window.open('https://wa.link/j87pss', '_blank');
  }
}
