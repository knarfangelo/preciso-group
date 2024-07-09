import { Component } from '@angular/core';
import { NavResponsiveComponent } from '../../nav-responsive/nav-responsive.component';
import { NavegacionComponent } from '../../navegacion/navegacion.component';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappComponent } from "../whatsapp/whatsapp.component";

@Component({
    selector: 'app-subservicios-4',
    standalone: true,
    templateUrl: './subservicios-4.component.html',
    styleUrl: './subservicios-4.component.css',
    imports: [NavResponsiveComponent, NavegacionComponent, FooterComponent, WhatsappComponent]
})
export class Subservicios4Component {
  irAExterno() {
    window.open('https://wa.link/j87pss', '_blank');
  }
}
