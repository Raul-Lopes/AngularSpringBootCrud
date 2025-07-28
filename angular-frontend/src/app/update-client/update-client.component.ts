// FILE: angular-frontend/src/app/update-client/update-client.component.ts
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientsBean } from '../clientsBean';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})

export class UpdateClientComponent implements OnInit {
  id!: number;
  client: ClientsBean = new ClientsBean();

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe(data => {
      this.client = data;
    });
  }

  onSubmit() {
    this.clientService.updateClient(this.id, this.client).subscribe({
      next: () => this.goToClientList(),
      error: (err) => console.log(err)
    });
  }

  // Navigate back to the client list page
  goToClientList() {
    this.router.navigate(['/clients']);
  }
}
