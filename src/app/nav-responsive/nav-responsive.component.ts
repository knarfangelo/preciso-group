import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-responsive',
  standalone: true,
  imports: [],
  templateUrl: './nav-responsive.component.html',
  styleUrl: './nav-responsive.component.css'
})
export class NavResponsiveComponent {
  isOpen = false;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
  closeNavbar() {
    this.isOpen = false;
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
