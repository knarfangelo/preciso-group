import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-blog',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
