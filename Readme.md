# 🚀 Angular & Spring Boot CRUD Application

A full-stack Client Management System built with **Angular 19** and **Spring Boot 3.4**. This application demonstrates a complete CRUD (Create, Read, Update, Delete) flow with a modern architecture, clean code practices, and a responsive user interface.

## ✨ Features

*   **📋 View Client List**: Interactive table displaying all clients with their details.
*   **➕ Create Client**: Intuitive form to add new clients with validation.
*   **✏️ Update Client**: Edit existing client information seamlessly.
*   **🗑️ Delete Client**: Remove clients from the system with confirmation.
*   **🔍 Client Details**: View specific details for any client.
*   **✅ Input Validation**: Robust validation on both frontend and backend.
*   **📱 Responsive Design**: Built with Bootstrap 5 for a consistent experience across devices.

## 🛠️ Technology Stack

### Frontend
*   **Framework**: Angular 19
*   **Styling**: Bootstrap 5
*   **Language**: TypeScript
*   **Build Tool**: Angular CLI

### Backend
*   **Framework**: Spring Boot 3.4
*   **Language**: Java 21
*   **Database**: MySQL
*   **Persistence**: Spring Data JPA
*   **Validation**: Jakarta Validation

## ⚙️ Prerequisites

Before running the application, ensure you have the following installed:
*   **Java Development Kit (JDK) 21**
*   **Node.js** (v18 or higher) & **npm**
*   **MySQL Server**
*   **Maven** (optional, wrapper included)

## 🚀 Setup & Installation

### 1. Database Setup
Create a MySQL database named `client_management_system`.
```sql
CREATE DATABASE client_management_system;
```
*Note: The application is configured to use `root` as both username and password. Update `backend/src/main/resources/application.properties` if your credentials differ.*

### 2. Backend Setup
Navigate to the backend directory and run the application.
```bash
cd backend
./mvnw spring-boot:run
```
*The backend server will start on `http://localhost:8081`.*

### 3. Frontend Setup
Navigate to the frontend directory, install dependencies, and start the development server.
```bash
cd frontend
npm install
ng serve
```
*The frontend application will be available at `http://localhost:4200`.*

## 📸 Screenshots

### Client List
![Client List](/frontend/src/assets/images/ClientList.png)

### Create Client
![Create Client](/frontend/src/assets/images/CreateClient.png)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

---
**Angular with Spring Boot CRUD - 2025**
