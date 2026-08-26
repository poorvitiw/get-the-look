package com.poorvi.get_the_look_backend.service;

import com.poorvi.get_the_look_backend.entity.Product;
import com.poorvi.get_the_look_backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAllProducts(){
        return repository.findAll();
    }

    public Product saveProduct(Product product) {
        return repository.save(product);
    }

    public List<Product> getProductsByMakeupLook(Long makeupLookId) {
        return repository.findByMakeupLookId(makeupLookId);
    }
}
