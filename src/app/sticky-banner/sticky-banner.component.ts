import { Component } from '@angular/core';
import { Menubar } from 'primeng/menubar';

import { RouterModule } from '@angular/router'; // Import RouterModule


@Component({
  selector: 'app-sticky-banner',
  imports: [ RouterModule, Menubar],
  templateUrl: './sticky-banner.component.html',
  styleUrl: './sticky-banner.component.scss'
})
export class StickyBannerComponent {


  items = [
    { label: 'About Us', fragment: 'about', icon: 'pi pi-info-circle' },
    { label: 'Services', fragment: 'services', icon: 'pi pi-cog' },
    { label: 'Contact', fragment: 'contact', icon: 'pi pi-envelope' },
    { label: 'Book', fragment: 'book', icon: 'pi pi-calendar-plus' },
    { label: 'FAQ', fragment: 'faq', icon: 'pi pi-question-circle' }
];
}
