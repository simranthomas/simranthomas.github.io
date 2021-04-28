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
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.view.ContextThemeWrapper;
import androidx.appcompat.widget.PopupMenu;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import org.json.JSONArray;

import java.io.IOException;
import java.util.ArrayList;

public class RecyclerViewAdapter extends RecyclerView.Adapter<RecyclerViewAdapter.ViewHolder> {

    private ArrayList<MediaItem> mediaList = new ArrayList<MediaItem>();
    private JSONArray mediaList_JSON;
    private Context context;
    private SharedPreferences sharedPreferences;
    private SharedPreferences.Editor myEdit;


    public RecyclerViewAdapter(Context context, ArrayList<MediaItem> mediaList, JSONArray mediaList_JSON) throws IOException {
        this.mediaList = mediaList;
        this.context = context;
        this.mediaList_JSON = mediaList_JSON;
        sharedPreferences = context.getSharedPreferences("MySharedPref",Context.MODE_PRIVATE);
        myEdit = sharedPreferences.edit();
        if (!sharedPreferences.contains("watchlist")) {
            myEdit.putString("watchlist","[]");
            myEdit.commit();
        }

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

        holder.popupButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                try {

                    Context wrapper = new ContextThemeWrapper(holder.popupButton.getContext(), R.style.popupMenuStyle);
                    PopupMenu popupMenu = new PopupMenu(wrapper, holder.popupButton);
                    popupMenu.getMenuInflater().inflate(R.menu.popup_menu, popupMenu.getMenu());

                    Boolean present = false;
                    JSONArray itemInWatchlist_JSON = new JSONArray(sharedPreferences.getString("watchlist", ""));
                    for (int i = 0; i < itemInWatchlist_JSON.length(); i++) {
                        if (mediaList_JSON.getJSONObject(position).getString("id").equals(itemInWatchlist_JSON.getJSONObject(i).getString("id"))) {
                            present = true;
                            popupMenu.getMenu().findItem(R.id.watchlist).setTitle("Remove From Watchlist");
                            break;
                        }
                    }
                    if (!present) {
                        popupMenu.getMenu().findItem(R.id.watchlist).setTitle("Add To Watchlist");
                    }
                    popupMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
                        @Override
                        public boolean onMenuItemClick(MenuItem menuItem) {
                            try {
                                if (menuItem.getTitle().equals("Open in TMDB")) {
                                    String url = "https://www.themoviedb.org/" + mediaList.get(position).getMediaType() + "/" + mediaList.get(position).getMediaId();
                                    Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                                    context.startActivity(browserIntent);

                                }
                                else if (menuItem.getTitle().equals("Share on Facebook")) {
                                    String url = "https://www.facebook.com/sharer/sharer.php?u=https://www.themoviedb.org/" + mediaList.get(position).getMediaType() + "/" + mediaList.get(position).getMediaId();
                                    Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                                    context.startActivity(browserIntent);
                                }
                                else if (menuItem.getTitle().equals("Share on Twitter")) {
                                    String message = "Check this out!" + "%0A" + "https://www.themoviedb.org/" + mediaList.get(position).getMediaType() + "/" + mediaList.get(position).getMediaId();
                                    String url = "https://twitter.com/intent/tweet?text=" + message;
                                    Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                                    context.startActivity(browserIntent);
                                }
                                else {
                                    Boolean presentx = false;
                                    JSONArray itemInWatchlist_JSON = new JSONArray(sharedPreferences.getString("watchlist", ""));
                                    for (int i = 0; i < itemInWatchlist_JSON.length(); i++) {
                                        if (mediaList_JSON.getJSONObject(position).getString("id").equals(itemInWatchlist_JSON.getJSONObject(i).getString("id"))) {
                                            presentx = true;
                                            break;
                                        }
                                    }
                                    if (!presentx) {
                                        itemInWatchlist_JSON.put(mediaList_JSON.getJSONObject(position));
                                        myEdit.putString("watchlist", itemInWatchlist_JSON.toString());
                                        myEdit.commit();
                                        Toast.makeText(context,  mediaList.get(position).getTitle() + " was added to Watchlist", Toast.LENGTH_SHORT).show();
                                    } else {
                                        for (int i = 0; i < itemInWatchlist_JSON.length(); i++) {
                                            if (mediaList_JSON.getJSONObject(position).getString("id").equals(itemInWatchlist_JSON.getJSONObject(i).getString("id"))) {
                                                itemInWatchlist_JSON.remove(i);
                                                break;
                                            }
                                        }
                                        myEdit.putString("watchlist", itemInWatchlist_JSON.toString());
                                        myEdit.commit();
                                        Toast.makeText(context,  mediaList.get(position).getTitle() + " was removed from Watchlist", Toast.LENGTH_SHORT).show();
                                    }
                                    //Toast.makeText(holder.popup_menu_button.getContext(), "You Clicked " + itemInWatchlist_JSON.toString(), Toast.LENGTH_SHORT).show();
                                }
                            } catch (Exception e) {
                            }
                            return true;
                        }
                    });
                    popupMenu.show();
                } catch (Exception e) {
                }
            }
        });

    }

    @Override
    public int getItemCount() {
        return mediaList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        ImageView image;
        ImageButton popupButton;

        public ViewHolder(View itemView) {
            super(itemView);
            image = itemView.findViewById(R.id.posterImg);
            popupButton = itemView.findViewById(R.id.popupButton);
        }
    }
}
