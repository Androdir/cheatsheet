import { MathJax } from 'better-react-mathjax';
import React from 'react';

function SimpleHarmonicMotion() {
	return (
		<div className="content">
			<section className="group">
				<ul>
					<li>
						<MathJax>`x=x_0sin(omegat+phi)`</MathJax>
					</li>
					<li>
						<MathJax>`v=omegax_0cos(omegat+phi)`</MathJax>
						<MathJax>`v=pmomegasqrt((x_0)^2-x^2)`</MathJax>
					</li>
					<li>
						<MathJax>`a=-omega^2x`</MathJax>
					</li>
					<li>
						<MathJax>`T=1/f=(2pi)/omega`</MathJax>
					</li>
					<li>
						<MathJax>`T=2pisqrt(m/k)`</MathJax>
					</li>
				</ul>
			</section>
		</div >
	);
}

export default SimpleHarmonicMotion;
