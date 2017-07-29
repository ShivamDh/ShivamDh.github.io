import React from 'react'
import {IndexRoute, Router, Route, browserHistory} from 'react-router'
import App from './App'
import Home from './home'
import Contact from './contact'
import About from './about'
import Projects from './projects'

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
		</Route>
		<Route path="/about" component={App}>
			<IndexRoute component={About} />
		</Route>
		<Route path="/contact" component={App}>
			<IndexRoute component={Contact} />
		</Route>
		<Route path="/projects" component={App}>
			<IndexRoute component={Projects} />
		</Route>
	</Router>
)