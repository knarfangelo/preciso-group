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
}
