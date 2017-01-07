import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import '../css/styles'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  loadingtext () {
  	var winH = window.innerHeight;
	var winW = window.innerWidth;
	return (
		<div id="Load">
			<p style={{marginTop: winH/2, marginLeft: winW/2-275}}id= "Loading"> Some stuff I sayYYYY </p>
		</div>
	  )
  },
  
  loading() {
	  window.addEventListener('load', function() {
		var loader = document.getElementById('LoadingScreen');
		loader.style.display = 'none';
	  })
  },
  
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  
	// Change link to 'shivamdh.github.io/Personal-Website/' when publish to Github
	// Change link to 'shivamdh.github.io/Personal-Website/about/' when publish to Github
	// Change link to 'shivamdh.github.io/Personal-Website/projects/' when publish to Github
	// Change link to 'shivamdh.github.io/Personal-Website/coop/' when publish to Github
	// Change link to 'shivamdh.github.io/Personal-Website/contact/' when publish to Github
  render () {
    return (
      <div>
        <div id="LoadingScreen"> {this.loadingtext()} {this.loading()} </div>

        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
        >
          <Container className="AtRest"
            style={{
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
            }}
          >
		  
            <Link to={prefixLink('/')} style={{ textDecoration: 'none'}}>
				<p className="HomeNav">
					Home
				</p>
            </Link>
			<Link to={prefixLink('/about/')} style={{ textDecoration: 'none'}}>
				<p className="AboutMeNav">
					About Me
				</p>
            </Link>
			<Link to={prefixLink('/projects/')} style={{ textDecoration: 'none'}}>
				<p className="ProjNav">
					My Projects
				</p>
			</Link>
			<Link to={prefixLink('/coop/')} style={{ textDecoration: 'none'}}>
				<p className="CoopNav">
					Co-op
				</p>
            </Link>
			<Link to={prefixLink('/contact/')} style={{ textDecoration: 'none'}}>
				<p className="ContactNav">
					Contact Me
				</p>
            </Link>
          </Container>
        </Headroom>
		{this.props.children}
		<img src="http://kingofwallpapers.com/high-resolution-pictures/high-resolution-pictures-007.jpg"/>
		<img src="http://www.graphicsgodown.com/downloads/000006.jpg"/>
		<img src="http://www.amazingwallpaperz.com/wp-content/uploads/Battlefield-4-Wallpaper-High-Quality.jpg"/>
		<img src="https://static.pexels.com/photos/28221/pexels-photo-28221.jpg"/>
      </div>
    )
  },
})

//Random high-quality pictures are added at the end to slow load time, easier to work with load screen
