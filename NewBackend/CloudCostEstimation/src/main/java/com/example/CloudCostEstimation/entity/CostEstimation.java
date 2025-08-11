package com.example.CloudCostEstimation.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CostEstimation
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public String getType() {
        return type;
    }

    public String getProduct() {
        return product;
    }

    public Float getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return String.format(
                "CostEstimation{id=%d, type='%s', product='%s', price=%.2f}",
                id, type, product, price
        );
    }


    private String type;
    private  String product;
    private Float price;




}
