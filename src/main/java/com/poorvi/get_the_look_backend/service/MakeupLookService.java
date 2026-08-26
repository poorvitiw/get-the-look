package com.poorvi.get_the_look_backend.service;

import com.poorvi.get_the_look_backend.entity.MakeupLook;
import com.poorvi.get_the_look_backend.repository.MakeupLookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MakeupLookService {
    private final MakeupLookRepository repository;

    public MakeupLookService(MakeupLookRepository repository){
        this.repository = repository;
    }

    public List<MakeupLook> getAllMakeupLooks() {
        return repository.findAll();
    }

    public MakeupLook saveMakeupLook(MakeupLook makeupLook) {
        System.out.println("Name: " + makeupLook.getName());
        System.out.println("Category: " + makeupLook.getCategory());
        System.out.println("Description: " + makeupLook.getDescription());
        return repository.save(makeupLook);
    }

    public MakeupLook recommendLook(String occasion) {

        String category;

        switch (occasion.toLowerCase()) {

            case "wedding":
                category = "Wedding";
                break;

            case "party":
                category = "Party";
                break;

            case "office":
                category = "Everyday";
                break;

            default:
                category = "Everyday";
        }

        return repository.findAll()
                .stream()
                .filter(look -> category.equalsIgnoreCase(look.getCategory()))
                .findFirst()
                .orElse(null);
    }


}


