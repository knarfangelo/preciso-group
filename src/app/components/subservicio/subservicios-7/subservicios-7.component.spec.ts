import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subservicios7Component } from './subservicios-7.component';

describe('Subservicios7Component', () => {
  let component: Subservicios7Component;
  let fixture: ComponentFixture<Subservicios7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subservicios7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subservicios7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
