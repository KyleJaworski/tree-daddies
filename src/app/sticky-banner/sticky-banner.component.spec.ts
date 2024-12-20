import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyBannerComponent } from './sticky-banner.component';

describe('StickyBannerComponent', () => {
  let component: StickyBannerComponent;
  let fixture: ComponentFixture<StickyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickyBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
