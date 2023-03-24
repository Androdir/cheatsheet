import { useState } from 'react';
import Mechanics from './components/Mechanics';
import Sidebar from './components/Sidebar';
import SimpleHarmonicMotion from './components/SimpleHarmonicMotion';
import Trigonometry from './components/Trigonometry';
import Indices from './components/Indices';
import Differentiation from './components/Differentiation';
import Geometry from './components/Geometry';

function App() {
	const [selectedTopic, setSelectedTopic] = useState(document.cookie.split('=')[1] || "Trigonometry");

	const mathsTopics = ["Trigonometry", "Differentiation", "Quadratics", "Logarithms & Indices", "Geometry"];
	const physTopics = ["Mechanics", "Simple Harmonic Motion", "Waves"];

	const handleTopicSelect = (topic) => {
		setSelectedTopic(topic);
	};

	return (
		<div>
			<h1>{selectedTopic}</h1>

			<Sidebar mathsTopics={mathsTopics} physTopics={physTopics} onTopicSelect={handleTopicSelect} />
			{selectedTopic === "Trigonometry" && <Trigonometry />}
			{selectedTopic === "Mechanics" && <Mechanics />}
			{selectedTopic === "Simple Harmonic Motion" && <SimpleHarmonicMotion />}
			{selectedTopic === "Logarithms & Indices" && <Indices />}
			{selectedTopic === "Differentiation" && <Differentiation />}
			{selectedTopic === "Geometry" && <Geometry />}
		</div>
	);
}

export default App;
