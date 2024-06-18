import { Component } from '@angular/core';
import { ServiciosComponent } from '../servicios/servicios.component';
import { Servicios2Component } from '../servicios2/servicios2.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { FooterComponent } from '../footer/footer.component';
import { GaleriaComponent } from '../galeria/galeria.component';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ServiciosComponent, Servicios2Component, NosotrosComponent,GaleriaComponent,FooterComponent, BlogComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
