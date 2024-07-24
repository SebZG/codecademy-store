export const addItem = (itemToAdd) => {
   return {
      type: "cart/ADD_ITEM",
      payload: itemToAdd
   }
}

export const changeItemQuantity = (name, newQuantity) => {
   return {
      type: "cart/CHANGE_ITEM_QUANTITY",
      payload: { name, newQuantity }
   }
}

const initialCart = {};
export const cartReducer = (cart = initialCart, action) => {
   switch (action.type) {
      case "cart/ADD_ITEM": {
         const { name, price } = action.payload;
         const quantity = cart[name] ? cart[name].quantity + 1 : 1;
         const newItem = { price, quantity };
         return {
            ...cart,
            [name]: newItem
         }
      }
      case "cart/CHANGE_ITEM_QUANTITY": {
         const { name, newQuantity } = action.payload;
         const itemToUpdate = cart[name];

         const updatedItem = {
            ...itemToUpdate,
            quantity: newQuantity
         }
         return {
            ...cart,
            [name]: updatedItem
         }
      }
      default:
         return cart;
   }
}