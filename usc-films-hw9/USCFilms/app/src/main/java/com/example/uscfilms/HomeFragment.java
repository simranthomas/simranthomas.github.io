package com.example.uscfilms;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;


import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
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

import java.util.ArrayList;


public class HomeFragment extends Fragment {


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

                        displaySlider(nowPlayingMovies, home);
                        displayScroll(topRatedMovies, home);

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }

                }, error -> Log.d("error","That didn't work!"));

        // Add the request to the RequestQueue.
        queue.add(stringRequest);

        return home;
    }


    public void displaySlider(JSONArray nowPlayingMovies, View home) throws JSONException {

        ArrayList<SliderData> sliderDataArrayList = new ArrayList<>();

        // initializing the slider view.
        SliderView sliderView = home.findViewById(R.id.slider);

        // adding the urls inside array list
        for(int i=0; i<6; i++) {

            JSONObject jsonObject = nowPlayingMovies.getJSONObject(i);
            String id = jsonObject.getString("id");
            String title = jsonObject.getString("title");
            String posterPath = jsonObject.getString("poster_path");
            String mediaType = jsonObject.getString("media_type");

            sliderDataArrayList.add(new SliderData(posterPath));
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

    public void displayScroll(JSONArray mediaList, View home) throws JSONException {

        ArrayList<String> scrollDataArrayList = new ArrayList<>();

        for(int i=0; i<10; i++) {

            JSONObject jsonObject = mediaList.getJSONObject(i);
            String id = jsonObject.getString("id");
            String title = jsonObject.getString("title");
            String posterPath = jsonObject.getString("poster_path");
            String mediaType = jsonObject.getString("media_type");

            scrollDataArrayList.add(posterPath);
        }

        LinearLayoutManager layoutManager = new LinearLayoutManager(getContext(), LinearLayoutManager.HORIZONTAL, false);
        RecyclerView recyclerView = home.findViewById(R.id.recyclerViewTopRatedMovie);
        recyclerView.setLayoutManager(layoutManager);
        RecyclerViewAdapter adapter = new RecyclerViewAdapter(getContext(), scrollDataArrayList);
        recyclerView.setAdapter(adapter);
    }

}
