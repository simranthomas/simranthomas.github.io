package com.example.uscfilms;

import android.content.Context;
import android.content.SharedPreferences;
import android.media.MediaRouter;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collections;

public class WatchlistFragment extends Fragment {

    private SharedPreferences sharedPreferences;
    private SharedPreferences.Editor myEdit;
    MyRecyclerViewAdapter adapter;
    JSONArray Watchlist_JSON;
    View watchlist_view;
    ArrayList<String> posterPathArray;
    TextView empty_watchlist;
    RecyclerView watchlist_recyclerView;

    @Override
    public void onResume() {
        super.onResume();
        sharedPreferences = getContext().getSharedPreferences("MySharedPref", Context.MODE_PRIVATE);
        myEdit = sharedPreferences.edit();
        try {
            Watchlist_JSON = new JSONArray(sharedPreferences.getString("watchlist", ""));
            adapter = new MyRecyclerViewAdapter(getContext(), Watchlist_JSON, empty_watchlist);
            watchlist_recyclerView.setAdapter(adapter);
            adapter.notifyDataSetChanged();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        sharedPreferences = getContext().getSharedPreferences("MySharedPref", Context.MODE_PRIVATE);
        myEdit = sharedPreferences.edit();
        watchlist_view = inflater.inflate(R.layout.fragment_watchlist, container, false);


        empty_watchlist = watchlist_view.findViewById(R.id.empty_watchlist);
        empty_watchlist.setVisibility(empty_watchlist.INVISIBLE);

        try {

            Log.d("mylog", "fetching new watchlist");
            Watchlist_JSON = new JSONArray(sharedPreferences.getString("watchlist", ""));
            if(Watchlist_JSON.length() == 0) {
                empty_watchlist.setVisibility(empty_watchlist.VISIBLE);
                return watchlist_view;
            }



            //Toast.makeText(getContext(), Watchlist_JSON.toString(), Toast.LENGTH_SHORT).show();

            watchlist_recyclerView = watchlist_view.findViewById(R.id.recyclerView_grid);

            posterPathArray = new ArrayList<>();
            for(int i=0; i<Watchlist_JSON.length(); i++) {

                JSONObject jsonObject = Watchlist_JSON.getJSONObject(i);
                String id = jsonObject.getString("id");
                String title = jsonObject.getString("title");
                String posterPath = "https://image.tmdb.org/t/p/w500" + jsonObject.getString("poster_path");
                String mediaType = jsonObject.getString("media_type");
                posterPathArray.add(posterPath);
            }

            watchlist_recyclerView.setLayoutManager(new GridLayoutManager(getContext(), 3));
            adapter = new MyRecyclerViewAdapter(getContext(), Watchlist_JSON, empty_watchlist);
            watchlist_recyclerView.setAdapter(adapter);
            adapter.notifyDataSetChanged();

            ItemTouchHelper itemTouchHelper = new ItemTouchHelper(simpleCallback);
            itemTouchHelper.attachToRecyclerView(watchlist_recyclerView);

            } catch (Exception e) {

            }
        return watchlist_view;
    }

    ItemTouchHelper.SimpleCallback simpleCallback = new ItemTouchHelper.SimpleCallback(ItemTouchHelper.UP | ItemTouchHelper.DOWN | ItemTouchHelper.LEFT | ItemTouchHelper.RIGHT | ItemTouchHelper.START | ItemTouchHelper.END, 0) {
        @Override
        public boolean onMove(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ViewHolder target) {

            int fromPosition = viewHolder.getAdapterPosition();
            int toPosition = target.getAdapterPosition();

            //Collections.swap(posterPathArray, fromPosition, toPosition);

            adapter.swapItems(fromPosition, toPosition);
//            adapter.notifyItemRangeChanged(Math.min(fromPosition, toPosition), Math.abs(fromPosition - toPosition) + 1);
//            adapter.notifyItemMoved(fromPosition, toPosition);

            adapter.swapItems(fromPosition, toPosition);
//            if (fromPosition > toPosition) {
//                adapter.notifyItemRangeChanged(toPosition, adapter.getItemCount()-toPosition);
//            } else {
//                adapter.notifyItemRangeChanged(fromPosition, adapter.getItemCount()-fromPosition);
//            }
            recyclerView.getAdapter().notifyItemMoved(fromPosition, toPosition);

            return false;
        }

        @Override
        public void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int direction) {

        }
    };




}
