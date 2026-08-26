package com.poorvi.get_the_look_backend.repository;


import com.poorvi.get_the_look_backend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByMakeupLookId(Long makeupLookId);
}
