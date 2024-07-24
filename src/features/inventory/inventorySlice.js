import { inventoryData } from "../../data.js";

export const loadData = (data) => {
   return {
      type: "inventory/LOAD_DATA",
      payload: inventoryData
   }
}

const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, action) => {
   switch (action.type) {
      case "inventory/LOAD_DATA":
         return action.payload;
      default:
         return inventory;
   }
}