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
			<a href = "mailto: shivamdharme@gmail.ca?Subject=Contact%20Shivam" target="top"> 
				<div>
					<img src="https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/FooterEmail.jpg" />
				</div>
			</a>
			<a href = "https://www.linkedin.com/in/shivam-dharme-358895130">
				<div>
					<img src="https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/FooterLinkedIn.svg" />
				</div>
			</a>
			<a href = "www.github.com/ShivamDh">
				<div>
					<img src="https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/FooterGithub.jpg" />
				</div>
			</a>
			<div id = "Navigations"> 
				<Link to={prefixLink('/')} style={{ textDecoration: 'none'}}>
					<p id="FooterHome">
						HOME
					</p>
				</Link>
				<div> </div>
				<Link to={prefixLink('/about/')} style={{ textDecoration: 'none'}}>
					<p id="FooterAbout">
						ABOUT
					</p>
				</Link>
				<div> </div>
				<Link to={prefixLink('/project/')} style={{ textDecoration: 'none'}}>
					<p id="FooterProject">
						PROJECTS
					</p>
				</Link>
				<div> </div>
				<Link to={prefixLink('/contact/')} style={{ textDecoration: 'none'}}>
					<p id="FooterContact">
						CONTACT
					</p>
				</Link>
			</div>
			<p> © 2017 SHIVAM DHARME ALL RIGHTS RESERVED </p>
			<div> </div>
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