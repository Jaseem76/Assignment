package com.example.CloudCostEstimation.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RegionInfo
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int Id;

    public String getRegion() {
        return region;
    }

    public float getRegionModifier() {
        return regionModifier;
    }


    @Override
    public String toString() {
        return String.format(
                "CostEstimation{regionModifier=%f region='%s'}",
                regionModifier,region
        );
    }
    private float regionModifier;
    private String region;
}
