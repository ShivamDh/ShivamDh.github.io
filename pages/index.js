import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
			<div id="ScrollDown">
				
			</div>
			
			<div className = "HomeBack"> 
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/background.jpg"/>
			</div>
			<div className = "Welcome">
				<pre className="tab">
					<p>     Shivam      Dharme </p>
				</pre>
			</div>
			<div id="pic">
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/4426.jpg"/>
				<p> The will to win, the desire to succeed, the urge to reach your full potential ... these are the keys that will unlock the door to personal excellence.
				- Confucius </p>
			</div>
			
			<div className = "JustMe">
				<div id = "Who">
					<h1> WHO I AM </h1>
				</div>
				<p> I am a problem-solver who is passionate about writing effective code and gaining new experiences along the way.
				I like to come up with innovative and exceptional solutions to obstacles at hand and deliver excellence at every turn.</p>
				<div> </div> 
				<div> </div> 
			</div>
			<div className = "JustMe2">
				<div id = "Who">
					<h1> WHAT I DO </h1>
				</div>
				<p> I am skilled in both front-end and back-end development. I have experience in website 
				development, mobile development as well as object-oriented programs. I also have some 
				knowledge of embedded systems programming in addition to familiarity with IDEs and version control.</p>
				<div> </div> 
				<div> </div> 
			</div>
		</div>
    )
  }
}