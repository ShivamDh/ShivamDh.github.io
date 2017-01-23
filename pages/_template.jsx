import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import $ from 'jquery'
import '../css/styles'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  
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
		  <div> <h1 className="Signature">SHIVAM</h1> </div>
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
			<Link to={prefixLink('/contact/')} style={{ textDecoration: 'none'}}>
				<p className="ContactNav">
					Contact Me
				</p>
            </Link>
          </Container>
        </Headroom>
		{this.props.children}
		<div id="Footer">
			<div>
				<img src="https://www.seek.com.au/Content/Images/Icons/Email_new.png" />
			</div>
			<div>
				<img src="http://image.flaticon.com/icons/svg/34/34227.svg" />
			</div>
			<div>
				<img src="http://orig03.deviantart.net/6873/f/2013/031/c/d/github_by_ovilia1024-d5teqdd.png" />
			</div>
			<div id = "Navigations"> 
				<p> HOME </p>
				<p> | </p>
				<p> ABOUT </p>
				<p> | </p>
				<p> PROJECTS </p>
				<p> | </p>
				<p> CONTACT</p>
			</div>
		</div>
      </div>
    )
  },
})
//Random high-quality pictures are added at the end to slow load time, easier to work with load screen
// <p> Connect with me! Don't hesitate to contact me if you have a question for me or just want to talk! </p>
			// <p> Contact me at on my <em> </em>
				// <a href = "mailto: shdh8888@yahoo.ca?Subject=Contact%20Shivam" target="top"> 
				// email </a>
			// or through <em> </em>
				// <a href = "www.github.com/ShivamDh" target="top">
				// Github </a>
			// </p>