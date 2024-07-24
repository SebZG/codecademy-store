import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './app/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const render = () => {
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

render();