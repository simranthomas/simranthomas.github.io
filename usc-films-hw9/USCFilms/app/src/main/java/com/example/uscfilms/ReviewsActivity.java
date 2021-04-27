package com.example.uscfilms;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.widget.ImageButton;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener;
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.time.LocalDate;
import java.util.ArrayList;

public class ReviewsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setTheme(R.style.Theme_USCFilms);
        setContentView(R.layout.activity_reviews);

        Intent prevIntent = getIntent();
        String authorDateText = prevIntent.getStringExtra("authorDateText");
        String ratingText= prevIntent.getStringExtra("ratingText");
        String reviewText= prevIntent.getStringExtra("reviewText");

        TextView authorDate = findViewById(R.id.authorDate);
        authorDate.setText(authorDateText);

        TextView rating = findViewById(R.id.rating);
        rating.setText(ratingText);

        TextView review = findViewById(R.id.reviewText);
        review.setText(reviewText);


    }
}