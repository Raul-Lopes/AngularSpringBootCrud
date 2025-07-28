package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Client;
import net.javaguides.springboot.repository.ClientRepository;

// This annotation enables Cross-Origin Resource Sharing (CORS) for this controller,
// allowing requests from the frontend running at "http://localhost:4200" (usually Angular).
@CrossOrigin(origins = "http://localhost:4200")
// The @RestController annotation indicates this class is a Spring MVC controller
// that returns JSON responses directly from the methods.
@RestController
// This annotation specifies the base URL path for all endpoints in this controller.
@RequestMapping("/api/v1/")
public class ClientController {

	// Autowiring the ClientRepository to interact with the database.
	@Autowired
	private ClientRepository clientRepository;

	// Endpoint to get all clients from the database.
	// It responds to GET requests at /api/v1/clients.
	@GetMapping("/clients")
	public List<Client> getAllClients(){
		// Fetches all clients from the database using the clientRepository.
		return clientRepository.findAll();
	}

	// Endpoint to create a new client.
	// It responds to POST requests at /api/v1/clients.
	// The client data is expected to be in the body of the request.
	@PostMapping("/clients")
	public Client createClient(@RequestBody Client client) {
		// Saves the new client to the database and returns the saved client.
		return clientRepository.save(client);
	}

	// Endpoint to get a client by ID.
	// It responds to GET requests at /api/v1/clients/{id}.
	@GetMapping("/clients/{id}")
	public ResponseEntity<Client> getClientById(@PathVariable Long id) {
		// Tries to find the client by its ID. If not found, throws a ResourceNotFoundException.
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Client not exist with id:" + id));
		// Returns the client inside a ResponseEntity with a 200 OK status.
		return ResponseEntity.ok(client);
	}

	// Endpoint to update a client by ID.
	// It responds to PUT requests at /api/v1/clients/{id}.
	// The client data to update is expected to be in the body of the request.
	@PutMapping("/clients/{id}")
	public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientDetails){
		// Finds the client by ID. If not found, throws a ResourceNotFoundException.
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Client not exist with id:" + id));

		// Updates the client's details with the values from the request body.
		client.setFirstName(clientDetails.getFirstName());
		client.setLastName(clientDetails.getLastName());
		client.setEmailId(clientDetails.getEmailId());

		// Saves the updated client and returns it inside a ResponseEntity with a 200 OK status.
		Client updatedClient = clientRepository.save(client);
		return ResponseEntity.ok(updatedClient);
	}

	// Endpoint to delete a client by ID.
	// It responds to DELETE requests at /api/v1/clients/{id}.
	@DeleteMapping("/clients/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable Long id){
		// Finds the client by ID. If not found, throws a ResourceNotFoundException.
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Client not exist with id:" + id));

		// Deletes the client from the database.
		clientRepository.delete(client);

		// Prepares a response indicating the client was deleted and returns it with a 200 OK status.
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
