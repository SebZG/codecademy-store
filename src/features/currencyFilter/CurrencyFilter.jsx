import { currenciesData } from "../../data.js";
import { setCurrency } from "./currencyFilterSlice.js";

const CurrencyFilter = ({ currencyFilter, dispatch }) => {

   const onClickHandler = (currency) => {
      dispatch(setCurrency(currency));
   }

   const createCurrencyButton = (currency) => {
      return (
         <button
            className={`currency-button ${currencyFilter === currency && "selected"}`}
            key={currency}
            onClick={() => onClickHandler(currency)}
         >
            {currency}
         </button >
      )
   }

   return (
      <div id="currency-filters-container">
         <h3>Choose a currency</h3>
         {currenciesData.map(createCurrencyButton)}
      </div>
   )
}

export default CurrencyFilter;