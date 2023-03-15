import { MathJax } from 'better-react-mathjax';
import React from 'react';

function Indices() {
	return (
		<div className="content">

			<h2><u>Logarithms</u></h2>
			<section className="group">
				<ul>
					<li>
						<MathJax>`log_a(a)=1`</MathJax>
					</li>
					<li>
						<MathJax>`log_n(1)=0`</MathJax>
					</li>
					<li>
						<MathJax>`log_n(a)-log_n(b)=log_n(a/b)`</MathJax>
					</li>
					<li>
						<MathJax>`log_n(a)+log_n(b)=log_n(ab)`</MathJax>
					</li>
					<li>
						<MathJax>`blog_n(a)=log_n(a)^b`</MathJax>
					</li>
					<li>
						<div style={{"fontSize": "20px"}}><MathJax style={{"display": "inline"}}>`log_n(a)=b {"<"}={">"} n^b=a`</MathJax>&nbsp;&nbsp;&nbsp;&nbsp;(<MathJax style={{"display": "inline"}}>`a{">"}0, n{">"}0, n != 1`</MathJax>)</div>
					</li>
					<li>
						<MathJax>`log_(n^b)(a)=1/blog_n(a)`</MathJax>
					</li>
					<li>
						<MathJax>`log_a(b)=log_c(b)/log_c(a)`</MathJax>
					</li>
				</ul>
			</section>

			<h2><u>Indices</u></h2>
			<section className="group">
				<ul>
					<li>
						<MathJax>`a^m*a^n=a^(m+n)`</MathJax>
					</li>
					<li>
						<MathJax>`a^m div a^n=a^(m-n)`</MathJax>
					</li>
					<li>
						<MathJax>`(a^m)^n=a^(mn)`</MathJax>
					</li>
					<li>
						<MathJax>`a^0=1`</MathJax>
					</li>
					<li>
						<MathJax>`a^(-n)=1/a^n`</MathJax>
					</li>
					<li>
						<MathJax>`a^(m/n)=(root(n)(a))^m`</MathJax>
					</li>
				</ul>
			</section>

		</div>
	);
}

export default Indices;
