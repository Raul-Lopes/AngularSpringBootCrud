// FILE: angular-frontend/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

export const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'create-client', component: CreateClientComponent },
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'update-client/:id', component: UpdateClientComponent },
  { path: 'client-details/:id', component: ClientDetailsComponent }
];
