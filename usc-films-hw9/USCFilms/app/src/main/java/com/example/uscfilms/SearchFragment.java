package com.example.uscfilms;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.SearchView;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.smarteist.autoimageslider.SliderView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class SearchFragment extends Fragment {

    RecyclerView recyclerViewSearch;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View home = inflater.inflate(R.layout.fragment_search, container, false);
        recyclerViewSearch = home.findViewById(R.id.recyclerViewSearch);

        final SearchView searchView = home.findViewById(R.id.search_view);
        searchView.setQueryHint("Search movies and TV");
        searchView.setIconified(false);
        searchView.setQueryHint("Search movies and TV");
        searchView.setIconifiedByDefault(false);
        searchView.setMaxWidth(Integer.MAX_VALUE);
        searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {
                getVolleyData(query, home.findViewById(R.id.empty_search));
                return false;
            }
            @Override
            public boolean onQueryTextChange(String newText) {
                getVolleyData(newText,home.findViewById(R.id.empty_search));
                return false;
            }
        });

        return home;
    }

    public void getVolleyData(String newText, TextView searchText) {

        String url = "http://10.0.2.2:8080/api/autocomplete?searchQuery=";
        RequestQueue queue = Volley.newRequestQueue(getContext());

        StringRequest stringRequest = new StringRequest(Request.Method.GET, url+newText,
                response -> {
                    try {

                        JSONArray searchResults = new JSONArray(response);

                        LinearLayoutManager layoutManager = new LinearLayoutManager(getContext(), LinearLayoutManager.VERTICAL, false);
                        recyclerViewSearch.setLayoutManager(layoutManager);
                        SearchRecyclerViewAdapter adapter;
                        if(searchResults.length() == 0) {

                            searchText.setVisibility(View.VISIBLE);
                            adapter = new SearchRecyclerViewAdapter(getContext(), new JSONArray());
                        }
                        else {

                            searchText.setVisibility(View.INVISIBLE);
                            adapter = new SearchRecyclerViewAdapter(getContext(), searchResults);
                        }
                        recyclerViewSearch.setAdapter(adapter);

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }, error -> Log.d("mylog", "That didn't work!"));
        queue.add(stringRequest);
    }

}
