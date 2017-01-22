import React from 'react'

export default class ReactComponent extends React.Component {

  render () {
    return (
      <div className="Projects">
        <h1> My Collection of Side Projects </h1>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/Website.png" />
			<h2> Personal Website </h2>
			<div>
				<p> - This website was made to showcase my portfolio and online profile</p>
				<p> - Combines static site generation (Gatsby.js) with one-page design from React JavaScript framework to produce instant rendering after inital load</p>
				<p> - Utilizes CSS3 and HTML5 through ECMAScript 6 (ES6) as well as jQuery module </p>
				<p> - Combines multiple React modules such as React Headroom and React Router </p>
				<p> Used: JavaScript (React.js, Gatsby.js), Node, jQuery, HTML, CSS  </p>
			</div>
		</div>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/2048Game.png" />
			<h2> 2048 Game </h2>
			<div>
				<p> - A fun command line game created through C language and GDB testing </p>
				<p> - Runs simple data structure algorithms for game operation and smooth state transitions </p>
				<p> Used: C Language, GDB Debugger  </p>
				<p> <em> Note: There is an Android version of this game under development, one which would be
				controlled through hand gestures rather than the regular touch screen </em> </p>
			</div>
		</div>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/PeriodicTable.png" />
			<h2> Molar Mass Calculator </h2>
			<div>
				<p> - A chemistry based calculator written in C language </p>
				<p> - Calculates molar mass of any valid element or compound to four decimal places. </p>
				<p> - Incorporates jump case algorithm and recursion for any subscript usage in elements or compounds </p>
				<p> Used: C Language </p>
			</div>
		</div>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/PeriodicTable.png" />
			<h2> Hockey Statistics Manager </h2>
			<div>
				<p> - A hockey data organizer that combines linked list storage and arrangement to provide a flexible statistics calculator and data manager </p>
				<p> - Incorporates File I/O productivity for adaptable input forms </p>
				<p> - Utilizes output stream to produce a csv file, arranged to user parameters </p>
				<p> Used: C Language and GDB Debugger </p>
			</div>
		</div>
		
		
      </div>
    )
  }
}
