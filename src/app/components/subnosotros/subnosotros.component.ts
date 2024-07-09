import { Component } from '@angular/core';
import { NavegacionComponent } from "../../navegacion/navegacion.component";
import { NavResponsiveComponent } from "../../nav-responsive/nav-responsive.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-subnosotros',
    standalone: true,
    templateUrl: './subnosotros.component.html',
    styleUrl: './subnosotros.component.css',
    imports: [NavegacionComponent, NavResponsiveComponent, FooterComponent]
})
export class SubnosotrosComponent {

}
