import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, Routes, withHashLocation} from '@angular/router';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'components' },
  {
    path: 'components',
    loadChildren: async () => (await import('./components/components.routes')).COMPONENTS_ROUTES
  }
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(ROUTES, withHashLocation())]
};
