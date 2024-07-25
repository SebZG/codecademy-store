import '../App.css';

import CurrencyFilter from "../features/currencyFilter/CurrencyFilter.jsx"
import Inventory from "../features/inventory/Inventory.jsx";

function App({ state, dispatch }) {

	return (
		<div>
			<CurrencyFilter
				currencyFilter={state.currencyFilter}
				dispatch={dispatch}
			/>

			{/* TODO: Add SearchBar */}

			<Inventory
				inventory={state.inventory}
				currencyFilter={state.currencyFilter}
				searchTerm={state.searchTerm}
				dispatch={dispatch}
			/>

			{/* TODO: Add Cart */}
		</div>
	);
}

export default App;