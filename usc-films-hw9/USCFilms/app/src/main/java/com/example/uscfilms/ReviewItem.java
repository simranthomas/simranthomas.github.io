package com.example.uscfilms;


import java.util.Date;

public class ReviewItem {

    private String author;
    private String content;
    private String createdAt;
    private String rating;


    public ReviewItem(String author, String content, String createdAt, String rating) {
        this.author = author;
        this.content = content;
        this.createdAt = createdAt;
        this.rating = rating;
    }

    public String getAuthor() {
        return author;
    }

    public String getContent() { return content; }

    public String getRating() { return rating; }

    public String getCreatedAt() { return createdAt; }
}
