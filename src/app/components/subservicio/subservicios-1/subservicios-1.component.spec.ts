import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subservicios1Component } from './subservicios-1.component';

describe('Subservicios1Component', () => {
  let component: Subservicios1Component;
  let fixture: ComponentFixture<Subservicios1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subservicios1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subservicios1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
