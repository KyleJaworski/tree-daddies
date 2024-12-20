import { Component } from '@angular/core';
import { HeroImageContainerComponent } from '../hero-image-container/hero-image-container.component';

@Component({
  selector: 'app-header',
  imports: [HeroImageContainerComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
