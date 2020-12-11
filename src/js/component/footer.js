import React from "react";
import PropTypes from "prop-types";

const footer = props => {
	return (
		<footer className="page bg-dark fixed-bottom text-white py-2">
			<div className="d-flex flex-row">
				{/* <!-- Social buttons --> */}
				<ul className="list-unstyled list-inline text-center mx-auto">
					<li className="list-inline-item">
						<a className="btn-floating btn-fb mx-1">
							<i className="fab fa-facebook-f"> </i>
						</a>
					</li>
					<li className="list-inline-item">
						<a className="btn-floating btn-tw mx-1">
							<i className="fab fa-twitter"> </i>
						</a>
					</li>
					<li className="list-inline-item">
						<a className="btn-floating btn-gplus mx-1">
							<i className="fab fa-google-plus-g"> </i>
						</a>
					</li>
					<li className="list-inline-item">
						<a className="btn-floating btn-li mx-1">
							<i className="fab fa-linkedin-in"> </i>
						</a>
					</li>
					<li className="list-inline-item">
						<a className="btn-floating btn-dribbble mx-1">
							<i className="fab fa-dribbble"> </i>
						</a>
					</li>
				</ul>
				{/* <!-- Social buttons --> */}
				<div className="footer-copyright">© Armando</div>
			</div>
		</footer>
	);
};

footer.propTypes = {
	title: PropTypes.string
};

export default footer;
