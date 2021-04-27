package com.example.uscfilms;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class ReviewRecyclerViewAdapter extends RecyclerView.Adapter<ReviewRecyclerViewAdapter.ViewHolder> {

    private ArrayList<ReviewItem> reviewDataList;
    private Context context;

    public ReviewRecyclerViewAdapter(Context context, ArrayList<ReviewItem> reviewDataList) {
        this.reviewDataList = reviewDataList;
        this.context = context;
    }

    @NonNull
    @Override
    public ReviewRecyclerViewAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.review_card_layout, parent, false);

        return new ReviewRecyclerViewAdapter.ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        Date createdDate = null;
        try {
            createdDate = simpleDateFormat.parse(reviewDataList.get(position).getCreatedAt());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        DateFormat df = new SimpleDateFormat("E, MMM dd yyyy");
        String createdAt = df.format(createdDate);

        String authorDateText = "by " + reviewDataList.get(position).getAuthor() + " on " + createdAt;

        holder.author.setText(authorDateText);

        int rating = Integer.parseInt(reviewDataList.get(position).getRating()) / 2;
        String ratingText = rating + "/5";
        holder.rating.setText(ratingText);

        holder.review.setText(reviewDataList.get(position).getContent());

        holder.author.setOnClickListener(v -> {
            Intent myIntent = new Intent(context, ReviewsActivity.class);
            myIntent.putExtra("authorDateText", authorDateText);
            myIntent.putExtra("ratingText", ratingText);
            myIntent.putExtra("reviewText", reviewDataList.get(position).getContent());
            context.startActivity(myIntent);
        });
        holder.review.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myIntent = new Intent(context, ReviewsActivity.class);
                myIntent.putExtra("authorDateText", authorDateText);
                myIntent.putExtra("ratingText", ratingText);
                myIntent.putExtra("reviewText", reviewDataList.get(position).getContent());
                context.startActivity(myIntent);
            }
        });
        holder.rating.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent myIntent = new Intent(context, ReviewsActivity.class);
                myIntent.putExtra("authorDateText", authorDateText);
                myIntent.putExtra("ratingText", ratingText);
                myIntent.putExtra("reviewText", reviewDataList.get(position).getContent());
                context.startActivity(myIntent);
            }
        });
    }

    @Override
    public int getItemCount() {
        return reviewDataList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        TextView author;
        TextView rating;
        TextView review;

        public ViewHolder(View itemView) {
            super(itemView);
            author = itemView.findViewById(R.id.authorDate);
            rating = itemView.findViewById(R.id.rating);
            review = itemView.findViewById(R.id.reviewText);

        }
    }
}
