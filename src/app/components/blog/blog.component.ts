import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, signal} from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { IServicio } from '../../models/IServicio';
import { servicios } from '../../DataBase/serviciosDB/servicios';
import { SwiperOptions } from 'swiper/types';
import { IBlog } from '../../models/IBlog';
import { blogs } from '../../DataBase/blogDB/blogs';
register();
@Component({
  selector: 'app-blog',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  template: `

<header>
  <main>
  <h2 class="titulo">BLOG</h2>
      <swiper-container init=false class="swiper-wrapper swiper-blog">
      @for (swiperObject of swiperObjects; track $index) {
        <swiper-slide><div class="slide-custom">
          <img [src]="swiperObject.img" alt="">
          <p>{{swiperObject.fecha}}</p>
          <p>{{swiperObject.subtitle}}</p>
          <h2 class="titulo-blog">{{swiperObject.title}}</h2>
        </div>
        <button>Más</button>
      </swiper-slide>
      }
      </swiper-container>
  </main>
  </header>
  
  `,
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: IBlog[] = blogs;

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-blog');
    const swiperOptions: SwiperOptions = {
      autoplay:true,
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 2.5,
      breakpoints: {
        0:{
          slidesPerView:1,
        },
        800:{
          slidesPerView:2,
        },
        1200:{
          slidesPerView:4,
        }
      },
      spaceBetween:50,
      pagination:true,
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }
}
