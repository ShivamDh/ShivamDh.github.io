import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

// 20, 18, 1

export default class Index extends React.Component {
	// Change link to 'shivamdh.github.io/Personal-Website/about/' when publish to Github
				// <img src = "http://wallpaper-gallery.net/images/technology-wallpaper/technology-wallpaper-18.jpg"/>
  
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
				<a href="#next"> <img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/down_arrow.png" /> </a>
			</div>
			
			<div className = "HomeBack"> 
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/background.jpg"/>
			</div>
			<div className = "Welcome">
				<pre className="tab">
					<p>     Shivam      Dharme </p>
				</pre>
			</div>
			<div id="pic">
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/4426.jpg"/>
				<p> The will to win, the desire to succeed, the urge to reach your full potential ... these are the keys that will unlock the door to personal excellence.
				- Confucius </p>
			</div>
			
			<a name = "next"> </a>
			<div className = "JustMe">
				<p> Hardworking. Inquisitive. Motivated.</p>
				<p> Hello </p>
				<p> Hello </p>
			</div>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>			
			<br/>
			<br/>
			<br/>
			<br/>			
			<br/>			
			<br/>			
			<br/>			
			<br/>			
			<br/>			
			<br/>			
      </div>
    )
  }
}

//Many breakpoints introduced to see scrolling effect more clearly
