package com.example.CloudCostEstimation.repo;

import com.example.CloudCostEstimation.entity.RegionInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RegionRepo extends JpaRepository<RegionInfo,String>
{
    Optional<RegionInfo> findByRegion(String region);
}
