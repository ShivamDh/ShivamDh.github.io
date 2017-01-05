import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
	// Change link to 'shivamdh.github.io/Personal-Website/about/' when publish to Github
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
		    <Link to={prefixLink('/about/')}>
				<p id="About">
					About Me Page Link
				</p>
			</Link>
			
			<div className = "HomeBack"> 
				<img src = "http://www.emaar.in/img/product_category/5470-shutdown-button-1920x1200-digital-art-wallpaper.jpg"/>
			</div>
			<div className = "Welcome">
				<h1 className="WelcomeText"> Welcome to my website </h1>
			</div>
			<div className = "Scroll">
				<img className= "DownArrow" src = "http://www.pngmart.com/files/3/Down-Arrow-PNG-Pic.png"/>
			</div>
			<div className = "ScrollText"><h3>Scroll Down</h3></div>

      </div>
    )
  }
}
