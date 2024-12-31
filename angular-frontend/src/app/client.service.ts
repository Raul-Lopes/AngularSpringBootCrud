import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ClientsBean } from './clientsBean';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8081/api/v1/clients";

  constructor(private httpClient: HttpClient) { }

  getClientsList(): Observable<ClientsBean[]> {
    return this.httpClient.get<ClientsBean[]>(`${this.baseURL}`);
  }

  createClient(client: ClientsBean): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, client);
  }

  getClientById(id: number): Observable<ClientsBean> {
    return this.httpClient.get<ClientsBean>(`${this.baseURL}/${id}`);
  }

  updateClient(id: number, client: ClientsBean): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, client);
  }

  deleteClient(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}