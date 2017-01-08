import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import $ from 'jquery'
import '../css/styles'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  
  componentDidMount () {
	  window.addEventListener('resize', () => this.forceUpdate())
  },
  
  welcome() {
	
	var check = window.innerWidth;
	if (check > 1200) {
		return (
			<div>
			<p className="Signature">MAVIHS</p>
			</div>
		)
	}
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
		  
            <Link to={prefixLink('shivamdh.github.io/Personal-Website/')} style={{ textDecoration: 'none'}}>
				<p className="HomeNav">
					Home
				</p>
            </Link>
			<Link to={prefixLink('shivamdh.github.io/Personal-Website/about/')} style={{ textDecoration: 'none'}}>
				<p className="AboutMeNav">
					About Me
				</p>
            </Link>
			<Link to={prefixLink('shivamdh.github.io/Personal-Website/projects/')} style={{ textDecoration: 'none'}}>
				<p className="ProjNav">
					My Projects
				</p>
			</Link>
			<Link to={prefixLink('shivamdh.github.io/Personal-Website/coop/')} style={{ textDecoration: 'none'}}>
				<p className="CoopNav">
					Co-op
				</p>
            </Link>
			<Link to={prefixLink('shivamdh.github.io/Personal-Website/contact/')} style={{ textDecoration: 'none'}}>
				<p className="ContactNav">
					Contact Me
				</p>
            </Link>
          </Container>
        </Headroom>
		{this.props.children}
      </div>
    )
  },
})
//Random high-quality pictures are added at the end to slow load time, easier to work with load screen
