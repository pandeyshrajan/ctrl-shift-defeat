package com.team4.project.Entity;

import com.team4.project.Entity.Profile;
import lombok.Data;
import lombok.Getter;

@Data
public class LoginResponse {
    private Profile userProfile;
    private String loginStatus="NOT FOUND";
    private boolean isAdmin=false;

    public LoginResponse(Profile userProfile, String loginStatus, boolean isAdmin) {
        this.userProfile = userProfile;
        this.loginStatus = loginStatus;
        this.isAdmin = isAdmin;
    }
    public LoginResponse(){

    }
}
