import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subservicios4Component } from './subservicios-4.component';

describe('Subservicios4Component', () => {
  let component: Subservicios4Component;
  let fixture: ComponentFixture<Subservicios4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subservicios4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subservicios4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
