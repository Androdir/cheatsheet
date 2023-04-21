import { MathJax } from 'better-react-mathjax';
import React from 'react';

function Integration() {
	return (
		<div className="content">

			<h2><u>Integrals</u></h2>
			<section className="group">
				<ul>
					<li>
						<table className="values">
							<thead>
								<tr>
									<th><MathJax>`f(x)`</MathJax></th>
									<th><MathJax>`int f(x) dx`</MathJax></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><MathJax>`x^n`</MathJax></td>
									<td><MathJax>`x^(n+1)/(n+1)+C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`(ax+b)^n`</MathJax></td>
									<td><MathJax>`((ax+b)^(n+1))/(a(n+1)) + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`1/x`</MathJax></td>
									<td><MathJax>`ln|x| + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`1/(ax+b)`</MathJax></td>
									<td><MathJax>`ln|ax+b|/a + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`e^(ax)`</MathJax></td>
									<td><MathJax>`e^(ax)/a + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`a^x`</MathJax></td>
									<td><MathJax>`a^x/ln(a) + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`cos(ax)`</MathJax></td>
									<td><MathJax>`sin(ax)/a + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`sin(ax)`</MathJax></td>
									<td><MathJax>`-cos(ax)/a + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`sec^2(ax)`</MathJax></td>
									<td><MathJax>`tan(ax)/a + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`sec(ax)tan(ax)`</MathJax></td>
									<td><MathJax>`sec(ax)/a + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`csc(ax)cot(ax)`</MathJax></td>
									<td><MathJax>`-csc(ax)/a + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`csc^2(ax)`</MathJax></td>
									<td><MathJax>`-cot(ax)/a + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`1/sqrt(a^2-x^2)`</MathJax></td>
									<td><MathJax>`sin^-1(x/a) + C`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`1/(a^2+x^2)`</MathJax></td>
									<td><MathJax>`tan^-1(x/a)/a + C`</MathJax></td>
								</tr>
							</tbody>
						</table>
					</li>
				</ul>
			</section>
		</div>
	);
}

export default Integration;
