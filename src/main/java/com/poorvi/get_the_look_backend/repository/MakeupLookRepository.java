package com.poorvi.get_the_look_backend.repository;

import com.poorvi.get_the_look_backend.entity.MakeupLook;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MakeupLookRepository extends JpaRepository<MakeupLook, Long> {
}
