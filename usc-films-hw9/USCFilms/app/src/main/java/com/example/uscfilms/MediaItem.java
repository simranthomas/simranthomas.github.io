package com.example.uscfilms;

public class MediaItem {

    private String title;
    private String mediaId;
    private String mediaType;
    private String posterPath;

    public MediaItem(String id, String title, String posterPath, String mediaType) {
        this.mediaId = id;
        this.mediaType = mediaType;
        this.posterPath = posterPath;
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public String getMediaId() {
        return mediaId;
    }

    public String getMediaType() {return mediaType;}

    public String getPosterPath() {return posterPath;}
}
