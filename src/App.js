import { useState } from 'react';
import Mechanics from './components/Mechanics';
import Sidebar from './components/Sidebar';
import SimpleHarmonicMotion from './components/SimpleHarmonicMotion';
import Trigonometry from './components/Trigonometry';
import Indices from './components/Indices';
import Differentiation from './components/Differentiation';
import Geometry from './components/Geometry';
import Integration from './components/Integration';

function App() {
	const [selectedTopic, setSelectedTopic] = useState(document.cookie.split('=')[1] || "Trigonometry");

	const mathsTopics = ["Trigonometry", "Differentiation", "Integration", "Geometry", "Logarithms & Indices"];
	const physTopics = ["Mechanics", "Simple Harmonic Motion", "Waves"];

	const handleTopicSelect = (topic) => {
		setSelectedTopic(topic);
	};

	return (
		<>
			<h1>{selectedTopic}</h1>

			<Sidebar mathsTopics={mathsTopics} physTopics={physTopics} onTopicSelect={handleTopicSelect} />
			{selectedTopic === "Trigonometry" && <Trigonometry />}
			{selectedTopic === "Mechanics" && <Mechanics />}
			{selectedTopic === "Simple Harmonic Motion" && <SimpleHarmonicMotion />}
			{selectedTopic === "Logarithms & Indices" && <Indices />}
			{selectedTopic === "Differentiation" && <Differentiation />}
			{selectedTopic === "Integration" && <Integration />}
			{selectedTopic === "Geometry" && <Geometry />}
		</>
	);
}

export default App;
