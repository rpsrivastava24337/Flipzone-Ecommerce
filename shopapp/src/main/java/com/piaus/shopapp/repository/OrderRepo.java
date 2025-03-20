package com.piaus.shopapp.repository;

import com.piaus.shopapp.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepo extends JpaRepository<Order, Long> {
}
