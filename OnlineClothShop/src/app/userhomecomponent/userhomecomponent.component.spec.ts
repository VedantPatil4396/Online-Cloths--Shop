import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhomecomponentComponent } from './userhomecomponent.component';

describe('UserhomecomponentComponent', () => {
  let component: UserhomecomponentComponent;
  let fixture: ComponentFixture<UserhomecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserhomecomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserhomecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
