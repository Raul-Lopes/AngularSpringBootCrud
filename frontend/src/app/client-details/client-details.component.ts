// Importing necessary modules and classes from Angular core, router, and services.
import { Component, OnInit, signal, computed } from '@angular/core';
import { Client } from '../client.model'; // Importing the model class representing a client.
import { ActivatedRoute } from '@angular/router'; // Provides access to route parameters.
import { ClientService } from '../client.service'; // Service for interacting with client data.
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})

export class ClientDetailsComponent implements OnInit {
  id = signal<number>(0); // Stores the client ID retrieved from the route parameters.
  firstName = signal<string>('');
  lastName = signal<string>('');
  emailId = signal<string>('');
  creditLimit = signal<number>(0);
  isLoading = signal<boolean>(false);

  // Computed signal for the full client object
  client = computed<Client>(() => ({
    id: this.id(),
    firstName: this.firstName(),
    lastName: this.lastName(),
    emailId: this.emailId(),
    creditLimit: this.creditLimit()
  }));

  // Computed signal for full name
  fullName = computed<string>(() => `${this.firstName()} ${this.lastName()}`);

  // Constructor injecting the required services for route handling and data retrieval.
  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) { }

  /**
   * Lifecycle hook called once after the component is initialized.
   */
  ngOnInit(): void {
    // Retrieves the 'id' parameter from the route snapshot.
    const routeId = this.route.snapshot.params['id'];
    this.id.set(+routeId);
    this.isLoading.set(true);
    
    this.clientService.getClientById(this.id()).subscribe({
      next: (data) => {
        this.firstName.set(data.firstName);
        this.lastName.set(data.lastName);
        this.emailId.set(data.emailId);
        this.creditLimit.set(data.creditLimit);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching client details:', err);
        this.isLoading.set(false);
      }
    });
  }
}
