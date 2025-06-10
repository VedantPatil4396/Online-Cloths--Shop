import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartcomponentComponent } from './shoppingcartcomponent.component';

describe('ShoppingcartcomponentComponent', () => {
  let component: ShoppingcartcomponentComponent;
  let fixture: ComponentFixture<ShoppingcartcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingcartcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingcartcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
