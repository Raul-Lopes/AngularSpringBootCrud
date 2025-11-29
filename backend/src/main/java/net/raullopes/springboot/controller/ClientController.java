package net.raullopes.springboot.controller;

import jakarta.validation.Valid;
import net.raullopes.springboot.model.Client;
import net.raullopes.springboot.service.ClientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
// The @RestController annotation indicates this class is a Spring MVC controller
// that returns JSON responses directly from the methods.
@RestController
// This annotation specifies the base URL path for all endpoints in this controller.
@RequestMapping("/api/v1/")
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping("/clients")
    public List<Client> getAllClients() {
        return clientService.getAllClients();
    }

    // It responds to POST requests at /api/v1/clients.
    @PostMapping("/clients")
    public Client createClient(@Valid @RequestBody Client client) {
        return clientService.createClient(client);
    }

    // It responds to GET requests at /api/v1/clients/{id}.
    @GetMapping("/clients/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Long id) {
        Client client = clientService.getClientById(id);
        return ResponseEntity.ok(client);
    }

    // It responds to PUT requests at /api/v1/clients/{id}.
    @PutMapping("/clients/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @Valid @RequestBody Client clientDetails) {
        Client updatedClient = clientService.updateClient(id, clientDetails);
        return ResponseEntity.ok(updatedClient);
    }

    // It responds to DELETE requests at /api/v1/clients/{id}.
    @DeleteMapping("/clients/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable Long id) {
        clientService.deleteClient(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
