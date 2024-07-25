import { useEffect } from "react";

import {
   calculatePrice,
   getCurrencySymbol
} from "../../utilities/utilities.js";

import { addItem } from "../cart/cartSlice.js";
import { loadData } from "./inventorySlice.js";

const Inventory = ({
   inventory,
   currencyFilter,
   searchTerm,
   dispatch
}) => {

   useEffect(() => {
      dispatch(loadData())
   }, [dispatch]);

   const onClickHandler = (inventoryItem) => {
      dispatch(addItem(inventoryItem));
   }

   const getFilteredItems = (items, searchTerm) => {
      return items.filter(item =>
         item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
   }

   const filteredInventory = getFilteredItems(inventory, searchTerm);

   const createInventoryItem = (inventoryItem) => {
      const { price, name, img } = inventoryItem;
      const displayPrice = calculatePrice(price, currencyFilter);

      return (
         <li key={name} className="item">
            <img src={img} alt={""} />
            <h3>{name}</h3>
            <h3 className="price">
               {getCurrencySymbol(currencyFilter)}
               {displayPrice.toFixed(2)}
               {currencyFilter}
            </h3>
            <button onClick={() => onClickHandler(inventoryItem)}
            >
               Add to Cart
            </button>
         </li>
      )
   }

   return (
      !inventory ? (
         <p> Sorry, no products are currently available...</p>
      ) : (
         <ul id="inventory-container">
            {filteredInventory.map(createInventoryItem)}
         </ul>
      )
   )
}

export default Inventory;