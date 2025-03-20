package com.piaus.shopapp.service.interf;

import com.piaus.shopapp.dto.CategoryDto;
import com.piaus.shopapp.dto.Response;

public interface CategoryService {

    Response createCategory(CategoryDto categoryRequest);
    Response updateCategory(Long categoryId, CategoryDto categoryRequest);
    Response getAllCategories();
    Response getCategoryById(Long categoryId);
    Response deleteCategory(Long categoryId);
}
