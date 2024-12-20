import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero-image-container',
  imports: [GalleriaModule,CommonModule], 
  templateUrl: './hero-image-container.component.html',
  styleUrl: './hero-image-container.component.scss',
})
export class HeroImageContainerComponent {

  images = [
    { src: 'assets/tree-one.jpg', alt: 'First slide' },
    {src: 'assets/tree-three.jpg', alt: 'Third slide' },
  ];

  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
    },
    {
        breakpoint: '768px',
        numVisible: 2,
    },
    {
        breakpoint: '560px',
        numVisible: 1,
    }
];

}
