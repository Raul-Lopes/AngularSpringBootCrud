// FILE: angular-frontend/src/app/client-list/client-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ClientsBean } from '../clientsBean';
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
  clients: ClientsBean[] = [];

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

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
    this.clientService.deleteClient(id).subscribe(() => {
      this.getClients();
    });
  }
}
