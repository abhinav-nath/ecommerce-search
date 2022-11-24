package com.codecafe.search.config;

import com.codecafe.search.model.FacetData;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Component
@RequiredArgsConstructor
public class FacetsConverter implements Converter<String, List<FacetData>> {

    private final ObjectMapper objectMapper;

    @Override
    public List<FacetData> convert(String source) {
        try {
            if ("null".equals(source))
                return Collections.emptyList();

            return Arrays.asList(objectMapper.readValue(source, FacetData[].class));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}