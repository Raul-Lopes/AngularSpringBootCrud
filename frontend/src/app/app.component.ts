// src/app/app.component.ts
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  information = signal('©  Raul Lopes. All rights reserved. Built for portfolio and educational purposes. Angular and Spring Boot CRUD');
  year = signal(new Date().getFullYear().toString());

  constructor(private router: Router) { }
  navigateToClients() {
    this.router.navigate(['/clients']);
  }
  navigateToCreateClient() {
    this.router.navigate(['/create-client']);
  }
}