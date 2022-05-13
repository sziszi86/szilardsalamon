import { Routes } from '@angular/router';
import { Error404Component } from './core/components/error-pages/404/404.component';
import { AboutComponent } from './modules/about/about.component';
import { WorksComponent } from './modules/works/works.component';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '404',
        component: Error404Component,
      },
      {
        path: 'resume',
        component: AboutComponent,
      },
      {
        path: 'portfolio',
        component: WorksComponent,
      },
      {
        path: '**',
        redirectTo: '404',
      },
    ],
  },
];
