import React from 'react'
import Helmet from 'react-helmet'

export default class ReactComponent extends React.Component {

  render () {
    return (
      <div>
		<Helmet title = "About Shivam" />
		<div id = "Background">
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/wallpaper.jpg"/>
		</div>
		<h3 id = "AboutPg"> MEET SHIVAM DHARME </h3>
		<div id = "Myself">
			<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/44245.png"/>
		</div>
		<br/> <br/><br/> <br/> <br/> <br/>
		<div id = "break"> </div>
		<div id = "Para">
			<p> My name is Shivam Dharme and I'm a second year university student at the University of Waterloo.
				I am currently studying Computer Engineering and completing my first co-op job at Evertz Microsystems.
			</p>
			<p> While studying at Waterloo, I have also been a part of the University of Waterloo Midnight Sun Solar Car
				Team where I worked on website development. Along with personal side-projects completed on my free time, I have also
				participated in hackthons such as HackPrinceton. Feel free to go to the Projects tab to view any of the projects displayed.
			</p>
			<p>
				My interests and passion lie in software development, with open interests in both front and backend development within
				website and mobile applications. I love to use my problem solving skills to come up with creative and unique solutions.
			</p>
			<h4>
				I am open to collaboration and job opportunities with my resume available  
				<em> </em> <a href = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/Res.pdf" target="top">
				 here</a> to view.
			</h4>
		</div>
		<div id = "Skills">
			<h1> Toolbox </h1>
			<div id = "C">
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/C.png"/>
				<p> / </p>
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/C++.png"/>
				<p> Experienced OOP, Linked List, File I/O </p>
			</div>
			<div id="Java">
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/Java.png"/>
				<p> / </p>
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/Android.png"/>
				<p> App Development, Finite State Machine</p>
			</div>
			<div id="Web">
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/HTML5.png"/>
				<p> / </p>
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/CSS3.png"/>
				<p> Enhanced Web Design, Advanced Syling Techniques </p>
				<p> HTML </p>
				<p> CSS </p>
			</div>
			<div id="JavaScript">
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/JavaScript.png"/>
				<p> / </p>
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/jQuery.png"/>
				<p> Highly Responsive and Smart Web Design </p>
				<p> jQuery </p>
			</div>
			<div id="React">
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/React.png"/>
				<p>  </p>
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/jsx.png"/>
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/es6.png"/>
				<img src = "https://raw.githubusercontent.com/ShivamDh/Personal-Website/gh-pages/img/babel.png"/>
				<p> Intricate Client-Side Rendering Knoweledge in Static Site Generation Experience with JSX, ES6 and Babel</p>
				<p> ReactJS </p>
			</div>
			<div id = "Other">
				<p> Other </p>
				<p> Tools </p>
				<ul>
					<li> GatsbyJS </li>
					<li> JIRA </li>
					<li> GDB </li>
					<li> NodeJS </li>
					<li> Git </li>
					<li> SPI </li>
					<li> VHDL </li>
					<li> Android Studio </li>
					<li> Python </li>
					<li> Android SQLite </li>
					<li> IBM Watson </li>
					<li> Node-RED </li>
				</ul>
			</div>
		</div>
		<div id="space"> </div>
      </div>
    )
  }
}
