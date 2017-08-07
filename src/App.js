import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ActionAndroid from 'material-ui/svg-icons/action/android'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Home from './home'
import Contact from './contact'
import About from './about'
import Projects from './projects'

import './App.css';

class App extends Component {
	
	getClass = (url) => {
		return url === window.location.pathname ? 'header-link-active' : 'header-link-inactive'
	}
	
	render() {
		return (
		    <MuiThemeProvider >
				<div className="App">
					<Navbar inverse>
						<Navbar.Header>
							<Navbar.Brand>
								<div>
									<img className="img-responsive" data-letters="Shivam"
										src="img/header-logo.png" alt="Website Name/Logo" />
									<div className="name">
										<div className="firstName"> SHIVAM </div>
										<div className="lastName"> DHARME </div>
									</div>
								</div>
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
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/projects" component={Projects} />
						<Route path="/contact" component={Contact} />
						<Route component={PageNotFound} />
					</Switch>
					<div className="footer">

					</div>

				</div>
			</MuiThemeProvider>
		);
    }
}

export default App;