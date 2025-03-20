package com.piaus.shopapp.service.interf;


import com.piaus.shopapp.dto.LoginRequest;
import com.piaus.shopapp.dto.Response;
import com.piaus.shopapp.dto.UserDto;
import com.piaus.shopapp.entity.User;

public interface UserService {
    Response registerUser(UserDto registrationRequest);
    Response loginUser(LoginRequest loginRequest);
    Response getAllUsers();
    User getLoginUser();
    Response getUserInfoAndOrderHistory();
}
