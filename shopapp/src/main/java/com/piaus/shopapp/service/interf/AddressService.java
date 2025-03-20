package com.piaus.shopapp.service.interf;


import com.piaus.shopapp.dto.AddressDto;
import com.piaus.shopapp.dto.Response;

public interface AddressService {
    Response saveAndUpdateAddress(AddressDto addressDto);
}
