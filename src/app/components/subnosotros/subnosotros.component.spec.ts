import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnosotrosComponent } from './subnosotros.component';

describe('SubnosotrosComponent', () => {
  let component: SubnosotrosComponent;
  let fixture: ComponentFixture<SubnosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubnosotrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubnosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
