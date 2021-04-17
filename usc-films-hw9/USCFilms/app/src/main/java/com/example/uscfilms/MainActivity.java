package com.example.uscfilms;

import androidx.appcompat.app.AppCompatActivity;

import androidx.fragment.app.Fragment;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import com.google.android.material.bottomnavigation.BottomNavigationView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setTheme(R.style.Theme_USCFilms);
        setContentView(R.layout.activity_main);



        BottomNavigationView bottomNavBar = findViewById(R.id.bottom_navigation);
        bottomNavBar.setOnNavigationItemSelectedListener(navListener);

        getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, new HomeFragment()).commit();
    }

    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.homepage_menu, menu);
        return true;
    }

    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.movie_tab:
                System.out.println("movie");
                return true;

            case R.id.tv_tab:

                return true;

            default:
                // If we got here, the user's action was not recognized.
                // Invoke the superclass to handle it.
                return super.onOptionsItemSelected(item);

        }
    }

    private BottomNavigationView.OnNavigationItemSelectedListener navListener =
            item -> {
                Fragment selectedFragment = null;
                switch(item.getItemId()) {

                    case R.id.nav_home: selectedFragment = new HomeFragment();
                                        break;
                    case R.id.nav_search: selectedFragment = new SearchFragment();
                                        break;
                    case R.id.nav_watchlist: selectedFragment = new WatchlistFragment();
                                        break;

                }
                getSupportFragmentManager().beginTransaction().replace(R.id.fragment_container, selectedFragment).commit();
                return true;
            };
}