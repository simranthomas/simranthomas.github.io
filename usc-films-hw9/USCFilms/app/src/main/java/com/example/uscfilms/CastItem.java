package com.example.uscfilms;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class CastItem {

    private String profilePath;
    private String name;

    public CastItem(String name, String profilePath) {
        this.name = name;
        this.profilePath = profilePath;
    }

    public String getName() {
        return name;
    }

    public String getProfilePath() {
        return profilePath;
    }
}
