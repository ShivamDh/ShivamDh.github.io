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
			<div id="BottomofPg">
				<p id="About">
					A
				</p>
			</div>
			
			<div className = "HomeBack"> 
				<img src = "/background.jpg"/>
			</div>
			<div className = "Welcome">
				<h1> Welcome to my website </h1>
			</div>
			<div className = "Scroll">
				<img src = "http://www.pngmart.com/files/3/Down-Arrow-PNG-Pic.png"/>
			</div>
			<div className = "ScrollText"><h3>Scroll Down</h3></div>
			<div className = "JustMe">
			
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
			Hello
      </div>
    )
  }
}

//Many breakpoints introduced to see scrolling effect more clearly
