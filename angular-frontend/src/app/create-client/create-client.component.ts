import { Component, OnInit } from '@angular/core'; // Import necessary Angular decorators
import { ClientsBean } from '../clientsBean'; // Import the client model (ClientsBean)
import { ClientService } from '../client.service'; // Import the service that interacts with the backend
import { Router } from '@angular/router'; // Import Router for navigation between routes
import { CurrencyPipe } from '@angular/common'; // Import CurrencyPipe for formatting currency values

@Component({
  selector: 'app-create-client', // Defines the tag that will be used to render the component in HTML
  templateUrl: './create-client.component.html', // Specifies the HTML template for this component
  styleUrls: ['./create-client.component.css'], // Specifies the CSS file(s) for styling this component
  providers: [CurrencyPipe] // Provide CurrencyPipe in the component to format currency values
})

export class CreateClientComponent implements OnInit {

  client: ClientsBean = new ClientsBean(); // Initialize the client object (new instance of ClientsBean)

  constructor(
    private clientService: ClientService, // Inject ClientService to make API requests
    private router: Router, // Inject Router to navigate between pages
    private currencyPipe: CurrencyPipe // Inject CurrencyPipe for formatting currency
  ) {}

  // ngOnInit lifecycle hook (currently empty, as there's no initialization logic needed)
  ngOnInit(): void {
  }

  // Method to save the client by calling the createClient method from the ClientService
  saveClient() {
    this.clientService.createClient(this.client).subscribe(data => {
      console.log(data); // Log the response from the backend (e.g., newly created client)
      this.goToClientList(); // Navigate to the client list after successful client creation
    },
    error => console.log(error)); // Log any errors if the API request fails
  }

  // Navigate to the client list page
  goToClientList() {
    this.router.navigate(['/clients']); // Redirect to the 'clients' route (client list page)
  }

  // Handle form submission
  onSubmit() {
    console.log(this.client); // Log the current client data (for debugging purposes)
    this.saveClient(); // Call the saveClient method to send the data to the backend
  }
}
