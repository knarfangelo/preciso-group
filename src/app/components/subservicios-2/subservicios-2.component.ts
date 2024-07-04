import { Component } from '@angular/core';
import { NavResponsiveComponent } from '../../nav-responsive/nav-responsive.component';
import { NavegacionComponent } from '../../navegacion/navegacion.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-subservicios-2',
  standalone: true,
  imports: [NavResponsiveComponent, NavegacionComponent, FooterComponent,RouterLink],
  templateUrl: './subservicios-2.component.html',
  styleUrl: './subservicios-2.component.css'
})
export class Subservicios2Component {

}
