package com.example.uscfilms;

import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.Observer;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.smarteist.autoimageslider.SliderView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;


public class HomeFragment extends Fragment {


    private LinearLayout progressView;
    private ConstraintLayout mainContent;
    public MutableLiveData<Boolean> dataLoaded = new MutableLiveData<>();

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        Toolbar myToolbar = getView().findViewById(R.id.my_toolbar);
        ((AppCompatActivity) getActivity()).setSupportActionBar(myToolbar);
        ((AppCompatActivity) getActivity()).getSupportActionBar().setDisplayShowHomeEnabled(true);
        ((AppCompatActivity) getActivity()).getSupportActionBar().setLogo(R.drawable.ic_theaters_white_18dp);
        ((AppCompatActivity) getActivity()).getSupportActionBar().setDisplayUseLogoEnabled(true);
    }

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        View home = inflater.inflate(R.layout.fragment_home, container, false);

        progressView = home.findViewById(R.id.progressbar_view);
        mainContent = home.findViewById(R.id.mainContent);
        progressView.setVisibility(View.VISIBLE);
        mainContent.setVisibility(View.GONE);

        dataLoaded.setValue(false);

        dataLoaded.observe(this, aBoolean -> {
            if (aBoolean == true){
                progressView.setVisibility(View.GONE);
                mainContent.setVisibility(View.VISIBLE);
            }
            else{
                progressView.setVisibility(View.VISIBLE);
                mainContent.setVisibility(View.GONE);
            }
        });


        View movieTab = home.findViewById(R.id.scroll_view_movies);
        View tvTab = home.findViewById(R.id.scroll_view_tvshows);

        Button movieButton = home.findViewById(R.id.button_movies);
        Button tvButton = home.findViewById(R.id.button_tvshows);

        TextView footerTMDB = home.findViewById(R.id.footerTMDB);
        TextView footerTMDBTV = home.findViewById(R.id.footerTMDBTV);

        tvTab.setVisibility(tvTab.INVISIBLE);

        footerTMDB.setOnClickListener(v -> {
            Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.themoviedb.org/"));
            v.getContext().startActivity(browserIntent);
        });
        footerTMDBTV.setOnClickListener(v -> {
            Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.themoviedb.org/"));
            v.getContext().startActivity(browserIntent);
        });

        movieButton.setOnClickListener(v -> {
            movieTab.setVisibility(movieTab.VISIBLE);
            tvTab.setVisibility(tvTab.INVISIBLE);
            movieButton.setTextColor(Color.parseColor("#ffffff"));
            tvButton.setTextColor(Color.parseColor("#287BC1"));
        });
        tvButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                movieTab.setVisibility(movieTab.INVISIBLE);
                tvTab.setVisibility(tvTab.VISIBLE);
                tvButton.setTextColor(Color.parseColor("#ffffff"));
                movieButton.setTextColor(Color.parseColor("#287BC1"));
            }
        });



        setHasOptionsMenu(true);
        RequestQueue queue = Volley.newRequestQueue(getContext());
        String apiURLHome = "http://10.0.2.2:8080/api/homepage";

        StringRequest stringRequest = new StringRequest(Request.Method.GET, apiURLHome,
                response -> {

                    try {
                        JSONObject responseObject = new JSONObject(response);

                        JSONArray nowPlayingMovies = new JSONArray(responseObject.getString("now_playing_movies"));
                        JSONArray popularMovies = new JSONArray(responseObject.getString("popular_movies"));
                        JSONArray topRatedMovies = new JSONArray(responseObject.getString("top_rated_movies"));
                        JSONArray trendingTv = new JSONArray(responseObject.getString("trending_tv"));
                        JSONArray popularTv = new JSONArray(responseObject.getString("popular_tv"));
                        JSONArray topRatedTv = new JSONArray(responseObject.getString("top_rated_tv"));

                        displaySlider(nowPlayingMovies, home.findViewById(R.id.slider_movies));
                        displayScroll(topRatedMovies, home.findViewById(R.id.recyclerViewTopRatedMovie) );
                        displayScroll(popularMovies, home.findViewById(R.id.recyclerViewPopularMovie));

                        displaySlider(trendingTv, home.findViewById(R.id.slider_tvshows));
                        displayScroll(topRatedTv, home.findViewById(R.id.recyclerViewTopRatedTVShows) );
                        displayScroll(popularTv, home.findViewById(R.id.recyclerViewPopularTVShows));

                        dataLoaded.setValue(true);

                    } catch (JSONException | IOException e) {
                        e.printStackTrace();
                    }

                }, error -> Log.d("error","That didn't work!"));

        // Add the request to the RequestQueue.
        queue.add(stringRequest);

        return home;
    }


    public void displaySlider(JSONArray nowPlayingMovies, SliderView sliderView) throws JSONException {

        ArrayList<MediaItem> sliderDataArrayList = new ArrayList<>();

        // adding the urls inside array list
        for(int i=0; i < Math.min(nowPlayingMovies.length(), 6); i++) {

            JSONObject jsonObject = nowPlayingMovies.getJSONObject(i);
            String id = jsonObject.getString("id");
            String title = jsonObject.getString("title");
            String posterPath = jsonObject.getString("poster_path");
            String mediaType = jsonObject.getString("media_type");
            MediaItem mediaItem = new MediaItem(id, title, posterPath, mediaType);

            sliderDataArrayList.add(mediaItem);
        }

        // passing this array list inside our adapter class.
        SliderAdapter adapter = new SliderAdapter(getContext(), sliderDataArrayList);

        // below method is used to set auto cycle direction in left to
        // right direction you can change according to requirement.
        sliderView.setAutoCycleDirection(SliderView.LAYOUT_DIRECTION_LTR);

        // below method is used to
        // setadapter to sliderview.
        sliderView.setSliderAdapter(adapter);

        // below method is use to set
        // scroll time in seconds.
        sliderView.setScrollTimeInSec(3);

        // to set it scrollable automatically
        // we use below method.
        sliderView.setAutoCycle(true);

        // to start autocycle below method is used.
        sliderView.startAutoCycle();

    }

    public void displayScroll(JSONArray mediaList, RecyclerView recyclerView) throws JSONException, IOException {

        ArrayList<MediaItem> scrollDataArrayList = new ArrayList<>();

        for(int i=0; i < Math.min(mediaList.length(), 10); i++) {

            JSONObject jsonObject = mediaList.getJSONObject(i);
            String id = jsonObject.getString("id");
            String title = jsonObject.getString("title");
            String posterPath = jsonObject.getString("poster_path");
            String mediaType = jsonObject.getString("media_type");
            MediaItem mediaItem = new MediaItem(id, title, posterPath, mediaType);

            scrollDataArrayList.add(mediaItem);
        }

        LinearLayoutManager layoutManager = new LinearLayoutManager(getContext(), LinearLayoutManager.HORIZONTAL, false);
        recyclerView.setLayoutManager(layoutManager);
        RecyclerViewAdapter adapter = new RecyclerViewAdapter(getContext(), scrollDataArrayList, mediaList);
        recyclerView.setAdapter(adapter);

    }

    public void onActivityCreated(Bundle savedInstanceState) {
        // TODO Auto-generated method stub
        super.onActivityCreated(savedInstanceState);
        // get the button view

    }

}
