package com.example.CloudCostEstimation.controller;


import com.example.CloudCostEstimation.entity.Category;
import com.example.CloudCostEstimation.repo.CategoryRepository;
import com.example.CloudCostEstimation.service.PriceEstimator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class ResourceController
{
    PriceEstimator priceEstimator;
    Float lastCalculatedPrice;

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/")
    public  String HelloFromSpring()
    {
        return "Spring is up and running";
    }

    @Autowired
    public ResourceController(PriceEstimator priceEstimator)
    {
        this.priceEstimator = priceEstimator;
    }


    @GetMapping("/categories")
    public List<Category> getCategories()
    {
        return categoryRepository.findByParentIsNull();
    }

    @GetMapping("/categories/{id}/subcategories")
    public List<Category> getSubCategories(@PathVariable("id")  Long parentId)
    {
        return categoryRepository.findByParentId(parentId);
    }

    @PostMapping("/api/resources/calculate")
    public ResponseEntity<Map<String, Float>> PriceEstimated(@RequestBody List<ResourceRequest> resources)
    {

        Map<String, Float> response = new HashMap<>();

        Float Price = priceEstimator.Calculator(resources);
        this.lastCalculatedPrice = Price;
        System.out.println(Price);

        response.put("estimatedPrice", Price);
        return ResponseEntity.ok(response);
    }


    @GetMapping("api/resources/price/summary")
    public ResponseEntity<Map<String, Object>> getPriceSummary()
    {
        Map<String, Object> response = new HashMap<>();

        // Add estimated price
        response.put("estimatedPrice", this.lastCalculatedPrice);

        // Add detailed bill
        Map<String, Map<Integer, Float>> detailedBill = priceEstimator.getDetailedPrice();
        response.put("detailedBill", detailedBill);

        return ResponseEntity.ok(response);
    }


}
