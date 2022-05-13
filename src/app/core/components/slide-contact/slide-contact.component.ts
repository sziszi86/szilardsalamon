import { trigger, transition, animate, style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-contact',
  templateUrl: './slide-contact.component.html',
  styleUrls: ['./slide-contact.component.scss'],
  animations: [
    trigger('slideInOut', [transition(':enter', [style({ opacity: '0' }), animate('550ms ease-out', style({ opacity: '1' }))])]),
  ],
})
export class SlideContactComponent {
  ImagePath = '../../../../assets/images/profil.jpg';

  ImageClick(): void {
    if (this.ImagePath.includes('../../../../assets/images/profil2.jpg')) {
      this.ImagePath = '../../../../assets/images/profil.jpg';
    } else {
      this.ImagePath = '../../../../assets/images/profil2.jpg';
    }
  }
}
