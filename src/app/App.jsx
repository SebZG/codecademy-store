import '../App.css';

import Inventory from "../features/inventory/Inventory.jsx";

function App({ state, dispatch }) {

	return (
		<div>
			{/* TODO: Add CurrencyFilter */}

			{/* TODO: Add SearchBar */}

			{/* TODO: Add Inventory */}
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