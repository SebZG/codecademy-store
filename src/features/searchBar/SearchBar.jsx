import { setSearchTerm, clearSearchTerm } from "./searchBarSlice.js";

const searchIconURL = "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg";
const clearIconURL = "https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg";

const SearchBar = ({ searchTerm, dispatch }) => {

   const onSearchChangeHandler = (e) => {
      const userInput = e.target.value;
      dispatch(setSearchTerm(userInput));
   }

   const onClearSearchHandler = () => {
      dispatch(clearSearchTerm());
   }

   return (
      <div id="search-container">
         <img id="search-icon" src={searchIconURL} alt="" />
         <input
            id="search"
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={onSearchChangeHandler}
         />
         {searchTerm.length > 0 && (
            <button
               id="search-clear-button"
               type="button"
               onCLick={onClearSearchHandler}
            >
               <img src={clearIconURL} alt="" />
            </button>
         )}
      </div>
   )
}

export default SearchBar;