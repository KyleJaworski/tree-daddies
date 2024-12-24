import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-main-container',
  imports: [ HeaderComponent, ContentComponent,ContactComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
