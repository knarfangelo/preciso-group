import { Component } from '@angular/core';
import { NavResponsiveComponent } from '../../../nav-responsive/nav-responsive.component';
import { NavegacionComponent } from '../../../navegacion/navegacion.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-subservicios-3',
  standalone: true,
  imports: [NavResponsiveComponent, NavegacionComponent, FooterComponent],
  templateUrl: './subservicios-3.component.html',
  styleUrl: './subservicios-3.component.css'
})
export class Subservicios3Component {

}
