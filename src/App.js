import { MathJax } from 'better-react-mathjax';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Trigonometry from './components/Trigonometry';

function App() {
	const [selectedTopic, setSelectedTopic] = useState("Trigonometry");

	const topics = ['Algebra', 'Geometry', 'Trigonometry', 'Calculus'];

	const handleTopicSelect = (topic) => {
		setSelectedTopic(topic);
	};

	return (
		<div>
			<h1>{selectedTopic}</h1>

			<Sidebar topics={topics} onTopicSelect={handleTopicSelect} />
			{selectedTopic === "Trigonometry" && <Trigonometry />}
		</div>
	);
}

export default App;
