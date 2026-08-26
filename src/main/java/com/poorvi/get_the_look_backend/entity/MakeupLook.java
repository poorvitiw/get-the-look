package com.poorvi.get_the_look_backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity

public class MakeupLook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String difficulty;
    private int timeRequired;
    private String imageUrl;
    private String category;

    public MakeupLook() {}

        public Long getId () {
            return id;
        }

        public void setId (Long id){
            this.id = id;
        }

        public String getDescription () {
            return description;
        }

        public void setDescription (String description){
            this.description = description;
        }

        public String getName () {
            return name;
        }

        public void setName (String name){
            this.name = name;
        }

        public String getDifficulty () {
            return difficulty;
        }

        public void setDifficulty (String difficulty){
            this.difficulty = difficulty;
        }

        public int getTimeRequired () {
            return timeRequired;
        }

        public void setTimeRequired ( int timeRequired){
            this.timeRequired = timeRequired;
        }

        public String getImageUrl () {
            return imageUrl;
        }

        public void setImageUrl (String imageUrl){
            this.imageUrl = imageUrl;
        }

        public String getCategory () {
            return category;
        }

        public void setCategory (String category){
            this.category = category;
        }

        @OneToMany(mappedBy = "makeupLook")
        private List<Product> products;


}
