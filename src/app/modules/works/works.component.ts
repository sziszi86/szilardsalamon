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
      company: 'Metropol.hu',
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
    {
      image: '../../assets/images/works/eskuvo.jpg',
      company: 'Esküvő a Balatonon',
      desc: 'Rezdenyvényszervező cég, mely a Balaton partján, szervezi meg az ügyfél esküvőjét.',
      slug: 'https://eskuvoabalatonon.hu/',
    },
    {
      image: '../../assets/images/works/investline.jpg',
      company: 'Investline Holding Kft.',
      desc: 'Cég fő profilja az ingatlan beruházás, generál-kivitelezés, ingatlan hasznosítás.',
      slug: 'https://investline.hu/',
    },
    {
      image: '../../assets/images/works/intellio.jpg',
      company: 'Intellio Zrt.',
      desc: 'Videókamerás rendszereket fejlesztenek. Stadionok, parkok és számos köztér az Ő kameráikkal üzemel.',
      slug: 'https://intellio.hu/hu/',
    },
    {
      image: '../../assets/images/works/ohegy.jpg',
      company: 'Óhegy Étterem',
      desc: 'Budapest 22. kerületében található ez az impozáns vendéglő.',
      slug: 'http://ohegyetterem.hu/',
    },
    {
      image: '../../assets/images/works/spiritofnature.jpg',
      company: 'Spirit Of Nature',
      desc: 'Prémium lótápot forgalmazó cég, mely főként külfölre szállít állateledelt.',
      slug: 'http://www.spiritofnature.hu/',
    },
    {
      image: '../../assets/images/works/palacepoker.jpg',
      company: 'Palace Poker Szombathely',
      desc: 'Nagyon igényes póker klubról van szó, amelyből hazánkban csak pár maradt. Az oldal nem mai darab, de még működik.',
      slug: 'http://palace-poker.hu/',
    },
    {
      image: '../../assets/images/works/toparthotel.jpg',
      company: 'Tópart Hotel Balatonvilágos',
      desc: 'Balaton parti szálloda. Az oldalt egy volt barátom segítségével hoztuk létre.',
      slug: 'https://topart-hotel.hu/',
    },
  ];
}
