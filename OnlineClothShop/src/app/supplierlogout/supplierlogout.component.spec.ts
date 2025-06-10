import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierlogoutComponent } from './supplierlogout.component';

describe('SupplierlogoutComponent', () => {
  let component: SupplierlogoutComponent;
  let fixture: ComponentFixture<SupplierlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierlogoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
