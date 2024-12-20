import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageContainerComponent } from './hero-image-container.component';

describe('HeroImageContainerComponent', () => {
  let component: HeroImageContainerComponent;
  let fixture: ComponentFixture<HeroImageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroImageContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
