package com.example.pixelspringapi.domain.exception;

public class DuplicatedTupleException extends RuntimeException{
    public DuplicatedTupleException(String message){
        super(message);
    }
}
