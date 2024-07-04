import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subservicios6Component } from './subservicios-6.component';

describe('Subservicios6Component', () => {
  let component: Subservicios6Component;
  let fixture: ComponentFixture<Subservicios6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subservicios6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subservicios6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
