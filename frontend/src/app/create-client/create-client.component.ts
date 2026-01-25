import { Component, signal, computed } from '@angular/core';
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
  firstName = signal<string>('');
  lastName = signal<string>('');
  emailId = signal<string>('');
  creditLimit = signal<number>(0);
  isSubmitting = signal<boolean>(false);

  // Computed signal for the client object
  client = computed<Client>(() => ({
    id: 0,
    firstName: this.firstName(),
    lastName: this.lastName(),
    emailId: this.emailId(),
    creditLimit: this.creditLimit()
  }));

  // Computed signal to check if form is valid
  isFormValid = computed<boolean>(() => {
    return this.firstName().trim() !== '' && 
           this.lastName().trim() !== '' && 
           this.emailId().trim() !== '' && 
           this.creditLimit() >= 0;
  });

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  // Method to save the client by calling the createClient method from the ClientService
  saveClient() {
    if (!this.isFormValid()) {
      return;
    }

    this.isSubmitting.set(true);
    this.clientService.createClient(this.client()).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.goToClientList();
      },
      error: (err) => {
        console.error('Error creating client:', err);
        this.isSubmitting.set(false);
      }
    });
  }

  // Navigate to the client list page
  goToClientList() {
    this.router.navigate(['/clients']); // Redirect to the 'clients' route (client list page)
  }

  // Handle form submission
  onSubmit() {
    //console.log(this.client());
    this.saveClient(); // Call the saveClient method to send the data to the backend
  }
}
