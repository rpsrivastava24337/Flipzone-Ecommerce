package com.piaus.shopapp.repository;


import com.piaus.shopapp.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepo extends JpaRepository<Address, Long> {
}
