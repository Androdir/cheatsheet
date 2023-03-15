import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ mathsTopics, physTopics, onTopicSelect }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const onTopicClick = topic => {
		onTopicSelect(topic);
		toggleSidebar(); // close sidebar after selecting a topic
		document.cookie = `topic=${topic}`; // save topic to cookie
	}

	return (
		<div className={`sidebar ${isOpen ? 'open' : ''}`}>
			<button className="toggle-button" onClick={toggleSidebar}>
				<FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
			</button>
			<ul className="sidebar-list">
				<p className="sidebar-title"><b><u>Maths</u></b></p>
				{mathsTopics.map((topic, index) => (
					<li key={index} className="topic-item">
						<button onClick={() => onTopicClick(topic)}>
							{topic}
						</button>
					</li>
				))}
				<p className="sidebar-title"><b><u>Physics</u></b></p>
				{physTopics.map((topic, index) => (
					<li key={index} className="topic-item">
						<button onClick={() => onTopicClick(topic)}>
							{topic}
						</button>
					</li>
				))}
			</ul>

			<a className="link" href="https://www.symbolab.com/solver/step-by-step" target="_blank" rel="noreferrer">
				<p>:D</p>
			</a>
		</div>
	);
}

export default Sidebar;
