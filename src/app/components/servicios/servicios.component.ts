import { CUSTOM_ELEMENTS_SCHEMA, Component} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IServicio } from '../../models/IServicio';
import { servicios } from '../../DataBase/serviciosDB/servicios';
import { NgOptimizedImage } from '@angular/common';
register();
@Component({
  selector: 'app-servicios',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  template: `
  <main>
  <h2 class="titulo">NUESTROS SERVICIOS</h2>
  <header>
      <div class="servicio-principal">

      <swiper-container>      
        @for (servicio of servicios; track $index) {
        <swiper-slide slides-per-view="1" autoplay="true" speed="1000" direction="vertical">
              <img class="imagenprincipal" [srcset]="servicio.img">
              <h2>{{servicio.title}}</h2>
              <p>{{servicio.description}}</p>
              <button (click)="siguienteServicio()">Siguiente Servicio</button> 
          </swiper-slide> 
        }
        </swiper-container>
      </div>
      <swiper-container  slides-per-view="2" autoplay="true" speed="1000" direction="vertical">
        @for (subServicio of servicios[index].subServicio; track $index) {
        <swiper-slide>
          <div class="slider-info">
              <img class="imagensub" [src]="subServicio.img" alt="">          
              <h2>{{subServicio.title}}</h2>
              <p>{{subServicio.description}}</p>
              <button>Saber mas</button></div>
          </swiper-slide>
        }  
      </swiper-container>
  </header>
</main>`,
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
    index: number = 0;
  servicios : IServicio[] = servicios;
  imagenPrincipal : string = `/servicios/${this.index + 1}.jpg`;

  siguienteServicio(){
    if(servicios.length - 1 == this.index){
      this.index=0;
      
    }
    else {
      console.log(servicios.length - 1);
      this.index++;
    }
  };

  ngOnInit() {


  }

}
