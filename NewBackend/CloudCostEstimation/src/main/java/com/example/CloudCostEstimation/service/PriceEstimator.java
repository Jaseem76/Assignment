package com.example.CloudCostEstimation.service;

import com.example.CloudCostEstimation.controller.ResourceRequest;
import com.example.CloudCostEstimation.entity.CostEstimation;
import com.example.CloudCostEstimation.entity.RegionInfo;
import com.example.CloudCostEstimation.repo.CostRepo;
import com.example.CloudCostEstimation.repo.RegionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Service
public class PriceEstimator
{


    Map<String,Map<Integer,Float>> DetailedPrice = new HashMap<>();

    public Map<String, Map<Integer, Float>> getDetailedPrice()
    {
        return DetailedPrice;
    }

    @Autowired
    CostRepo costRepo;

    @Autowired
    RegionRepo regionRepo;


    public PriceEstimator()
    {
    }

    public Float Calculator(List<ResourceRequest> resourcesFromPriceEstimator)
    {
        DetailedPrice.clear();

        Float FinalPrice = 0.f;
        for(ResourceRequest resource : resourcesFromPriceEstimator)
        {
            String type = resource.getType().toLowerCase();
            String product = resource.getProduct().toLowerCase();
            int quantity = resource.getQuantity();
            String region = resource.getRegion().toLowerCase();

            Optional<CostEstimation> costEstimation= costRepo.findByTypeAndProduct(type,product);
            Optional<RegionInfo> regionEstimation = regionRepo.findByRegion(region);

            Float unitPrice = costEstimation.map(CostEstimation::getPrice).orElse(0.0f);
            Float regionPricePercent = regionEstimation.map(RegionInfo::getRegionModifier).orElse(1.0f);




            Float price = quantity* unitPrice*regionPricePercent;
            FinalPrice += price;

            //pushing to DetailedPrice map (product name and price for each product requested)
            DetailedPrice.put(product, Map.of(quantity,price));

        }


        return FinalPrice;
    }
}

