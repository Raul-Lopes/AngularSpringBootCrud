package net.raullopes.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.raullopes.springboot.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

}
