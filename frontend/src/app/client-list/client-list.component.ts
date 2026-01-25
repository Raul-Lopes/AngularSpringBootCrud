// FILE: frontend/src/app/client-list/client-list.component.ts
import { Component, OnInit, signal, effect } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyPipe],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients = signal<Client[]>([]);
  isLoading = signal<boolean>(false);

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {
    // Effect to log when clients change (optional, for debugging)
    effect(() => {
      const currentClients = this.clients();
      //console.log(`Clients updated: ${currentClients.length} clients loaded`);
    });
  }

  ngOnInit(): void {
    this.getClients(); // Fetching the list of clients when the component initializes
  }

  // Private method to fetch the list of clients from the ClientService
  private getClients() {
    this.isLoading.set(true);
    this.clientService.getClientsList().subscribe({
      next: (data) => {
        this.clients.set(data); // Storing the fetched clients data in the clients signal
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching clients:', err);
        this.isLoading.set(false);
      }
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
    this.clientService.deleteClient(id).subscribe({
      next: () => {
        this.getClients();
      },
      error: (err) => {
        console.error('Error deleting client:', err);
      }
    });
  }
}
