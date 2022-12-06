package com.codecafe.search.helper;

import org.opensearch.index.query.TermQueryBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class QueryPreProcessor {

  @Value("${app.search.rules}")
  private List<String> rules;

  public String getPreProcessingFilters(String query) {
    if ("apple".equals(query)) {
      return new TermQueryBuilder("department.raw", "Mobile Phones") + ",";
    }
    return null;
  }

}
