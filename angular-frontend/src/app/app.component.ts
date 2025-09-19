// FILE: angular-frontend/src/app/app.component.ts
import { Component } from '@angular/core';
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
  title = 'angular-frontend';
  information = 'Angular with Spring Boot CRUD';
  year = new Date().getFullYear();

  constructor(private router: Router) { }

  navigateToClients() {
    this.router.navigate(['/clients']);
  }

  navigateToCreateClient() {
    this.router.navigate(['/create-client']);
  }
}
