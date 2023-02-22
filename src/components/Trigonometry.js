import { MathJax } from 'better-react-mathjax';
import React from 'react';
import sin from '../res/sin.jpg';
import cos from '../res/cos.jpg';
import tan from '../res/tan.jpg';

function Trigonometry() {
	return (
		<div className="content">

			<h2><u>Basic Identities</u></h2>
			<section className="group">
				<ul>
					<li>
						<MathJax>`tantheta equiv (opp)/(adj) equiv sintheta/costheta`</MathJax>
						<MathJax>`tan(-theta) equiv -tantheta`</MathJax>
					</li>
					<li>
						<MathJax>`cottheta equiv 1/tantheta equiv costheta/sintheta`</MathJax>
					</li>
					<li>
						<MathJax>`sintheta equiv (opp)/(hyp)`</MathJax>
						<MathJax>`sintheta equiv cos(90^circ - theta)`</MathJax>
						<MathJax>`sin(-theta) equiv -sintheta`</MathJax>
					</li>
					<li>
						<MathJax>`csctheta equiv 1/sintheta`</MathJax>
					</li>
					<li>
						<MathJax>`costheta equiv (adj)/(hyp)`</MathJax>
						<MathJax>`costheta equiv cos(90^circ - theta)`</MathJax>
						<MathJax>`cos(-theta) equiv costheta`</MathJax>
					</li>
					<li>
						<MathJax>`sectheta equiv 1/costheta`</MathJax>
					</li>
				</ul>
			</section>

			<h2><u>Graphs</u></h2>
			<section className="group">
				<ul>
					<li>
						<MathJax>`y=sinx`</MathJax>
						<img src={sin} alt="sin" />
					</li>
					<li>
						<MathJax>`y=cosx`</MathJax>
						<img src={cos} alt="sin" />
					</li>
					<li>
						<MathJax>`y=tanx`</MathJax>
						<img src={tan} alt="sin" />
					</li>
				</ul>
			</section>

			<h2><u>Pythagorean Identities</u></h2>
			<section className="group">
				<ul>
					<li>
						<MathJax>`sin^2x + cos^2x equiv 1`</MathJax>
					</li>
					<li>
						<MathJax>`sec^2x-tan^2x equiv 1`</MathJax>
					</li>
					<li>
						<MathJax>`csc^2x-cot^2x=1`</MathJax>
					</li>
				</ul>
			</section>

			<h2><u>Compound Angle Identities</u></h2>
			<section className="group">
				<ul>
					<li>
						<MathJax>`sin(A pm B) equiv sinAcosB pm cosAsinB`</MathJax>
					</li>
					<li>
						<MathJax>`cos(A pm B) equiv cosAcosB mp sinAsinB`</MathJax>
					</li>
					<li>
						<MathJax>`tan(A pm B) equiv (tanA pm tanB)/(1 mp tanAtanB)`</MathJax>
					</li>
				</ul>
			</section>
			<h2><u>Double Angle Identities</u></h2>

			<section className="group">
				<ul>
					<li>
						<MathJax>`sin(2A) equiv 2sinAcosA`</MathJax>
					</li>
					<li>
						<MathJax>`cos(2A) equiv cos^2A - sin^2A`</MathJax>
						<MathJax>`cos(2A) equiv 1 - 2sin^2A`</MathJax>
						<MathJax>`cos(2A) equiv 2cos^2A - 1`</MathJax>
					</li>
					<li>
						<MathJax>`tan(2A) equiv (2tanA)/(1-tan^2A)`</MathJax>
					</li>
				</ul>
			</section>

			<h2><u>Factor Formulae</u></h2>
			<section className="group">
				<ul>
					<li>
						<MathJax>`sin(A+B)+sin(A-B) equiv 2sinAcosB`</MathJax>
					</li>
					<li>
						<MathJax>`sin(A+B)-sin(A-B) equiv 2cosAsinB`</MathJax>
					</li>
					<li>
						<MathJax>`cos(A+B)+cos(A-B) equiv 2cosAcosB`</MathJax>
					</li>
					<li>
						<MathJax>`cos(A+B)-cos(A-B) equiv -2sinAsinB`</MathJax>
					</li>
					<li>
						<MathJax>`sinA + sinB equiv 2sin((A+B)/2)cos((A-B)/2)`</MathJax>
					</li>
					<li>
						<MathJax>`sinA - sinB equiv 2cos((A+B)/2)sin((A-B)/2)`</MathJax>
					</li>
					<li>
						<MathJax>`cosA + cosB equiv 2cos((A+B)/2)cos((A-B)/2)`</MathJax>
					</li>
					<li>
						<MathJax>`cosA - cosB equiv -2sin((A+B)/2)sin((A-B)/2)`</MathJax>
					</li>
				</ul>
			</section>

			<h2><u>General Solutions</u></h2>
			<section className="group">
				<ul>
					<li>
						<MathJax>`sin(theta) = alpha ={'>'} theta = 180^circn + (-1)^nsin^-1(alpha)`</MathJax>
					</li>
					<li>
						<MathJax>`cos(theta) = alpha ={'>'} theta = 360^circn pm cos^-1(alpha)`</MathJax>
					</li>
					<li>
						<MathJax>`tan(theta) = alpha ={'>'} theta = 180^circn + tan^-1(alpha)`</MathJax>
					</li>
				</ul>
			</section>

			<h2><u>Function Values</u></h2>
			<section className="group">
				<table className="values">
					<thead>
						<tr>
							<th><MathJax>`x`</MathJax></th>
							<th><MathJax>`sinx`</MathJax></th>
							<th><MathJax>`cosx`</MathJax></th>
							<th><MathJax>`tanx`</MathJax></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><MathJax>`0^circ`</MathJax></td>
							<td><MathJax>`0`</MathJax></td>
							<td><MathJax>`1`</MathJax></td>
							<td><MathJax>`0`</MathJax></td>
						</tr>
						<tr>
							<td><MathJax>`30^circ`</MathJax></td>
							<td><MathJax>`1/2`</MathJax></td>
							<td><MathJax>`sqrt3/2`</MathJax></td>
							<td><MathJax>`sqrt3/3`</MathJax></td>
						</tr>
						<tr>
							<td><MathJax>`45^circ`</MathJax></td>
							<td><MathJax>`sqrt2/2`</MathJax></td>
							<td><MathJax>`sqrt2/2`</MathJax></td>
							<td><MathJax>`1`</MathJax></td>
						</tr>
						<tr>
							<td><MathJax>`60^circ`</MathJax></td>
							<td><MathJax>`sqrt3/2`</MathJax></td>
							<td><MathJax>`1/2`</MathJax></td>
							<td><MathJax>`sqrt3`</MathJax></td>
						</tr>
						<tr>
							<td><MathJax>`90^circ`</MathJax></td>
							<td><MathJax>`1`</MathJax></td>
							<td><MathJax>`0`</MathJax></td>
							<td><MathJax>`infty`</MathJax></td>
						</tr>
						<tr>
							<td><MathJax>`180^circ`</MathJax></td>
							<td><MathJax>`0`</MathJax></td>
							<td><MathJax>`-1`</MathJax></td>
							<td><MathJax>`0`</MathJax></td>
						</tr>
						<tr>
							<td><MathJax>`270^circ`</MathJax></td>
							<td><MathJax>`-1`</MathJax></td>
							<td><MathJax>`0`</MathJax></td>
							<td><MathJax>`infty`</MathJax></td>
						</tr>
						<tr>
							<td><MathJax>`360^circ`</MathJax></td>
							<td><MathJax>`0`</MathJax></td>
							<td><MathJax>`1`</MathJax></td>
							<td><MathJax>`0`</MathJax></td>
						</tr>
					</tbody>
				</table>
			</section>
		</div >
	);
}

export default Trigonometry;
