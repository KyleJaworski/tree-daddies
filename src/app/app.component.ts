import { Component } from '@angular/core';
import { MainContainerComponent } from './main-container/main-container.component';
import { StickyBannerComponent } from './sticky-banner/sticky-banner.component';

@Component({
  selector: 'app-root',
  imports: [ MainContainerComponent, StickyBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tree-daddies';
}
