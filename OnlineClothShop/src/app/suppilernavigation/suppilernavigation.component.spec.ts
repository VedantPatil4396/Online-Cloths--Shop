import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppilernavigationComponent } from './suppilernavigation.component';

describe('SuppilernavigationComponent', () => {
  let component: SuppilernavigationComponent;
  let fixture: ComponentFixture<SuppilernavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuppilernavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppilernavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
