import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from './home'
import Contact from './contact'
import About from './about'
import Projects from './projects'

import './App.css';

class App extends Component {
	componentDidMount() {
		window.addEventListener('load', this.onLoad)
	}

	onLoad = () => {
		setTimeout(() => document.body.className += "loaded", 1500)
		document.addEventListener
			? 
				document.addEventListener("DOMContentLoaded", function removeEv() {
		    		document.removeEventListener("DOMContentLoaded", removeEv, !1)
		    	},!1)
			: 
				document.attachEvent && document.attachEvent("onreadystatechange", function readyState() {
		    		"complete" === document.readyState && (document.detachEvent("onreadystatechange", readyState))
				})
	}

	getClass = (url) => {
		return url === window.location.pathname ? 'header-link-active' : 'header-link-inactive'
	}

	render() {
		return (
		    <MuiThemeProvider>
				<div className="App">
					<div style={{zIndex: 100000}} className="preloader-wrapper">
						<div className="preloader"> </div>
						<div className="preloader-left"> </div>
						<div className="preloader-right"> </div>
					</div>
					<div className="content"> 
						<Navbar inverse>
							<Navbar.Header>
								<Navbar.Brand>
									<a href="/">
										<div>
											<img className="img-responsive" alt="Website Name/Logo"
												src="img/header-logo.png" />
											<div className="name">
												<div className="firstName"> SHIVAM </div>
												<div className="lastName"> DHARME </div>
											</div>
										</div>
									</a>
								</Navbar.Brand>
								<Navbar.Toggle />
							</Navbar.Header>
							<Navbar.Collapse>
								<Nav bsClass="nav headerLinks">
									<NavItem className={this.getClass('/')} href="/">
										<span data-hover="HOME"> HOME </span>
									</NavItem>
									<NavItem className={this.getClass('/about')} href="/about">
										<span data-hover="ABOUT"> ABOUT </span>
									</NavItem>
									<NavItem className={this.getClass('/projects')} href="/projects">
										<span data-hover="PROJECTS"> PROJECTS </span>
									</NavItem>
									<NavItem className={this.getClass('/contact')} href="/contact">
										<span data-hover="CONTACT"> CONTACT </span>
									</NavItem>
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
						<div className="footer"
							style={{backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/footer-background.jpg)'}}>
							<div className="footer-navigation text-center">
								<a href="/"> HOME </a>
								<a href="/about"> ABOUT </a>
								<a href="/projects"> PROJECTS </a>
								<a href="/contact"> CONTACT </a>
							</div>
							<div className="footer-media" >
								<a href="https://www.github.com/ShivamDh" target="top">
									<div className="footer-media-github">
										<img alt="Github"
											src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/FooterGithub.png" />
									</div>
								</a>
								<a href="https://www.linkedin.com/in/sdharme">
									<div className="footer-media-linkedin">
										<img alt="LinkedIn"
											src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/FooterLinkedIn.jpg" />
									</div>
								</a>
								<a href="mailto:shivamdharme@gmail.ca?Subject=Contact%20Shivam">
									<div className="footer-media-mail">
										<img alt="Mail"
											src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/FooterEmail.png" />
									</div>
								</a>
							</div>
							<div className="footer-copyright text-center">
								© 2019 SHIVAM DHARME ALL RIGHTS RESERVED
							</div>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
    }
}

export default App;