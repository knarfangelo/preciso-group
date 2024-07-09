import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  searchControl = new FormControl();
  options: { name: string, path: string }[] = [
    { name: 'SERVICIO SISTEMA DE UTILIZACIÓN DE MEDIA Y BAJA TENSIÓN', path: 'subservicios1' },
    { name: 'SERVICIO MANTENIMIENTO DE SUBESTACIONES ELÉCTRICAS', path: 'subservicios2' },
    { name: 'SERVICIOS ELÉCTRICOS DE BAJA TENSIÓN', path: 'subservicios3' },
    { name: 'SERVICIO TENDIDO DE REDES PARA HABILITACIONES URBANAS', path: 'subservicios4' },
    { name: 'SERVICIO MANTENIMIENTO DE TABLEROS ELÉCTRICOS', path: 'subservicios5' },
    { name: 'SERVICIO POZO A TIERRA', path: 'subservicios6' },
    { name: 'SOLUCIONES PARA MOVILIDAD ELÉCTRICA', path: 'subservicios7' },
    { name: 'OTROS SERVICIOS', path: 'subservicios8' }
  ];
  filteredOptions: { name: string, path: string }[] = [];
  isInputFocused: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(value => {
      this.filteredOptions = this._filter(value);
    });
  }

  private _filter(value: string): { name: string, path: string }[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  getRouterLink(option: { name: string, path: string }): string[] {
    return [option.path];
  }

  onInputBlur(event: FocusEvent) {
    setTimeout(() => {
      this.isInputFocused = false;
      this.filteredOptions = [];
    }, 200); // Delay to allow click event to process
  }

  onContainerClick(event: MouseEvent) {
    this.isInputFocused = true;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!event.target || !(event.target as HTMLElement).closest('.search-container')) {
      this.isInputFocused = false;
      this.filteredOptions = [];
    }
  }

  trackByFn(index: number, item: { name: string, path: string }) {
    return item.path;
  }
}