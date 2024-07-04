import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, signal} from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { NavResponsiveComponent } from '../../../nav-responsive/nav-responsive.component';
import { NavegacionComponent } from '../../../navegacion/navegacion.component';
import { ServiciosComponent } from '../../servicios/servicios.component';
import { FooterComponent } from '../../footer/footer.component';
register();
@Component({
  selector: 'app-subservicios-1',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [NavResponsiveComponent, NavegacionComponent, FooterComponent],
  templateUrl: './subservicios-1.component.html',
  styleUrl: './subservicios-1.component.css'
})
export class Subservicios1Component {

}
