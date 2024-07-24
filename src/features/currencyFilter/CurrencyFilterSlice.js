export const setCurrency = (currency) => {
   return {
      type: "currencyFilter/SET_CURRENCY",
      payload: currency
   }
}

const initialCurrencyFilter = "USD";
export const currencyFilterReducer = (currencyFilter = initialCurrencyFilter, action) => {
   switch (action.type) {
      case "currencyFilter/SET_CURRENCY":
         return action.payload;
      default:
         return currencyFilter;
   }
}