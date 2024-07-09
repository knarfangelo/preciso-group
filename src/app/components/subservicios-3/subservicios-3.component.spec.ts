import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subservicios3Component } from './subservicios-3.component';

describe('Subservicios3Component', () => {
  let component: Subservicios3Component;
  let fixture: ComponentFixture<Subservicios3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subservicios3Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Subservicios3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
