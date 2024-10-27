package com.example.pixelspringapi.infra.repository;

import com.example.pixelspringapi.domain.entity.Image;
import com.example.pixelspringapi.domain.enums.ImageExtension;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import java.util.List;

import static com.example.pixelspringapi.infra.repository.specs.GenericSpecs.conjunction;
import static com.example.pixelspringapi.infra.repository.specs.ImageSpecs.*;
import static org.springframework.data.jpa.domain.Specification.anyOf;
import static org.springframework.data.jpa.domain.Specification.where;

public interface ImageRepository extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image> {

    /**
     *
     * @param extension
     * @param query
     * @return
     *
     *  SELECT * FROM IMAGE WHERE 1 = 1 AND EXTENSION = 'PNG' AND ( NAME LIKE 'QUERY' OR TAGS LIKE 'QUERY')
     *
     */


    //metodo para implementar a busca por extensão, nome ou tag
    default List<Image> findByExtensionAndNameOrTagsLike(ImageExtension extension, String query){
        //SELECT * FROM IMAGE WHERE 1 = 1
        Specification<Image> spec = where(conjunction());

        if(extension != null){
            //AND EXTENSION = 'PNG'
            spec = spec.and(extensionEqual(extension));
        }

        if(StringUtils.hasText(query)){
            //AND ( NAME LIKE 'QUERY' OR TAGS LIKE 'QUERY')
            // NATUREZA => %NAT%
            Specification<Image> nameOrTagsLike = anyOf(nameLike(query), tagsLike(query));

            spec = spec.and(nameOrTagsLike);

        }

        return findAll(spec);
    }
}
