import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ActionAndroid from 'material-ui/svg-icons/action/android'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import './App.css';

class App extends Component {

	getClass = (url) => {
		return url === this.props.location.pathname ? 'header-link-active' : 'header-link-inactive'
	}

  	render() {
  		console.log(this.props.location.pathname)
    	return (
			<div className="App">
				<Navbar inverse>
					<Navbar.Header>
						<Navbar.Brand>
							<div className="nameLogo" data-letters="Shivam"> Shivam </div>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav bsClass="nav headerLinks">
							<NavItem className={this.getClass('/')} href="/"> <span data-hover="HOME"> HOME </span> </NavItem>
							<NavItem className={this.getClass('/about')} href="/about"> <span data-hover="ABOUT"> ABOUT </span></NavItem>
							<NavItem className={this.getClass('/projects')} href="/projects"> <span data-hover="PROJECTS"> PROJECTS </span></NavItem>
							<NavItem className={this.getClass('/contact')} href="/contact"> <span data-hover="CONTACT"> CONTACT </span></NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				{this.props.children}
				<div className="footer">

				</div>

			</div>
	    );
  	}
}

export default App;
