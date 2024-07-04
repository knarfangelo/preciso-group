import { Component } from '@angular/core';
import { NavResponsiveComponent } from '../../nav-responsive/nav-responsive.component';
import { NavegacionComponent } from '../../navegacion/navegacion.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-subservicios-4',
  standalone: true,
  imports: [NavResponsiveComponent, NavegacionComponent, FooterComponent],
  templateUrl: './subservicios-4.component.html',
  styleUrl: './subservicios-4.component.css'
})
export class Subservicios4Component {

}
