import { Component, OnInit } from '@angular/core';
import { ClientsBean } from '../clientsBean';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
  providers: [CurrencyPipe] // Provide CurrencyPipe for this component
})

export class CreateClientComponent implements OnInit {

  client: ClientsBean = new ClientsBean();
  constructor(
    private clientService: ClientService,
    private router: Router,
    private currencyPipe: CurrencyPipe // Inject CurrencyPipe
  ) {}

  ngOnInit(): void {
  }

  saveClient() {
    this.clientService.createClient(this.client).subscribe(data => {
      console.log(data);
      this.goToClientList();
    },
      error => console.log(error));
  }

  goToClientList() {
    this.router.navigate(['/clients']);
  }

  onSubmit() {
    console.log(this.client);
    this.saveClient();
  }
}