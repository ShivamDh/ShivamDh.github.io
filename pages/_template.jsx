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
					<img src="https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/FooterEmail.png" />
				</div>
			</a>
			<a href = "https://www.linkedin.com/in/shivam-dharme-358895130">
				<div>
					<img src="https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/FooterLinkedIn.jpg" />
				</div>
			</a>
			<a href = "https://www.github.com/ShivamDh">
				<div>
					<img src="https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/FooterGithub.png" />
				</div>
			</a>
			<div id = "Navigations"> 
				<div id="HomeLink">
					<Link to={prefixLink('/')} style={{ textDecoration: 'none'}}>
						<p id="FooterHome">
							HOME
						</p>
					</Link>
				</div>
				<div> </div>
				<div id="AboutLink">
					<Link to={prefixLink('/about/')} style={{ textDecoration: 'none'}}>
						<p id="FooterAbout">
							ABOUT
						</p>
					</Link>
				</div>
				<div> </div>
				<div id="ProjectLink">
					<Link to={prefixLink('/projects/')} style={{ textDecoration: 'none'}}>
						<p id="FooterProject">
							PROJECTS
						</p>
					</Link>
				</div>
				<div> </div>
				<div id="ContactLink">
					<Link to={prefixLink('/contact/')} style={{ textDecoration: 'none'}}>
						<p id="FooterContact">
							CONTACT
						</p>
					</Link>
				</div>
			</div>
			<p> © 2017 SHIVAM DHARME ALL RIGHTS RESERVED </p>
			<div> </div>
		</div>
      </div>
    )
  },
})