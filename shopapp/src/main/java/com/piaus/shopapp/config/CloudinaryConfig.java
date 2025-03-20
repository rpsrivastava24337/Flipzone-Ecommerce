package com.piaus.shopapp.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dyqqzhcxv",
                "api_key", "256228356146595",
                "api_secret", "DNiRo545yLtziHCI4oMmY2JZmyo",
                "secure", true));
    }
}
