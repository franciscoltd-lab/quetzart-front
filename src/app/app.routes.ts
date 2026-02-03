import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/tabs/tabs.page').then(m => m.TabsPage),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage),
  },

  {
    path: 'map',
    loadComponent: () =>
      import('./pages/map/map.page').then(m => m.MapPage),
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.page').then(m => m.ProfilePage),
  }
];
