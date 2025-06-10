import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernavigationcomponentComponent } from './usernavigationcomponent.component';

describe('UsernavigationcomponentComponent', () => {
  let component: UsernavigationcomponentComponent;
  let fixture: ComponentFixture<UsernavigationcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsernavigationcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernavigationcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
