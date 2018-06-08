import React from 'react';
import PropTypes from 'prop-types';
import './PageNotFound.css';

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function PageNotFound({ location }) {
	console.log('Route unmatched: ', location.pathname)

	return (
		<div className="pageNotFound"
			style={{backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/404-background.jpg)'}}>
			<div className="pageNotFoundText">
				<div className="pageHeader"> Uh oh! Something went wrong ... </div>
				<div className="pageSubHeader"> Use the navigation tools from the header or footer to navigate to a valid page </div>
			</div>
		</div>
	);
}

PageNotFound.propTypes = propTypes;