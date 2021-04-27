package com.example.uscfilms;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.ArrayList;

public class RecyclerViewAdapter extends RecyclerView.Adapter<RecyclerViewAdapter.ViewHolder> {

    private ArrayList<MediaItem> mediaList = new ArrayList<MediaItem>();
    private Context context;


    public RecyclerViewAdapter(Context context, ArrayList<MediaItem> mediaList) {
        this.mediaList = mediaList;
        this.context = context;

    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.home_media_card_layout, parent, false);

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {


        Glide.with(context)
                .asBitmap()
                .load(mediaList.get(position).getPosterPath())
                .into(holder.image);

        holder.image.setOnClickListener(v -> {
            Intent myIntent = new Intent(context, DetailsActivity.class);
            myIntent.putExtra("mediaType", mediaList.get(position).getMediaType());
            myIntent.putExtra("mediaId", mediaList.get(position).getMediaId());
            context.startActivity(myIntent);
        });

    }

    @Override
    public int getItemCount() {
        return mediaList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        ImageView image;

        public ViewHolder(View itemView) {
            super(itemView);
            image = itemView.findViewById(R.id.posterImg);
        }
    }
}
