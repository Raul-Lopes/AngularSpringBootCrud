import { Component } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {
  client: Client = {
    id: 0,
    firstName: '',
    lastName: '',
    emailId: '',
    creditLimit: 0
  };

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  // ngOnInit lifecycle hook (currently empty, as there's no initialization logic needed)
  ngOnInit(): void {
  }

  // Method to save the client by calling the createClient method from the ClientService
  saveClient() {
    this.clientService.createClient(this.client).subscribe({
      next: () => this.goToClientList(),
      error: (err) => console.log(err)
    });
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
