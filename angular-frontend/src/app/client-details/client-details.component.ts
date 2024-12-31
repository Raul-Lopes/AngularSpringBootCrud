import { Component, OnInit } from '@angular/core';
import { ClientsBean } from '../clientsBean';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})

export class ClientDetailsComponent implements OnInit {

  id: number
  
  client: ClientsBean
  constructor(private route: ActivatedRoute, private employeService: ClientService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.client = new ClientsBean();
    this.employeService.getClientById(this.id).subscribe(data => {
      this.client = data;
    });
  }

}
