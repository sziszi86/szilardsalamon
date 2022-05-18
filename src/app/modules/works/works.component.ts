import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent {
  works = [
    {
      image: '../../assets/images/works/dijlovasok.jpg',
      company: 'Magyar Lovas Szövetség Dijlovagló Szakág',
      desc: 'A Magyar Díjlovas sport legfontosabb eseményeit, híreit találhatjuk meg.',
      slug: 'https://dijlovasok.hu/',
    },
    {
      image: '../../assets/images/works/metropol.jpg',
      company: 'Metropol.',
      desc: 'A KESMA csoport több portálját csapatban sitebuldeltük le. Angular alapokra épül a legújabb változat.',
      slug: 'https://metropol.hu/',
    },
    {
      image: '../../assets/images/works/molgroup.jpg',
      company: 'Mol Group',
      desc: 'A cégcsoport éves beszámolóit és eredményeit közli a site.',
      slug: 'https://molgroup.info/hu',
    },
    {
      image: '../../assets/images/works/arh.jpg',
      company: 'ARH Inc.',
      desc: 'Hazánkban VÉDA rendszerként ismert rendszer gyártója többek között, de inkább nemketközi fronton sikeres a cég.',
      slug: 'https://arh.hu/',
    },
    {
      image: '../../assets/images/works/humda.jpg',
      company: 'HUMDA Hungarian Motorsport and Green Mobility Development Agency.',
      desc:
        'Magyar Autósport szövetség weboldala már adott volt és' +
        ' annak a mintájára csak a css segítségével át kellet szabnom az oldal a Green verzióra',
      slug: 'https://humda.hu',
    },
    {
      image: '../../assets/images/works/amethyst.jpg',
      company: 'Amethyst Interior',
      desc: 'Belsőépítészeti tervezés és kivitelezés lebonyolítása. Számos sikeres projekt van a háta mögött. Ezt hirdeti a site.',
      slug: 'https://www.amethystinterior.hu/',
    },
    {
      image: '../../assets/images/works/carmen.jpg',
      company: 'Carmen Software',
      desc: 'Rendszám olvasó szoftver parallaxos szemléltető microsite',
      slug: 'https://www.carmen.hu/',
    },
  ];
}
