import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MathJaxContext } from 'better-react-mathjax';

const root = ReactDOM.createRoot(document.getElementById('root'));

const config = {
	loader: { load: ["input/asciimath"] },
};

root.render(
	<React.StrictMode>
		<MathJaxContext config={config}>
			<App />
		</MathJaxContext>
	</React.StrictMode>
);
