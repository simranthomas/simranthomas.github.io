package com.example.uscfilms;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import org.json.JSONArray;

import java.util.ArrayList;

public class MyRecyclerViewAdapter extends RecyclerView.Adapter<MyRecyclerViewAdapter.ViewHolder> {

    public JSONArray getMedialist_JSON() {
        return medialist_JSON;
    }

    public void swapItems(int from, int to) {
        Log.d("mylog", from+" "+to);
        if (from == to) return;
        try {

            JSONArray x = new JSONArray();
            if (to < from) {
                for(int i=0;i<medialist_JSON.length();i++)
                {
                    if(i == to) {
                        x.put(medialist_JSON.getJSONObject(from));
                        x.put(medialist_JSON.getJSONObject(to));

                    } else if (i == from) {
                    } else {
                        x.put(medialist_JSON.getJSONObject(i));
                    }
                }
            } else  {

                for(int i=0;i<medialist_JSON.length();i++)
                {
                    if(i == from) {

                    } else if(i == to) {
                        x.put(medialist_JSON.getJSONObject(to));
                        x.put(medialist_JSON.getJSONObject(from));
                    } else {
                        x.put(medialist_JSON.getJSONObject(i));
                    }
                }

            }


            medialist_JSON = x;
            myEdit.putString("watchlist", x.toString());
            myEdit.commit();
            myEdit.apply();
        } catch (Exception e) {
            notifyItemMoved(from, to);
            e.printStackTrace();
        }
    }

    private JSONArray medialist_JSON = new JSONArray();
    private LayoutInflater mInflater;
    private ItemClickListener mClickListener;
    private Context context;
    private SharedPreferences sharedPreferences;
    private SharedPreferences.Editor myEdit;
    private TextView emptyWatchlist;

    MyRecyclerViewAdapter(Context context, JSONArray mediaList_JSON, TextView emptyWatchlist) {

        this.emptyWatchlist = emptyWatchlist;
        this.mInflater = LayoutInflater.from(context);
        this.medialist_JSON = mediaList_JSON;
        this.context = context;

        sharedPreferences = context.getSharedPreferences("MySharedPref",Context.MODE_PRIVATE);
        myEdit = sharedPreferences.edit();
        if (!sharedPreferences.contains("watchlist")) {
            myEdit.putString("watchlist","[]");
            myEdit.commit();
        }
    }

    @Override
    @NonNull
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = mInflater.inflate(R.layout.watchlist_item, parent, false);

        return new ViewHolder(view);
    }

    // binds the data to the TextView in each cell
    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {

        try {
            Glide.with(context)
                    .asBitmap()
                    .load("https://image.tmdb.org/t/p/w500" + medialist_JSON.getJSONObject(position).getString("poster_path"))
                    .into(holder.image);

            String mediaType = medialist_JSON.getJSONObject(position).getString("media_type");
            if (mediaType.equals("movie")) {
                holder.mediaType.setText("Movie");
            } else {
                holder.mediaType.setText("TV");
            }

            holder.image.setOnClickListener(v -> {
                try {
                    Intent myIntent = new Intent(context, DetailsActivity.class);
                    myIntent.putExtra("mediaType", medialist_JSON.getJSONObject(position).getString("media_type"));
                    myIntent.putExtra("mediaId", medialist_JSON.getJSONObject(position).getString("id"));
                    context.startActivity(myIntent);
                }
                catch (Exception e) {
                    e.printStackTrace();
                }
            });

            holder.remove_button.setOnClickListener(new View.OnClickListener() {

                @Override
                public void onClick(View v) {
                    try {

                        JSONArray watchlist_JSON = new JSONArray(sharedPreferences.getString("watchlist", ""));

                        for (int i=0;i<watchlist_JSON.length();i++) {
                            if(getMedialist_JSON().getJSONObject(position).getString("id").equals(watchlist_JSON.getJSONObject(i).getString("id"))) {
                                String title_for_toast = getMedialist_JSON().getJSONObject(position).getString("title");
                                watchlist_JSON.remove(i);
                                medialist_JSON.remove(i);

                                myEdit.putString("watchlist", watchlist_JSON.toString());
                                myEdit.commit();
                                notifyItemRemoved(i);
                                notifyItemRangeChanged(i,getItemCount());

                                Toast.makeText(context, "\"" + title_for_toast + "\"" + " was removed from favourites", Toast.LENGTH_SHORT).show();
                               if(getItemCount() == 0) {
                                   emptyWatchlist.setVisibility(emptyWatchlist.VISIBLE);
                               }
                                break;
                            }
                        }

                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            });

        }catch(Exception e){

        }
    }

    @Override
    public int getItemCount() {
        return medialist_JSON.length();
    }

    public class ViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        ImageView image;
        ImageButton remove_button;
        TextView mediaType;

        ViewHolder(View itemView) {
            super(itemView);
            image = itemView.findViewById(R.id.posterImg);
            remove_button = itemView.findViewById(R.id.imageButton);
            mediaType = itemView.findViewById(R.id.text_mediaType);

            itemView.setOnClickListener(this);
        }

        @Override
        public void onClick(View view) {
            if (mClickListener != null) mClickListener.onItemClick(view, getAdapterPosition());
        }
    }

    void setClickListener(ItemClickListener itemClickListener) {
        this.mClickListener = itemClickListener;
    }

    public interface ItemClickListener {
        void onItemClick(View view, int position);
    }
}