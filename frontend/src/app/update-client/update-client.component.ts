// FILE: frontend/src/app/update-client/update-client.component.ts
import { Component, OnInit, signal, computed } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
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
  id = signal<number>(0);
  firstName = signal<string>('');
  lastName = signal<string>('');
  emailId = signal<string>('');
  creditLimit = signal<number>(0);
  isLoading = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);

  // Computed signal for the client object
  client = computed<Client>(() => ({
    id: this.id(),
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
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
        console.error('Error fetching client:', err);
        this.isLoading.set(false);
      }
    });
  }

  onSubmit() {
    if (!this.isFormValid()) {
      return;
    }

    this.isSubmitting.set(true);
    this.clientService.updateClient(this.id(), this.client()).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.goToClientList();
      },
      error: (err) => {
        console.error('Error updating client:', err);
        this.isSubmitting.set(false);
      }
    });
  }

  // Navigate back to the client list page
  goToClientList() {
    this.router.navigate(['/clients']);
  }
}
