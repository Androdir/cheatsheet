import { MathJax } from 'better-react-mathjax';
import React from 'react';

function MathText({ text }) {
	if (!text) {
		return null;
	}
	return (
		<div className="math-text">
			{text.map((t, i) => {
				if (t.includes("`")) {
					return <MathJax key={i}>{t}</MathJax>;
				} else {
					return <span key={i}>{t}</span>;
				}
			})}
		</div>
	);
};

export default MathText;
