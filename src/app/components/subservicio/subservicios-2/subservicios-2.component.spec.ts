import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subservicios2Component } from './subservicios-2.component';

describe('Subservicios2Component', () => {
  let component: Subservicios2Component;
  let fixture: ComponentFixture<Subservicios2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subservicios2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subservicios2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
