package com.example.CloudCostEstimation.repo;

import com.example.CloudCostEstimation.entity.CostEstimation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CostRepo extends JpaRepository<CostEstimation,Integer>
{
    Optional<CostEstimation> findByTypeAndProduct(String type, String product);
}
