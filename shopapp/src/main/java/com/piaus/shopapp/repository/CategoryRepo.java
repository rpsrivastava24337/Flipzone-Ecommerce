package com.piaus.shopapp.repository;

import com.piaus.shopapp.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Long> {
}
