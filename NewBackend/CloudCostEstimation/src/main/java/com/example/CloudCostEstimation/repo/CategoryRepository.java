package com.example.CloudCostEstimation.repo;

import com.example.CloudCostEstimation.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    // Fetch all main categories (no parent)
    List<Category> findByParentIsNull();

    // Fetch subcategories for a given parent category ID
    List<Category> findByParentId(Long parentId);
}
