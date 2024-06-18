import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-servicios',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
