import React from "react";
import PropTypes from "prop-types";

const Jumbo = props => {
	return (
		<div className="jumbotron container">
			<h1 className="display-4">{props.headline}</h1>
			<p>{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonUrl}
				role="button">
				{props.buttonName}
			</a>
		</div>
	);
};

Jumbo.propTypes = {
	headline: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonName: PropTypes.string
};

export default Jumbo;
