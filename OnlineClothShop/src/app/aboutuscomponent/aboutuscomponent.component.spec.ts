import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutuscomponentComponent } from './aboutuscomponent.component';

describe('AboutuscomponentComponent', () => {
  let component: AboutuscomponentComponent;
  let fixture: ComponentFixture<AboutuscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutuscomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutuscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
