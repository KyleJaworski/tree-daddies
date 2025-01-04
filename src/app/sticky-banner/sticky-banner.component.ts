import { Component } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-sticky-banner',
  imports: [
    RouterModule,
    Menubar,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './sticky-banner.component.html',
  styleUrl: './sticky-banner.component.scss',
})
export class StickyBannerComponent {
  deskTopItems: MenuItem[] = [
    { label: 'About Us', icon: 'pi pi-info-circle', routerLink: '' },
    { label: 'Services', icon: 'pi pi-cog', routerLink: '' },
    { label: 'Contact', icon: 'pi pi-envelope', routerLink: '' },
    { label: 'Book', icon: 'pi pi-calendar-plus', routerLink: '' },
    { label: 'FAQ', icon: 'pi pi-question-circle', routerLink: '' },
  ];

  mobileItems = [
    { label: 'About Us', icon: 'info', routerLink: '' },
    { label: 'Services', icon: 'carpenter', routerLink: '' },
    { label: 'Contact', icon: 'contact_phone', routerLink: '' },
    { label: 'Book', icon: 'event_upcoming', routerLink: '' },
    { label: 'FAQ', icon: 'help', routerLink: '' },
  ];

  isMobile: boolean = false;
  constructor(private deviceService: DeviceDetectorService) {
    this.isMobile = this.deviceService.isMobile();
  }
}
