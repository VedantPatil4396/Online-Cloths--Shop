import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacypolicycomponentComponent } from './privacypolicycomponent.component';

describe('PrivacypolicycomponentComponent', () => {
  let component: PrivacypolicycomponentComponent;
  let fixture: ComponentFixture<PrivacypolicycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivacypolicycomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacypolicycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
