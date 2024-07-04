import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subservicios5Component } from './subservicios-5.component';

describe('Subservicios5Component', () => {
  let component: Subservicios5Component;
  let fixture: ComponentFixture<Subservicios5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subservicios5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subservicios5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
