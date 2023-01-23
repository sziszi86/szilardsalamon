import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  educations: any = [
    {
      year: '2005 - 2007',
      company: 'Budapesti Kommunikációs Főiskola',
      desc:
        'Mindig is érdekelt a reklám szakma és a kreativitás, ezért Budapestre költöztem. ' +
        'A főiskolán képeztem magam tovább, ahol a szakdolgozatom témájának “Reklám szerepe a webdesignban” címet választottam. I' +
        'tt már tudtam, hogy a Front-end lesz a szakterületem',
    },
    {
      year: '2003 - 2005',
      company: 'Sárvári Tinódi Sebestyén Gimnázium',
      desc: 'Miután a programozás alapjait magamba szívtam, úgy döntöttem, hogy inkább gimnáziumban szeretnék érettségit szerezni.',
    },
    {
      year: '2001 - 2003',
      company: 'III. Béla Szakközépiskola, Szentgotthárd',
      desc: 'Gyerekkorom óta érdekelt a programozás, ezért választottam a programozói szakot/osztályt.',
    },
  ];
  jobs: any = [
    {
      year: '2021 - 2022',
      company: 'TRENDENCY ONLINE ZRT. / MEDIAWORKS',
      titulus: 'SITEBUILDER',
      desc:
        'A Mediaworks azt a célt tűzte ki, hogy a legtöbb portált átszervezi Wordpressről Angular alapú egyedi CMS-el ellátott oldallá. ' +
        'Mediaworks a Trendencyt bízta meg a feladattal így átkerültem oda, ' +
        'hiszen a munka java ott történt. Itt végre Sitebuilder lettem, ' +
        'mert abban vagyok otthon igazán.',
    },
    {
      year: '2019 - 2021',
      company: 'EASYWAY SYSTEM',
      titulus: 'Frontend developer',
      desc:
        'Elsősorban hazai bankoknak, közlekedési vállalatoknak fejtesztettünk\n' +
        'web alapú alkalmazásokat. Itt kezdtem el ismerkedni az Angular alapjaival és\n' +
        'hozzá tartozó framework rendszerekkel, mint például az Angular Material.',
    },
    {
      year: '2014 - 2019',
      company: 'ADAPTIVE RECOGNITION - ARH ZRT.',
      titulus: 'Frontend fejlesztő',
      desc:
        'Nemzetközileg elismert vezető technológiai cégről van szó, ' +
        'ahol a cég anya oldalain kivül számos microsite született az írányításom alatt.',
    },
    {
      year: '2012 - 2014',
      company: 'Greenroom',
      titulus: 'Frontend fejlesztő',
      desc: 'Karrierem során itt tanultam a legtöbbet. Kollégáimmal a legmodernebb webes eszközökkel dolgoztunk nagy projekteken.',
    },
    {
      year: '2010 - 2012',
      company: 'HOTEL CARAMELL Bükfürdő',
      titulus: 'WEBFEJLESZTO / DTP GRAFIKUS',
      desc: 'A cég weboldala egyedi template alapján készült CMS rendszerre. Itt DTP nyomdai grafikákat készítettem prémium lapokba.',
    },
    {
      year: '2007 - 2010',
      company: 'HINORA GROUP',
      titulus: 'Webfejlesztő',
      desc:
        'Akkoriban divatos Adobe Flash bannerek készítése mellett meglévő és új ' +
        'ügyfelek weboldalainak karbantartása, létrehozása volt a feladatom.',
    },
  ];
  skills: any = [
    { name: 'HTML5', percent: 89 },
    { name: 'CSS3 / SASS / Tailwind', percent: 91 },
    { name: 'Bootstrap', percent: 87 },
    { name: 'Next.js', percent: 60 },
    { name: 'Angular', percent: 20 },
    { name: 'Javascript', percent: 58 },
    { name: 'Jquery', percent: 50 },
    { name: 'Wordpress', percent: 60 },
    { name: 'Joomla!', percent: 76 },
  ];
}
