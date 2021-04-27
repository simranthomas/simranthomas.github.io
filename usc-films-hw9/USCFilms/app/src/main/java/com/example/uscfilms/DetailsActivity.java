package com.example.uscfilms;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.bumptech.glide.Glide;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;

public class DetailsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setTheme(R.style.Theme_USCFilms);
        setContentView(R.layout.activity_details);


        Intent prevIntent = getIntent();
        String mediaType = prevIntent.getStringExtra("mediaType");
        String mediaId= prevIntent.getStringExtra("mediaId");

        Log.d("mediaId", mediaId);

        RequestQueue queue = Volley.newRequestQueue(this);
        String apiURLDetails = "http://10.0.2.2:8080/api/media_details?mediaType=" + mediaType+ "&id=" + mediaId;

        YouTubePlayerView youTubePlayerView = findViewById(R.id.youtube_player_view);
        getLifecycle().addObserver(youTubePlayerView);

        StringRequest stringRequest = new StringRequest(Request.Method.GET, apiURLDetails,
                response -> {

                    try {
                        JSONObject responseObject = new JSONObject(response);

                        // get all fields into JSON objects and arrays
                        JSONObject videoDetails = new JSONObject(responseObject.getString("media_video_details"));
                        JSONObject mediaDetails = new JSONObject(responseObject.getString("media_details"));
                        JSONArray castDetails = new JSONArray(responseObject.getString("cast_details"));
                        JSONArray reviewDetails = new JSONArray(responseObject.getString("review_details"));
                        JSONArray recommendations = new JSONArray(responseObject.getString("recommendations"));

                        // media title
                        TextView title = findViewById(R.id.mediaTitle);
                        title.setText(mediaDetails.getString("title"));

                        // youtube video
                        if(videoDetails.length() != 0) {
                            youTubePlayerView.addYouTubePlayerListener(new AbstractYouTubePlayerListener() {
                                @Override
                                public void onReady(@NonNull YouTubePlayer youTubePlayer) {
                                    String videoId = null;
                                    try {
                                        videoId = videoDetails.getString("key");
                                    } catch (JSONException e) {
                                        e.printStackTrace();
                                    }
                                    youTubePlayer.cueVideo(videoId, 0);
                                }
                            });
                        }
                        else {
                            ImageView backdrop = findViewById(R.id.backdropImage);
                            Glide.with(this)
                                    .asBitmap()
                                    .load(mediaDetails.getString("backdrop_path"))
                                    .into(backdrop);
                        }

                        // overview
                        TextView overview = findViewById(R.id.overview);
                        overview.setText(mediaDetails.getString("overview"));

                        // genres
                        TextView genres = findViewById(R.id.genres);
                        String genreString = "";
                        JSONArray genreList = new JSONArray(mediaDetails.getString("genres"));
                        for(int i = 0; i < genreList.length(); i++) {
                            JSONObject genre = genreList.getJSONObject(i);
                            genreString += genre.getString("name") + ", ";
                        }
                        genres.setText(genreString.substring(0, genreString.length() - 2));

                        // year
                        TextView yearText = findViewById(R.id.year);
                        LocalDate date = LocalDate.parse(mediaDetails.getString("release_air_date"));
                        int year = date.getYear();
                        yearText.setText(String.valueOf(year));

                        // facebook share
                        ImageButton facebookButton = findViewById(R.id.facebookButton);
                        facebookButton.setOnClickListener(v -> {
                            String url = "https://www.facebook.com/sharer/sharer.php?u=https://www.themoviedb.org/" + mediaType + "/" + mediaId;
                            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                            startActivity(intent);
                        });

                        // twitter share
                        ImageButton twitterButton = findViewById(R.id.twitterButton);
                        twitterButton.setOnClickListener(v -> {
                            String message = "Check this out!" + "%0A" + "https://www.themoviedb.org/" + mediaType + "/" + mediaId;
                            String url = "https://twitter.com/intent/tweet?text=" + message;
                            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                            startActivity(intent);
                        });

                        // display cast
                        if(castDetails != null && castDetails.length()!= 0)
                            displayCastGrid(castDetails, findViewById(R.id.recyclerViewCast));
                        else {
                            TextView castTitle = findViewById(R.id.castTitle);
                            castTitle.setVisibility(castTitle.GONE);
                        }

                        // display review
                        if(reviewDetails != null && reviewDetails.length()!= 0)
                            displayReviewCards(reviewDetails, findViewById(R.id.recyclerViewReviews));
                        else {
                            TextView reviewTitle = findViewById(R.id.reviewsTitle);
                            reviewTitle.setVisibility(reviewTitle.GONE);
                        }

                        // display recommendations
                        if(recommendations != null && recommendations.length()!= 0)
                            displayRecommendations(recommendations, findViewById(R.id.recyclerViewRecommended) );
                        else {
                            TextView recommendedTitle = findViewById(R.id.recommendedTitle);
                            recommendedTitle.setVisibility(recommendedTitle.GONE);
                        }


                    } catch (JSONException e) {
                        e.printStackTrace();
                    }

                }, error -> Log.d("error","That didn't work!"));

        // Add the request to the RequestQueue.
        queue.add(stringRequest);

    }

    public void displayCastGrid(JSONArray castList, RecyclerView recyclerView) throws JSONException {

        ArrayList<CastItem> castDataList = new ArrayList<>();
        for(int i = 0; i < Math.min(castList.length(), 6); i++) {

            JSONObject jsonObject = castList.getJSONObject(i);
            String name = jsonObject.getString("name");
            String profilePath = jsonObject.getString("profile_path");
            CastItem castItem = new CastItem(name, profilePath);
            castDataList.add(castItem);
        }

        recyclerView.setLayoutManager(new GridLayoutManager(this,3));
        CastRecyclerViewAdapter adapter = new CastRecyclerViewAdapter(this, castDataList);
        recyclerView.setAdapter(adapter);
    }

    public void displayReviewCards(JSONArray reviewList, RecyclerView recyclerView) throws JSONException {

        ArrayList<ReviewItem> reviewDataList = new ArrayList<>();
        for(int i = 0; i < Math.min(reviewList.length(), 3); i++) {

            JSONObject jsonObject = reviewList.getJSONObject(i);
            String author = jsonObject.getString("author");
            String content = jsonObject.getString("content");
            String createdAt = jsonObject.getString("created_at");
            String rating = jsonObject.getString("rating");
            ReviewItem reviewItem = new ReviewItem(author, content, createdAt, rating);
            reviewDataList.add(reviewItem);
        }

        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        ReviewRecyclerViewAdapter adapter = new ReviewRecyclerViewAdapter(this, reviewDataList);
        recyclerView.setAdapter(adapter);
    }

    public void displayRecommendations(JSONArray recommendedList, RecyclerView recyclerView) throws JSONException {

        ArrayList<MediaItem> scrollDataArrayList = new ArrayList<>();

        for(int i = 0; i < Math.min(recommendedList.length(), 10); i++) {

            JSONObject jsonObject = recommendedList.getJSONObject(i);
            String id = jsonObject.getString("id");
            String title = jsonObject.getString("title");
            String posterPath = jsonObject.getString("image_path");
            String mediaType = jsonObject.getString("media_type");
            MediaItem mediaItem = new MediaItem(id, title, posterPath, mediaType);
            scrollDataArrayList.add(mediaItem);
        }

        LinearLayoutManager layoutManager = new LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false);
        recyclerView.setLayoutManager(layoutManager);
        RecommendedRecyclerViewAdapter adapter = new RecommendedRecyclerViewAdapter(this, scrollDataArrayList);
        recyclerView.setAdapter(adapter);
    }
}