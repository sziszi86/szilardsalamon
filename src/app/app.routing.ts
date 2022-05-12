import { Routes } from '@angular/router';
import { Error404Component } from './core/components/error-pages/404/404.component';

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
        path: '**',
        redirectTo: '404',
      },
    ],
  },
];
