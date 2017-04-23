import React from 'react'
import Helmet from "react-helmet"

export default class ReactComponent extends React.Component {
  
  render () {
    return (
      <div className="Projects">
	    <Helmet title = "Shivam's Projects" />
        <h1> My Collection of Side Projects </h1>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/MyWebsite.png" />
			<h2> Personal Website </h2>
			<div>
				<p> - This website was made to showcase my portfolio and online profile</p>
				<p> - Combines static site generation (Gatsby.js) with one-page design from React JavaScript framework to produce instant rendering after inital load</p>
				<p> - Utilizes CSS3 and HTML5 through ECMAScript 6 (ES6) as well as jQuery module </p>
				<p> - Combines multiple React modules such as React Headroom and React Router </p>
				<p> Used: JavaScript (React.js, Gatsby.js), Node, jQuery, HTML, CSS  </p>
				<div>
					<a href="www.github.com/ShivamDh/Personal-Website" >
						<p> <em> Click to visit source code </em></p>
					</a>
				</div>
			</div>
		</div>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/Fitness60.PNG" />
			<h2> Fitness60 </h2>
			<div>
				<p> - An Android app that users can use to record and store their workout and fitness data, which users can 
					later analyze and see their growth and accomplishments</p>
				<p> - The project is a multipage application that includes an options menu, new workout tabs and a chance to 
					view old workouts and activities</p>
				<p> - Android SQLite stores workout data and SharedPreferences records user options </p>
				<p> Used: Java, Android Studio, Android SQLite </p>
				<div>
					<a href="https://github.com/ShivamDh/Fitness60" >
						<p> <em> Click to visit the source code </em></p>
					</a>
				</div>
			</div>
		</div>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/Hangr.PNG" />
			<h2> Hangr </h2>
			<div>
				<p> - An Internet of Things (IoT) project for a "smart closet" that helps users select clothes
					to wear according to user preferences and clothing matches</p>
				<p> - User inputs data through photos, visual recognition stores key info and when asked, the 
					application gives the best suited pair of clothes to wear</p>
				<p> - Created through IBM's Watson technology with the application running on a web server
					that connects to Watson through Node-RED software</p>
				<p> Used: IBM Watson, Node-RED, HTML, CSS, JavaScript</p>
				<div>
					<a href="https://github.com/ShivamDh/HackPrincetonS17" >
						<p> <em> Click to visit the source code </em></p>
					</a>
				</div>
			</div>
		</div>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/2048App.PNG" />
			<h2> 2048 Android App </h2>
			<div>
				<p> - An Android version of the once-popular 2048 game that uses hardware sensors such as accelerometer
					readings to control gameplay and user feed</p>
				<p> - A low-pass filter is used to accurately measure a user's game selection through motion controls and 
					a finite state machine implementation for the game</p>
				<p> - Full OOP implementation allowing for future expansion of custom made blocks as well as user selections
					regarding which type of gestures to use</p>
				<p> Used: Java, Android Studio </p>
			</div>
		</div>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/Extension.png" />
			<h2> QuikPic </h2>
			<div>
				<p> - A Chrome extension that allows for faster load times and less internet bandwidth need
				by dynamically reducing image size and resolution on webpage</p>
				<p> - Images are sent onto a server run by AWS (Amazon Web Services) that receives image urls and then 
				transforms them into images upto 10% of the original size</p>
				<p> - Images are found and repacled dynamically with no change in webpage view </p>
				<p> Used: HTML, CSS, JavaScript (Node.js), Amazon Web Services </p>
				<div>
					<a href="www.github.com/ShivamDh/Side-Projects" >
						<p> <em> Click to visit the source code </em></p>
					</a>
				</div>
			</div>
		</div>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/2048Game.png" />
			<h2> 2048 Game (Command Line) </h2>
			<div>
				<p> - A fun command line game created through C language and GDB testing </p>
				<p> - Runs simple data structure algorithms for game operation and smooth state transitions </p>
				<p> Used: C Language, GDB Debugger  </p>
				<p> <em> Note: A newer Andriod version of this game was created, scroll up to see this newer project</em> </p>
				<div>
					<a href="www.github.com/ShivamDh/Side-Projects" >
						<p> <em> Click to visit the source code </em></p>
					</a>
				</div>
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
				<div>
					<a href="www.github.com/ShivamDh/Side-Projects" >
						<p> <em> Click to visit the source code </em></p>
					</a>
				</div>
			</div>
		</div>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/HockeyStats1.jpg" />
			<div> 
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/HockeyStats2.png" />
			</div>
			<h2> Hockey Statistics Manager </h2>
			<div>
				<p> - A hockey data organizer that combines linked list storage and arrangement to provide a flexible statistics calculator and data manager </p>
				<p> - Incorporates File I/O productivity for adaptable input forms </p>
				<p> - Utilizes output stream to produce a csv file, arranged to user parameters </p>
				<p> Used: C Language and GDB Debugger </p>
			</div>
			<div id ="h">
					<a href="www.github.com/ShivamDh/Side-Projects" >
						<p> <em> Click to visit the source code </em></p>
					</a>
			</div>
		</div>
		<div>
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/SnakeGame.png" />
			<h2> Snake Game </h2>
			<div>
				<p> - A fun command prompt game written in C++ language </p>
				<p> - Written using object-oriented design and modularized code for reproducibility </p>
				<p> - Incorporates vector class usage for data storage of snake coordinates </p>
				<p> - Allows for a user-defined interface and gameplay to be setup </p>
				<p> Used: C++ Language, GDB Debugger</p>
				<div>
					<a href="www.github.com/ShivamDh/Side-Projects" >
						<p> <em> Click to visit the source code </em></p>
					</a>
				</div>
			</div>
		</div>
      </div>
    )
  }
}
