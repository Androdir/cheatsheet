import { MathJax } from 'better-react-mathjax';
import React from 'react';

function Differentiation() {
	return (
		<div className="content">

			<h2><u>Derivatives</u></h2>
			<section className="group">

				<ul>
					<li>
						<table className="values">
							<thead>
								<tr>
									<th><MathJax>`f(x)`</MathJax></th>
									<th><MathJax>`dot(f)(x)`</MathJax></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><MathJax>`x^n`</MathJax></td>
									<td><MathJax>`nx^(n-1)`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`a^x`</MathJax></td>
									<td><MathJax>`a^xln(a)`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`e^x`</MathJax></td>
									<td><MathJax>`e^x`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`ln(x)`</MathJax></td>
									<td><MathJax>`1/x`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`sin(x)`</MathJax></td>
									<td><MathJax>`cos(x)`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`cos(x)`</MathJax></td>
									<td><MathJax>`-sin(x)`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`tan(x)`</MathJax></td>
									<td><MathJax>`sec^2(x)`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`cot(x)`</MathJax></td>
									<td><MathJax>`-csc^2(x)`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`csc(x)`</MathJax></td>
									<td><MathJax>`-csc(x)cot(x)`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`sec(x)`</MathJax></td>
									<td><MathJax>`-sec(x)tan(x)`</MathJax></td>
								</tr>
								<tr>
									<td><MathJax>`sec(x)`</MathJax></td>
									<td><MathJax>`sec(x)tan(x)`</MathJax></td>
								</tr>
								<tr title="product rule">
									<td><MathJax>`n*d`</MathJax></td>
									<td><MathJax>`n dotd+dotn d`</MathJax></td>
								</tr>
								<tr title="quotient rule">
									<td><MathJax>`n/d`</MathJax></td>
									<td><MathJax>`(d dotn-dotd n)/d^2`</MathJax></td>
								</tr>
							</tbody>
						</table>
					</li>
					<li title="chain rule">
						<MathJax>`(dy)/(dx)=(dy)/(du)*(du)/dx`</MathJax>
					</li>
				</ul>


			</section>

		</div>
	);
}

export default Differentiation;
