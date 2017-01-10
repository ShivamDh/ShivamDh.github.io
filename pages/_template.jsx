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
		<div id="Footer">
			<p>Reach Out! </p>
			<p> Contact me at on my <em> </em>
				<a href = "mailto: shdh8888@yahoo.ca?Subject=Contact%20Shivam" target="top"> 
				email </a>
			or through <em> </em>
				<a href = "www.github.com/ShivamDh" target="top">
				Github </a>
			</p>
		</div>
      </div>
    )
  },
})
//Random high-quality pictures are added at the end to slow load time, easier to work with load screen
