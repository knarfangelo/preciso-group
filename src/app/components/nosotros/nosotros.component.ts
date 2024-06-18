import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-nosotros',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
