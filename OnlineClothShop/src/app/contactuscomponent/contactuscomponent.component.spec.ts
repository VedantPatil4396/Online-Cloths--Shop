import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactuscomponentComponent } from './contactuscomponent.component';

describe('ContactuscomponentComponent', () => {
  let component: ContactuscomponentComponent;
  let fixture: ComponentFixture<ContactuscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactuscomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactuscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
