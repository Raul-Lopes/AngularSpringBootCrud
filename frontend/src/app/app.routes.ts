import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'clients',
    loadComponent: () => import('./client-list/client-list.component').then(m => m.ClientListComponent)
  },
  {
    path: 'create-client',
    loadComponent: () => import('./create-client/create-client.component').then(m => m.CreateClientComponent)
  },
  {
    path: 'update-client/:id',
    loadComponent: () => import('./update-client/update-client.component').then(m => m.UpdateClientComponent)
  },
  {
    path: 'client-details/:id',
    loadComponent: () => import('./client-details/client-details.component').then(m => m.ClientDetailsComponent)
  },
  { path: '', redirectTo: 'clients', pathMatch: 'full' }
];
