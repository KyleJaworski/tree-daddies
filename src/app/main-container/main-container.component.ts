import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
@Component({
  selector: 'app-main-container',
  imports: [ HeaderComponent, ContentComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
