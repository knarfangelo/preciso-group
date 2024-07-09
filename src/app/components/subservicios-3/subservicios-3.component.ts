import { Component } from '@angular/core';
import { NavResponsiveComponent } from '../../nav-responsive/nav-responsive.component';
import { NavegacionComponent } from '../../navegacion/navegacion.component';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappComponent } from "../whatsapp/whatsapp.component";

@Component({
  selector: 'app-subservicios-3',
  standalone: true,
  templateUrl: './subservicios-3.component.html',
  styleUrl: './subservicios-3.component.css',
  imports: [NavResponsiveComponent, NavegacionComponent, FooterComponent, WhatsappComponent]
})
export class Subservicios3Component {
  irAExterno() {
    window.open('https://wa.link/j87pss', '_blank');
  }
}
