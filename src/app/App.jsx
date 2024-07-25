import '../App.css';

import CurrencyFilter from "../features/currencyFilter/CurrencyFilter.jsx"
import SearchBar from '../features/searchBar/SearchBar.jsx';
import Inventory from "../features/inventory/Inventory.jsx";
import Cart from '../features/cart/Cart.jsx';

function App({ state, dispatch }) {

	return (
		<div>
			<CurrencyFilter
				currencyFilter={state.currencyFilter}
				dispatch={dispatch}
			/>

			<SearchBar
				searchTerm={state.searchTerm}
				dispatch={dispatch}
			/>

			<Inventory
				inventory={state.inventory}
				currencyFilter={state.currencyFilter}
				searchTerm={state.searchTerm}
				dispatch={dispatch}
			/>

			<Cart
				cart={state.cart}
				currencyFilter={state.currencyFilter}
				dispatch={dispatch}
			/>
		</div>
	);
}

export default App;