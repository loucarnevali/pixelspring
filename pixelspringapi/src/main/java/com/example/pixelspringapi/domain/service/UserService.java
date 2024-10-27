package com.example.pixelspringapi.domain.service;

import com.example.pixelspringapi.domain.AccessToken;
import com.example.pixelspringapi.domain.entity.User;

public interface UserService {

    User getByEmail(String email);
    User save(User user);
    AccessToken authenticate(String email, String password);
}
