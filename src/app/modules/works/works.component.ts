import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  works = [
    {
      image: 'https://picsum.photos/310/266',
      company: 'ARH Ikjjp;o.',
      desc: 'Ez egy hosszabb duma is lehe, k,otne, de mi a francos mennykonek kene hogy az legyen',
    },
    {
      image: 'https://picsum.photos/310/266',
      company: 'ARH Inc.',
      desc: 'Ez egy hosszabb duma is lehetne, de mi a francos mennykonek kene hogy az legyen',
    },
    {
      image: 'https://picsum.photos/310/266',
      company: 'ARH Inc.',
      desc: 'Ez egy hosszabb duma is lehetne, de mi a francos mennykonek kene hogy az legyen',
    },
    {
      image: 'https://picsum.photos/310/266',
      company: 'ARH Inc.',
      desc: 'Ez egy hosszabb duma is lehetne, de mi a francos mennykonek kene hogy az legyen',
    },
  ];
}
