package net.raullopes.springboot.service.impl;

import net.raullopes.springboot.exception.ResourceNotFoundException;
import net.raullopes.springboot.model.Client;
import net.raullopes.springboot.repository.ClientRepository;
import net.raullopes.springboot.service.ClientService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {

    private final ClientRepository clientRepository;

    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @Override
    public Client createClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client getClientById(Long id) {
        return clientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Client not exist with id :" + id));
    }

    @Override
    public Client updateClient(Long id, Client clientDetails) {
        Client client = getClientById(id);

        client.setFirstName(clientDetails.getFirstName());
        client.setLastName(clientDetails.getLastName());
        client.setEmailId(clientDetails.getEmailId());
        client.setCreditLimit(clientDetails.getCreditLimit());

        return clientRepository.save(client);
    }

    @Override
    public void deleteClient(Long id) {
        Client client = getClientById(id);
        clientRepository.delete(client);
    }
}
