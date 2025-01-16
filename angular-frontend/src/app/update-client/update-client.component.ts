import { Component, OnInit } from '@angular/core'; // Import Angular decorators
import { ClientService } from '../client.service'; // Import the service that interacts with the backend
import { ClientsBean } from '../clientsBean'; // Import the client model (ClientsBean)
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute for route parameters and Router for navigation

@Component({
  selector: 'app-update-client', // Defines the HTML tag used for this component
  templateUrl: './update-client.component.html', // Points to the template file for this component
  styleUrls: ['./update-client.component.css'] // Specifies the CSS file for styling this component
})

export class UpdateClientComponent implements OnInit {

  id: number; // The ID of the client being updated
  client: ClientsBean = new ClientsBean(); // Client object initialized as a new instance of ClientsBean

  constructor(
    private clientService: ClientService, // Inject ClientService to interact with the API
    private route: ActivatedRoute, // Inject ActivatedRoute to get route parameters (client ID)
    private router: Router // Inject Router to navigate between routes
  ) { }

  // ngOnInit lifecycle hook, called when the component is initialized
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Get the 'id' from the route parameters

    // Fetch the client data using the ID and populate the form fields
    this.clientService.getClientById(this.id).subscribe(data => {
      this.client = data; // Assign the retrieved data to the client object
    }, error => console.log(error)); // Handle any errors (e.g., client not found)
  }

  // onSubmit method called when the form is submitted
  onSubmit() {
    // Call updateClient from the ClientService to update the client details
    this.clientService.updateClient(this.id, this.client).subscribe(data => {
      this.goToClientList(); // Navigate to the client list after a successful update
    },
    error => console.log(error)); // Handle errors
  }

  // Navigate back to the client list page
  goToClientList() {
    this.router.navigate(['/clients']); // Redirect to the 'clients' route (client list page)
  }
}
