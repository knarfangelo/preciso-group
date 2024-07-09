import { Component } from '@angular/core';
import { NavResponsiveComponent } from '../../nav-responsive/nav-responsive.component';
import { NavegacionComponent } from '../../navegacion/navegacion.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { WhatsappComponent } from "../whatsapp/whatsapp.component";

@Component({
    selector: 'app-subservicios-2',
    standalone: true,
    templateUrl: './subservicios-2.component.html',
    styleUrl: './subservicios-2.component.css',
    imports: [NavResponsiveComponent, NavegacionComponent, FooterComponent, RouterLink, WhatsappComponent]
})
export class Subservicios2Component {
  irAExterno() {
    window.open('https://wa.link/j87pss', '_blank');
  }
}
