import { Component } from '@angular/core';
import { BuscadorComponent } from "../components/buscador/buscador.component";

@Component({
    selector: 'app-navegacion',
    standalone: true,
    templateUrl: './navegacion.component.html',
    styleUrl: './navegacion.component.css',
    imports: [BuscadorComponent]
})
export class NavegacionComponent {

}
