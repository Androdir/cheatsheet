import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ topics, onTopicSelect }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`sidebar ${isOpen ? 'open' : ''}`}>
			<button className="toggle-button" onClick={toggleSidebar}>
				<FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
			</button>
			<ul className="topic-list">
				{topics.map((topic, index) => (
					<li key={index} className="topic-item">
						<a href="#" onClick={() => onTopicSelect(topic)}>
							{topic}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Sidebar;
