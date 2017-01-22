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
			<div>
				<p> Looking forward to hearing from you! </p>
			</div>
		</div>
		<div className="Contact2"> 
			<h2 id="tact"> tact </h2>
			<h1> Here are my details </h1>
			<div>
				<a href = "mailto: shivamdharme@gmail.ca?Subject=Contact%20Shivam" target="top"> 
					<div>
						<img src="https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/Mail.png" />
						<h1> Email me at shivamdharme@gmail.com </h1>
					</div>
				</a>
			</div>
			<div>
				<a href = "www.github.com/ShivamDh">
					<div>
						<img src="https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/GitHub.png" />
						<h1> Visit GitHub (ShivamDh) to view my projects </h1>
					</div>
				</a>
			</div>
			<div>
				<a href = "https://www.linkedin.com/in/shivam-dharme-358895130">
					<div>
						<img src="https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/LinkedIn.png" />
						<h1> Connect with me on LinkedIn! </h1>
					</div>
				</a>
			</div>
			<div>
			</div>
		</div>
      </div>
    )
  }
}
