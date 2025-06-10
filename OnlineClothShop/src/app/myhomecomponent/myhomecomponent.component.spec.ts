import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhomecomponentComponent } from './myhomecomponent.component';

describe('MyhomecomponentComponent', () => {
  let component: MyhomecomponentComponent;
  let fixture: ComponentFixture<MyhomecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyhomecomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyhomecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
