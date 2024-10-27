package com.example.pixelspringapi.domain.service;

import com.example.pixelspringapi.domain.entity.Image;
import com.example.pixelspringapi.domain.enums.ImageExtension;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface ImageService {

    @Transactional
    Image save(Image image);

    Optional<Image> getById(String id);

    List<Image> search(ImageExtension extension, String query);

}
