import { MathJax } from 'better-react-mathjax';
import React from 'react';

function Mechanics() {
	return (
		<div className="content">

			<h2><u>Mechanics Kinematics</u></h2>
			<section className="group">
				<ul>
					<li>
						<MathJax>`v=u+at`</MathJax>
					</li>
					<li>
						<MathJax>`v^2=u^2+2as`</MathJax>
					</li>
					<li>
						<MathJax>`s=((u+v)/2)t`</MathJax>
					</li>
					<li>
						<MathJax>`s=ut+1/2at^2`</MathJax>
					</li>
				</ul>
			</section>

			<h2><u>Mechanics Dynamics</u></h2>
			<section className="group">
				<ul>
					<li>
						<MathJax>`F=(dp)/(dt)=(d(mv))/(dt)`</MathJax>
					</li>
					<li>
						<MathJax>`K.E. = 1/2mv^2`</MathJax>
					</li>
					<li>
						<MathJax>`P.E. = mgh`</MathJax>
					</li>
					<li>
						<MathJax>`W=Fs`</MathJax>
					</li>
					<li>
						<MathJax>`P=Fv`</MathJax>
					</li>
					<li>
						<MathJax>`p=mv`</MathJax>
					</li>
				</ul>
			</section>

			<h2><u>Mechanics Dynamics: Circular & Rotational Motion</u></h2>
			<section className="group">
				<ul>
					<li>
						<MathJax>`s=rtheta`</MathJax>
					</li>
					<li>
						<MathJax>`v=romega`</MathJax>
						<MathJax>`omega = (d theta)/(dt)`</MathJax>
					</li>
					<li>
						<MathJax>`a=ralpha`</MathJax>
						<MathJax>`alpha = (domega)/(dt)`</MathJax>
					</li>
					<li>
						<MathJax>`a=v^2/r`</MathJax>
					</li>
					<li>
						<MathJax>`F=(mv^2)/r=mromega^2`</MathJax>
					</li>
					<li>
						<MathJax>`T=(2pir)/v`</MathJax>
					</li>
					<li>
						<MathJax>`L=Iomega`</MathJax>
					</li>
					<li>
						<MathJax>`tau=Ialpha`</MathJax>
					</li>
					<li>
						<MathJax>`W=ttheta`</MathJax>
					</li>
					<li>
						<MathJax>`K.E.=1/2Iomega^2`</MathJax>
					</li>
				</ul>
			</section>

		</div >
	);
}

export default Mechanics;
