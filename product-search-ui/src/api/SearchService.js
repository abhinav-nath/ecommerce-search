import axios from "axios";

class SearchService {
  search = async (searchText, pageNumber) => {
    console.log("SearchService - searchText = " + searchText);
    return await axios.get(`http://localhost:8027/v1/search?query=${searchText}&page=${pageNumber}&size=5`);
  };

  filteredSearch(searchText, filters, pageNumber) {
    return axios.get(
      `http://localhost:8027/v1/search?query=${searchText}&page=${pageNumber}&size=5&facets=${encodeURIComponent(
        JSON.stringify(filters)
      )}`
    );
  }

  categorySearch(categoryId, filters, pageNumber) {
    return axios.get(
      `http://localhost:8027/v1/search?categoryId=${categoryId}&page=${pageNumber}&size=5&facets=${encodeURIComponent(
        JSON.stringify(filters)
      )}`
    );
  }

  autoSuggest(term) {
    return axios.get(
      `http://localhost:8027/v1/search/suggestions?query=${term}&maxSuggestions=5&maxProducts=5`
    );
  }
}

export default new SearchService();