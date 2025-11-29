import { Injectable, inject } from '@angular/core'; // Importing Angular core to enable dependency injection
import { HttpClient } from '@angular/common/http'; // Importing HttpClient to make HTTP requests
import { Observable } from 'rxjs'; // Importing Observable to handle asynchronous data streams
import { Client } from './client.model'; // Importing the ClientsBean model to type the responses

// Marking the service as injectable and available for dependency injection across the application
@Injectable({
  providedIn: 'root' // The service is available throughout the entire application
})
export class ClientService {
  private http = inject(HttpClient);

  // Defining the base URL for the API that provides client data
  private baseURL = "http://localhost:8081/api/v1/clients";

  getClientsList(): Observable<Client[]> {
    // HTTP GET request to fetch the list of clients from the API
    return this.http.get<Client[]>(`${this.baseURL}`);
  }

  // Method to create a new client by sending a POST request to the API
  createClient(client: Client): Observable<Object> {
    // HTTP POST request to create a new client
    return this.http.post(`${this.baseURL}`, client);
  }

  // Method to get a specific client by their ID from the API
  getClientById(id: number): Observable<Client> {
    // HTTP GET request to fetch a specific client based on the ID
    return this.http.get<Client>(`${this.baseURL}/${id}`);
  }

  // Method to update a client's data by sending a PUT request to the API
  updateClient(id: number, client: Client): Observable<Object> {
    // HTTP PUT request to update client details based on their ID
    return this.http.put(`${this.baseURL}/${id}`, client);
  }

  // Method to delete a client by their ID by sending a DELETE request to the API
  deleteClient(id: number): Observable<Object> {
    // HTTP DELETE request to remove a client based on the ID
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
