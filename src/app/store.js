import { legacy_createStore as createStore, combineReducers } from "redux";

import { inventoryReducer } from "../features/inventory/inventorySlice.js";
// import { cartReducer } from "../features/cart/cartSlice.js";
// import { currencyFilterReducer } from "../features/currencyFilter/CurrencyFilterSlice.js";
// import { searchBarReducer } from "../features/searchBar/searchBarSlice.js";

export const store = createStore(combineReducers({
   inventory: inventoryReducer,
   // cart: cartReducer,
   // currencyFilter: currencyFilterReducer,
   // searchTerm: searchBarReducer
}));