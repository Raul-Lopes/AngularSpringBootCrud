import { Component, OnInit } from '@angular/core'; // Importing necessary Angular decorators and lifecycle hooks
import { ClientsBean } from '../clientsBean'; // Importing the ClientsBean model to type the client data
import { ClientService } from '../client.service'; // Importing the ClientService to fetch and manage clients
import { Router } from '@angular/router'; // Importing the Router to handle navigation

@Component({
  selector: 'app-client-list', // Defining the component selector to be used in the HTML template
  templateUrl: './client-list.component.html', // Linking the HTML template for this component
  styleUrls: ['./client-list.component.css'] // Linking the CSS for this component
})
export class ClientListComponent implements OnInit {

  // Defining a property to store the list of clients
  clients: ClientsBean[];

  // Constructor to inject ClientService and Router into the component
  constructor(private clientService: ClientService,
    private router: Router) { }

  // ngOnInit lifecycle hook to call the getClients method once the component is initialized
  ngOnInit(): void {
    this.getClients(); // Fetching the list of clients when the component initializes
  }

  // Private method to fetch the list of clients from the ClientService
  private getClients() {
    this.clientService.getClientsList().subscribe(data => {
      this.clients = data; // Storing the fetched clients data in the clients array
    });
  }

  // Method to navigate to the client details page when a user clicks on a client
  clientDetails(id: number) {
    this.router.navigate(['client-details', id]); // Navigating to the client details page with the client id
  }

  // Method to navigate to the update client page when a user clicks on the update button
  updateClient(id: number) {
    this.router.navigate(['update-client', id]); // Navigating to the update client page with the client id
  }

  // Method to delete a client when a user clicks the delete button
  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(data => {
      // After the client is deleted, refresh the list of clients
      this.getClients();
    });
  }
}
