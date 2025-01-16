// Importing necessary Angular modules and components
import { BrowserModule } from '@angular/platform-browser'; // Required for running the application in the browser
import { NgModule } from '@angular/core'; // Core module for Angular applications
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // HTTP client related imports for making API calls
import { AppRoutingModule } from './app-routing.module'; // Import the routing configuration for the app
import { AppComponent } from './app.component'; // Root component of the application
import { ClientListComponent } from './client-list/client-list.component'; // Component for displaying the list of clients
import { CreateClientComponent } from './create-client/create-client.component'; // Component for creating a new client
import { FormsModule } from '@angular/forms'; // Module to handle forms, necessary for binding input fields and form submission
import { UpdateClientComponent } from './update-client/update-client.component'; // Component for updating an existing client
import { ClientDetailsComponent } from './client-details/client-details.component'; // Component for viewing details of a specific client

@NgModule({
    // Declaring the components that belong to this module
    declarations: [
        AppComponent,
        ClientListComponent,
        CreateClientComponent,
        UpdateClientComponent,
        ClientDetailsComponent
    ],
    // Setting up the root component that will be bootstrapped on application launch
    bootstrap: [AppComponent],
    
    // Importing necessary modules to be available throughout the application
    imports: [
        BrowserModule, // Required for web-based applications
        AppRoutingModule, // Includes routing configuration for navigating between views
        FormsModule // Required for handling template-driven forms
    ],
    
    // Registering providers for services like HTTP client configuration
    providers: [
        provideHttpClient(withInterceptorsFromDi()) // Configures HTTP client with interceptors injected from DI (dependency injection)
    ]
})
export class AppModule { }
