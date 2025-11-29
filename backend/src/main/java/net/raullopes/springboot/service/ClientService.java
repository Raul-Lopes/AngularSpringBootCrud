package net.raullopes.springboot.service;

import net.raullopes.springboot.model.Client;
import java.util.List;

public interface ClientService {
    List<Client> getAllClients();

    Client createClient(Client client);

    Client getClientById(Long id);

    Client updateClient(Long id, Client client);

    void deleteClient(Long id);
}
