package com.example.uscfilms;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.widget.PopupMenu;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import org.json.JSONArray;
import org.json.JSONException;

import java.time.LocalDate;
import java.util.ArrayList;

public class SearchRecyclerViewAdapter extends RecyclerView.Adapter<SearchRecyclerViewAdapter.ViewHolder> {

    private Context context;
    JSONArray searchResults = new JSONArray();

    public SearchRecyclerViewAdapter(Context context, JSONArray searchResults) {

        this.searchResults = searchResults;
        this.context = context;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.search_item,
                parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        try {

            Glide.with(context)
                    .asBitmap()
                    .load(searchResults.getJSONObject(position).getString("backdrop_path"))
                    .into(holder.image);


            holder.text_rating.setText(searchResults.getJSONObject(position).getString("rating"));
            holder.text_mediaTitle.setText(searchResults.getJSONObject(position).getString("title"));

            LocalDate date = LocalDate.parse(searchResults.getJSONObject(position).getString("release_air_date"));
            int year = date.getYear();
            holder.text_mediaType.setText(searchResults.getJSONObject(position).getString("media_type") + "  (" + year + ")");

            holder.image.setOnClickListener(v -> {

                Intent myIntent = new Intent(context, DetailsActivity.class);
                try {
                    myIntent.putExtra("mediaType", searchResults.getJSONObject(position).getString("media_type"));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                try {
                    myIntent.putExtra("mediaId", searchResults.getJSONObject(position).getString("id"));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                context.startActivity(myIntent);

            });


        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Override
    public int getItemCount() {
        return searchResults.length();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        ImageView image;
        TextView text_mediaType;
        TextView text_mediaTitle;
        TextView text_rating;

        public ViewHolder(View itemView) {
            super(itemView);
            image = itemView.findViewById(R.id.posterImg);
            text_mediaType = itemView.findViewById(R.id.text_mediaType);
            text_mediaTitle = itemView.findViewById(R.id.text_mediaTitle);
            text_rating = itemView.findViewById(R.id.text_rating);
        }

    }
}
