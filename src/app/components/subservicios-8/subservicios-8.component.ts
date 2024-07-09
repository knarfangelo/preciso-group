import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavegacionComponent } from '../../navegacion/navegacion.component';
import { NavResponsiveComponent } from '../../nav-responsive/nav-responsive.component';
import { WhatsappComponent } from "../whatsapp/whatsapp.component";

@Component({
    selector: 'app-subservicios-8',
    standalone: true,
    templateUrl: './subservicios-8.component.html',
    styleUrl: './subservicios-8.component.css',
    imports: [FooterComponent, NavegacionComponent, NavResponsiveComponent, WhatsappComponent]
})
export class Subservicios8Component {
  irAExterno() {
    window.open('https://wa.link/j87pss', '_blank');
  }
}
