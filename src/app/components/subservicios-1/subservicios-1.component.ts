import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, signal} from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { NavResponsiveComponent } from '../../nav-responsive/nav-responsive.component';
import { NavegacionComponent } from '../../navegacion/navegacion.component';
import { ServiciosComponent } from '../servicios/servicios.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { WhatsappComponent } from '../whatsapp/whatsapp.component';
register();
@Component({
  selector: 'app-subservicios-1',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [NavResponsiveComponent, NavegacionComponent, FooterComponent,RouterLink, WhatsappComponent],
  templateUrl: './subservicios-1.component.html',
  styleUrl: './subservicios-1.component.css'
})
export class Subservicios1Component {
  irAExterno() {
    window.open('https://wa.link/j87pss', '_blank');
  }
}
