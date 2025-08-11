package com.example.CloudCostEstimation.controller;

public class ResourceRequest
{

    String type;
    String product;
    int quantity;
    String region;

    public ResourceRequest(){}

    public ResourceRequest(String type, String product, int quantity, String region)
    {
        this.type = type;
        this.product = product;
        this.quantity = quantity;
        this.region = region;
    }

    public String getType()
    {
        return type;
    }

    public void setType(String type)
    {
        this.type = type;
    }

    public String getProduct()
    {
        return product;
    }

    public void setProduct(String product)
    {
        this.product = product;
    }

    public String getRegion()
    {
        return region;
    }

    public void setRegion(String region)
    {
        this.region = region;
    }

    public int getQuantity()
    {
        return quantity;
    }

    public void setQuantity(int quantity)
    {
        this.quantity = quantity;
    }


    @Override
    public String toString()
    {
        return "ResourceRequest{" +
                "type='" + type + '\'' +
                ", product='" + product + '\'' +
                ", quantity=" + quantity +
                ", region='" + region + '\'' +
                '}';
    }

}
