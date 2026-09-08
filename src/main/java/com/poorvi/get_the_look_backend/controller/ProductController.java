package com.poorvi.get_the_look_backend.controller;

import com.poorvi.get_the_look_backend.entity.Product;
import com.poorvi.get_the_look_backend.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = {"http://localhost:5173" , "https://get-the-look-production.up.railway.app"})
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping("/look/{makeupLookId}")
    public List<Product> getProductsByMakeupLook(@PathVariable Long makeupLookId) {
        return service.getProductsByMakeupLook(makeupLookId);
    }

    @PostMapping
    public Product saveProduct(@RequestBody Product product) {
        return service.saveProduct(product);
    }
}