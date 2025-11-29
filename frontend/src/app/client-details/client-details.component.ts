// Importing necessary modules and classes from Angular core, router, and services.
import { Component, OnInit } from '@angular/core';
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
  id!: number; // Stores the client ID retrieved from the route parameters.
  client: Client = {
    id: 0,
    firstName: '',
    lastName: '',
    emailId: '',
    creditLimit: 0
  };

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
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe(data => {
      this.client = data;
    });
  }
}
