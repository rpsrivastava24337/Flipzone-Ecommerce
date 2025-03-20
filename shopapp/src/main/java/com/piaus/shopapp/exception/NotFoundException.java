package com.piaus.shopapp.exception;

public class NotFoundException extends RuntimeException{

    public NotFoundException(String message){
        super(message);
    }
}
