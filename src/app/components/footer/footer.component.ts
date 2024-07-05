import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  isDetailsOpen: boolean = true; // Variable que controla el estado de los detalles

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setDetailsOpenState(event.target.innerWidth);
  }

  private setDetailsOpenState(width: number) {
    this.isDetailsOpen = width > 800;
  }

  constructor() {
    // Inicializar el estado inicial basado en el ancho actual
    this.setDetailsOpenState(window.innerWidth);
  }

  
  scrollToNosotros(event: Event) {
    event.preventDefault(); // Prevent default anchor tag behavior
    const targetElement = document.getElementById('nosotros');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  }
  scrollToServicio(event: Event) {
    event.preventDefault(); // Prevent default anchor tag behavior
    const targetElement = document.getElementById('servicios');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  }
  scrollToContacto(event: Event) {
    event.preventDefault(); // Prevent default anchor tag behavior
    const targetElement = document.getElementById('contacto');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  }
}
