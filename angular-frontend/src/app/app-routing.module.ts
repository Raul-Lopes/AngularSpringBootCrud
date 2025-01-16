// Importing necessary modules and components for routing.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // Angular's router modules for defining routes.
import { ClientListComponent } from './client-list/client-list.component'; // Component for displaying the list of clients.
import { CreateClientComponent } from './create-client/create-client.component'; // Component for creating a new client.
import { UpdateClientComponent } from './update-client/update-client.component'; // Component for updating an existing client.
import { ClientDetailsComponent } from './client-details/client-details.component'; // Component for viewing client details.

// Defining the application's route configuration.
const routes: Routes = [
  { path: 'clients', component: ClientListComponent }, 
  // Route for the client list view. Navigates to ClientListComponent.

  { path: 'create-client', component: CreateClientComponent }, 
  // Route for the create client page. Navigates to CreateClientComponent.

  { path: '', redirectTo: 'clients', pathMatch: 'full' }, 
  // Redirects the base path ('') to the 'clients' path. The `pathMatch: 'full'` ensures a full match is required for redirection.

  { path: 'update-client/:id', component: UpdateClientComponent }, 
  // Route for updating a specific client. Includes a route parameter `id` to identify the client.

  { path: 'client-details/:id', component: ClientDetailsComponent } 
  // Route for viewing details of a specific client. Includes a route parameter `id`.
];

// The AppRoutingModule class defines the routing module for the application.
@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  // Configures the router with the defined routes using `forRoot`.

  exports: [RouterModule] 
  // Exports RouterModule to make the configured routes available throughout the application.
})
export class AppRoutingModule { }

