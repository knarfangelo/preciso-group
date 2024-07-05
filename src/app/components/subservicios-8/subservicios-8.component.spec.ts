import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subservicios8Component } from './subservicios-8.component';

describe('Subservicios8Component', () => {
  let component: Subservicios8Component;
  let fixture: ComponentFixture<Subservicios8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subservicios8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subservicios8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
