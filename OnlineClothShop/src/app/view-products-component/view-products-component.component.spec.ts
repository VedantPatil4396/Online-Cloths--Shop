import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductsComponentComponent } from './view-products-component.component';

describe('ViewProductsComponentComponent', () => {
  let component: ViewProductsComponentComponent;
  let fixture: ComponentFixture<ViewProductsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewProductsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
