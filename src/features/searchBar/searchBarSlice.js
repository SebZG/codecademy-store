export const setSearchTerm = (term) => {
   return {
      type: "searchBar/SET_SEARCH_TERM",
      payload: term
   }
}

export const clearSearchTerm = () => {
   return {
      type: "searchBar/CLEAR_SEARCH_TERM"
   }
}

const initialTerm = "";
export const searchBarReducer = (searchTerm = initialTerm, action) => {
   switch (action.type) {
      case "searchBar/SET_SEARCH_TERM":
         return action.payload;
      case "searchBar/CLEAR_SEARCH_TERM":
         return "";
      default:
         return searchTerm;
   }
}