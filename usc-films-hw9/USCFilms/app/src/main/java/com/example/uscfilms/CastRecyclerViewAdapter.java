package com.example.uscfilms;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.ArrayList;

public class CastRecyclerViewAdapter extends RecyclerView.Adapter<CastRecyclerViewAdapter.ViewHolder> {

    private ArrayList<CastItem> castDataList = new ArrayList<CastItem>();
    private Context context;

    public CastRecyclerViewAdapter(Context context, ArrayList<CastItem> castDataList) {
        this.castDataList = castDataList;
        this.context = context;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.cast_card_layout, parent, false);

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {


        Glide.with(context)
                .asBitmap()
                .load(castDataList.get(position).getProfilePath())
                .into(holder.image);

        holder.name.setText(castDataList.get(position).getName());

    }

    @Override
    public int getItemCount() {
        return castDataList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        ImageView image;
        TextView name;

        public ViewHolder(View itemView) {
            super(itemView);
            image = itemView.findViewById(R.id.profileImg);
            name = itemView.findViewById(R.id.actorName);
        }
    }
}
