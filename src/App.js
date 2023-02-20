import { MathJax } from 'better-react-mathjax';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h4>helo :smiley:</h4>
				<MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>

			</header>
		</div>
	);
}

export default App;
