import { MathJax } from 'better-react-mathjax';
import React from 'react';

function Geometry() {
	return (
		<div className="content">

			<h2><u>Properties of a Straight Line</u></h2>
			<section className="group">
				<ul>
					<li>
						<table className="values-blank">
							<tbody>
								<tr>
									<td>Dist. between 2 pts.</td>
									<td><MathJax>`AB = sqrt((x_1 - x_2)^2 + (y_1 - y_2)^2)`</MathJax></td>
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
									<td>Midpont</td>
									<td><MathJax>`M((x_1 + x_2)/2, (y_1 + y_2)/2)`</MathJax></td>
								</tr>
								<tr>
									<td>Gradient</td>
									<td>
										<MathJax>`(y_1 - y_2)/(x_1 - x_2)`</MathJax>
										<MathJax>`m = tantheta`</MathJax>
									</td>
								</tr>
								<tr>
									<td>Angle between 2 lines</td>
									<td><MathJax>`theta=tan^-1|(m_1 - m_2)/(1+m_1m_2)|`</MathJax></td>
								</tr>
								<tr>
									<td>Parallel Lines</td>
									<td><MathJax>`m_1 = m_2`</MathJax></td>
								</tr>
								<tr>
									<td>Perpendicular Lines</td>
									<td><MathJax>`m_1 * m_2 = -1`</MathJax></td>
								</tr>
								<tr>
									<td>General equations</td>
									<td>
										<MathJax>`Ax + By + C = 0`</MathJax>
										<MathJax>`y = mx + c`</MathJax>
										<MathJax>`y-y_1=m(x-x_1)`</MathJax>
									</td>
								</tr>
								<tr>
									<td>Dist. between pt. and line</td>
									<td><MathJax>`d=|(ah+bk+c)/sqrt(a^2+b^2)|`</MathJax></td>
								</tr>
							</tbody>
						</table>
					</li>
				</ul>
			</section>
		</div>
	);
}

export default Geometry;
