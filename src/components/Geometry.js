import { MathJax } from 'better-react-mathjax';
import React from 'react';
import MathText from './MathText';
import Modal from './Modal';

function Geometry() {
	return (
		<div className="content">
			<h2><u>Properties of a Straight Line</u></h2>
			<section className="group">
				<table className="values-blank">
					<tbody>
						<tr>
							<td>Dist. between 2 pts.</td>
							<td><MathJax>`d = sqrt((x_1 - x_2)^2 + (y_1 - y_2)^2)`</MathJax></td>
						</tr>
						<tr>
							<td>Internal Division</td>
							<td><MathJax>`((lambdax_2+mux_1)/(lambda + mu), (lambday_2+muy_1)/(lambda + mu))`</MathJax></td>
						</tr>
						<tr>
							<td>External Division</td>
							<td><MathJax>`((lambdax_2-mux_1)/(lambda - mu), (lambday_2-muy_1)/(lambda - mu))`</MathJax></td>
						</tr>
						<tr>
							<td>Midpoint</td>
							<td><MathJax>`M((x_1 + x_2)/2, (y_1 + y_2)/2)`</MathJax></td>
						</tr>
						<Modal
							element={<tr>
								<td>Gradient</td>
								<td>
									<MathJax>`m = (y_1 - y_2)/(x_1 - x_2)`</MathJax>
									<MathJax>`m = tantheta`</MathJax>
								</td>
							</tr>}
							title="Gradient"
							content={<MathText text={["`theta`", " is the angle the line makes with the positive x-axis.\n", "`(x_1, y_1)`", " and ", "`(x_2, y_2)`", " are the coordinates of 2 points on the line."]} />}
						/>
						<tr>
							<td>Angle between 2 lines</td>
							<td><MathJax>`theta=tan^-1|(m_1 - m_2)/(1+m_1m_2)|`</MathJax></td>
						</tr>
						<Modal
							element={<tr>
								<td>Parallel Lines</td>
								<td><MathJax>`m_1 = m_2`</MathJax></td>
							</tr>}
							title="Parallel Lines"
							content={<MathText text={["The gradients of the 2 lines (", "`m_1`", " and ", "`m_2`", ") are equal for parallel lines."]} />}
						/>

						<tr>
							<td>Perpendicular Lines</td>
							<td><MathJax>`m_1 * m_2 = -1`</MathJax></td>
						</tr>
						<tr>
							<td>General equations</td>
							<td>
								<MathJax>`ax + by + c = 0`</MathJax>
								<MathJax>`y = mx + c`</MathJax>
								<MathJax>`y-y_1=m(x-x_1)`</MathJax>
							</td>
						</tr>
						<Modal 
							element={<tr>
								<td>Dist. between pt. and line</td>
								<td><MathJax>`d=|(ah+bk+c)/sqrt(a^2+b^2)|`</MathJax></td>
							</tr>}
							title="Distance between a point and a line"
							content={<MathText text={["`a`", ", ", "`b`", ", and ", "`c`", " are the coefficients of the general equation of the line.\n", "`h`", " and ", "`k`", " are the coordinates of the point."]} />}
						/>
						
					</tbody>
				</table>
			</section>

		</div>
	);
}

export default Geometry;
