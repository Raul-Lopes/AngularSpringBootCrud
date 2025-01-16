// Importing necessary modules and classes from Angular core, router, and services.
import { Component, OnInit } from '@angular/core';
import { ClientsBean } from '../clientsBean'; // Importing the model class representing a client.
import { ActivatedRoute } from '@angular/router'; // Provides access to route parameters.
import { ClientService } from '../client.service'; // Service for interacting with client data.

@Component({
  selector: 'app-client-details', // Specifies the HTML tag name for this component.
  templateUrl: './client-details.component.html', // Path to the HTML template for this component.
  styleUrls: ['./client-details.component.css'] // Path to the CSS styles for this component.
})

export class ClientDetailsComponent implements OnInit {

  id: number; // Stores the client ID retrieved from the route parameters.
  client: ClientsBean; // Represents the client data to be displayed.

  // Constructor injecting the required services for route handling and data retrieval.
  constructor(private route: ActivatedRoute, private employeService: ClientService) { }

  /**
   * Lifecycle hook called once after the component is initialized.
   */
  ngOnInit(): void {
    // Retrieves the 'id' parameter from the route snapshot.
    this.id = this.route.snapshot.params['id'];

    // Initializes the `client` object to an empty `ClientsBean` instance.
    this.client = new ClientsBean();

    // Calls the service method to fetch the client data by ID and subscribes to the response.
    this.employeService.getClientById(this.id).subscribe(data => {
      this.client = data; // Assigns the retrieved data to the `client` property.
    });
  }
}
