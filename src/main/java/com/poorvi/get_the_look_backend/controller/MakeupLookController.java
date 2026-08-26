package com.poorvi.get_the_look_backend.controller;


import com.poorvi.get_the_look_backend.entity.MakeupLook;
import com.poorvi.get_the_look_backend.service.MakeupLookService;
import org.springframework.web.bind.annotation.*;
import com.poorvi.get_the_look_backend.dto.RecommendationRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RestController
@RequestMapping("/makeup-looks")
@CrossOrigin(origins = "http://localhost:5173")
public class MakeupLookController {
    private final MakeupLookService service;

    public MakeupLookController(MakeupLookService service) {
        this.service = service;
    }

    @GetMapping
    public List<MakeupLook> getAllMakeupLooks(){
        return service.getAllMakeupLooks();
    }

    @PostMapping
    public MakeupLook saveMakeupLook(@RequestBody MakeupLook makeupLook) {

        System.out.println(makeupLook.getName());

        return service.saveMakeupLook(makeupLook);
    }
    @PostMapping("/recommend")
    public MakeupLook recommendLook(@RequestBody RecommendationRequest request) {

        return service.recommendLook(request.getOccasion());

    }

}
