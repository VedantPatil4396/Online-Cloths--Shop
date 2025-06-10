import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilerlogincomponentComponent } from './suppilerlogincomponent.component';

describe('SuppilerlogincomponentComponent', () => {
  let component: SuppilerlogincomponentComponent;
  let fixture: ComponentFixture<SuppilerlogincomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuppilerlogincomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppilerlogincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
