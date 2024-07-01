import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavResponsiveComponent } from './nav-responsive.component';

describe('NavResponsiveComponent', () => {
  let component: NavResponsiveComponent;
  let fixture: ComponentFixture<NavResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavResponsiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
