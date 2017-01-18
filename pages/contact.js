import React from 'react'

export default class ReactComponent extends React.Component {

  render () {
    return (
      <div>
        <div className="Contact1"> 
			<h2 id="Con"> Con </h2>
			<h1> Looking to get in touch? </h1>
			<div>
				<p> Whether you are interested on working together, have a project for me, or would just like to talk,
				I am always available to connect with. </p>
			</div>
			<div>
				<p> Feel free to contact me if you have any questions or comments that I can answer for you.
				I will try my best to communicate back within 24 hours.  </p>
			</div>
		</div>
		<div className="Contact2"> 
			<h2 id="tact"> tact </h2>
			<h1> Here's my details </h1>
			<div>
				<a href = "mailto: shdh8888@yahoo.ca?Subject=Contact%20Shivam" target="top"> 
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/New_Logo_Gmail.svg/500px-New_Logo_Gmail.svg.png" />
				</a>
			</div>
			<div>
				<p> Email me at Gmail </p>
			</div>
			<div>
				<a href = "www.github.com/ShivamDh">
					<img src="http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png" />
				</a>
			</div>
			<div>
				<p> Visit GitHub (ShivamDh) to view my projects </p>
			</div>
			<div>
				<a href = "https://www.linkedin.com/in/shivam-dharme-358895130">
					<img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
				</a>
			</div>
			<div>
				<p> Connect with me on LinkedIn! </p>
			</div>
		</div>
      </div>
    )
  }
}
