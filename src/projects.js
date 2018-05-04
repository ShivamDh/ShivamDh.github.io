import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap'
import FlipMove from 'react-flip-move'

import './projects.css';

class Projects extends Component {
    state = {
        tab: 1,
        projectList: [],
    }

    constructor(props) {
        super(props)

        this.projects = {
            website: (
                <div className="row website" key="website">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Website Home Screenshot"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/new-website-snapshot.png" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Personal Website Redesign </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-star"></span>
                            <a className="githubLink" href="https://github.com/shivamdh/shivamdh.github.io/">
                                &nbsp; Your are viewing the website right now! Click to visit it on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>- Version 2.0 of my website created, aimed to incorporate more styling and intuitive UI control </dd>
                            <dd>- Created through ReactJS and a multi-page design for an extremely fast and interactive website</dd>
                            <dd>- Utilizes SASS styling and React-Bootstrap modelling to scale website for all screen sizes</dd>
                            <dd>- Incorporates modern ECMAScript 2016 (ES7) along with multiple third party libraries for UX Design</dd>
                        </dl>
                        <div className="languages">
                            <div> Javascript (React, ES7, Node) </div>
                            <div> HTML </div>
                            <div> SASS/CSS </div>
                            <div> Bootstrap </div>
                            <div> Material-UI </div>
                        </div>
                    </div>
                </div>
            ),
            ar_pathfinder: (
                <div className="row ar_pathfinder" key="ar_pathfinder">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="ARPathFinder App"
                            src="../img/ARPathFinder.png" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> ARPathFinder - A PennAppsXVII Project</h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-star"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/PennAppsXVII">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>- Created an augmented-reality Android app to display map directions using AR via camera feed </dd>
                            <dd>- Built through Android Studio and ARCore to create a comprehensive mobile view display </dd>
                            <dd>- Integrated OpenGL and Blender to create a 3D marker used within AR mode to display direction </dd>
                            <dd>- Used Google Maps API to obtain GPS coordinates and place markers in appropriate location</dd>
                        </dl>
                        <div className="languages">
                            <div> Java </div>
                            <div> ARCore </div>
                            <div> Android Studio </div>
                            <div> Blender </div>
                            <div> OpenGl </div>
                            <div> Maps API </div>
                        </div>
                    </div>
                </div>
            ),
            starter_blog: (
                <div className="row starter-blog" key="starter-blog">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Starter's Blog"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/starter-blog.png" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Starter's Blog </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Python-Projects/tree/master/starter_blog">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>
                                - An Django blog template created from scratch to gain experience in Django website creation
                                and integration of Jinja Templating for modular web applications
                            </dd>
                            <dd>
                                - The project includes backend support for the dynamic entry of blogs using the SQLite as its backend service
                                and simple admin privileges to edit this data on the go
                            </dd>
                            <dd>
                                - Website designing and UI layout was created through Bootstrap styling along with custom component creations
                            </dd>
                        </dl>
                        <div className="languages">
                            <div> Django (Python) </div>
                            <div> SQLite </div>
                            <div> Bootstrap </div>
                        </div>
                    </div>
                </div>
            ),
            trip_weather: (
                <div className="row trip-weather" key="trip-weather">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Trip Weather"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/trip-weather.jpg" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Trip Weather </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Python-Projects/blob/master/trip_weather.py">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>
                                - Displays weather on a user defined trip from point A to point B with user selections including time of
                                trip, how often to check for weather on trip, and what units to display data in
                            </dd>
                            <dd>
                                - Utilizes Google Maps Directions API to obtain the fastest route from user inputted source to destination
                                and decodes coordinates along the route using Google Maps Geocode API and Polyline Decode Algorithm
                            </dd>
                            <dd> 
                                - Sends API requests to Weather Underground API to obtain weather at user specified time for
                                coordinates found along the route and displays JSON results in a clean manner to user with specified units
                            </dd>
                        </dl>
                        <div className="languages">
                            <div> Python </div>
                            <div> Google Maps API </div>
                            <div> Weather Underground API </div>
                        </div>
                    </div>
                </div>
            ),
            python_calculator: (
                <div className="row python-calculator" key="python-calculator">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Python Calculator"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/custom-calculator.jpg" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Python Calculator </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Python-Projects/blob/master/custom_calculator.py">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>
                                - A Python GUI (graphical user interface) used to build a simple scientific calculator 
                                with all basic mathematical operations along with a clear 22-digit numeric display  
                            </dd>
                            <dd>
                                - Also utilizes a History sidebar to allow for easy recollection of past mathematical 
                                results and to be able to utilize past results for current calculations
                            </dd>
                            <dd> 
                                - OOP implementation allowing for future feature addition as well as utilization of Python Tkinter
                                for features such as Cascading Menubar, Labels, and Style Configurations   
                            </dd>
                        </dl>
                        <div className="languages">
                            <div> Python </div>
                            <div> Tkinter (GUI package) </div>
                        </div>
                    </div>
                </div>
            ),
            fitness60: (
                <div className="row fitness60" key="fitness60">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Fitness App"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/Fitness60.png" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Fitness 60 </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/shivamdh/fitness60/">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>
                                - An Android app that users can use to record and store their workout and fitness data,
                                which users can later analyze and see their growth and accomplishments
                            </dd>
                            <dd>
                                - The project is a multipage application that includes an options menu, new workout tabs
                                and a chance to view old workouts and activities
                            </dd>
                            <dd>
                                - SQLite is utilized for workout data storage and Android SharedPreferences
                                allows for users to save app option
                            </dd>
                        </dl>
                        <div className="languages">
                            <div> Java </div>
                            <div> Android Studio </div>
                            <div> Android SQLite </div>
                        </div>
                    </div>
                </div>
            ),
            hangr: (
                <div className="row hangr" key="hangr">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Hangr Logo"
                        src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/hangr.jpg" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Hangr - A HackPrincetonS17 Project </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/HackPrincetonS17">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>
                                - An Internet of Things (IoT) project for a "smart closet" that helps users
                                select clothes to wear according to user preferences and clothing matches
                            </dd>
                            <dd>
                                - User inputs data through photos, visual recognition stores key info and
                                when asked, the application gives the best suited pair of clothes to wear
                            </dd>
                            <dd> 
                                - Created through IBM's Watson technology with the application running on a
                                web server that connects to Watson through Node-RED software
                            </dd>
                        </dl>
                        <div className="languages">
                            <div> IBM Watson </div>
                            <div> Node-RED (JavaScript) </div>
                            <div> HTML </div>
                            <div> CSS </div>
                        </div>
                    </div>
                </div>
            ),
            android2048: (
                <div className="row 2048-android" key="2048-android">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="2048 Android App"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/2048App.png" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> 2048 Android Application </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-lock"></span>
                                &nbsp; Code maintained privately, sorry!
                        </p>
                        <dl className="content-list">
                            <dd>
                                - An Android version of the once-popular 2048 game that uses hardware sensors
                                such as accelerometer readings to control gameplay and user feed
                            </dd>
                            <dd>
                                - An Android version of the once-popular 2048 game that uses hardware sensors
                                such as accelerometer readings to control gameplay and user feed
                            </dd>
                            <dd> 
                                - Full OOP implementation allowing for future expansion of custom made blocks
                                as well as user selections regarding which type of gestures to use
                            </dd>
                        </dl>
                        <div className="languages">
                            <div> Java </div>
                            <div> Android Studio </div>
                        </div>
                    </div>
                </div>
            ),
            oldWebsite: (
                <div className="row oldWebsite" key="oldWebsite">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Old Website Home Screenshot"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/OldWebsite.png" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> First Personal Website (Archived) </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-briefcase"></span>
                            &nbsp; This website has now been archived and no longer open for viewing
                        </p>
                        <dl className="content-list">
                            <dd>- First porfolio website created for showcasing skills in webpage design and honing skills in web development </dd>
                            <dd>- Created through ReactJS and utilized a multi-page design to display different parts of the profile</dd>
                            <dd>- Used CSS styling for layout and cross-browser support, JSX syntax for React applications</dd>
                        </dl>
                        <div className="languages">
                            <div> Javascript (React, ES6, Node) </div>
                            <div> HTML </div>
                            <div> CSS </div>
                        </div>
                    </div>
                </div>
            ),
            quikpic: (
                <div className="row quikpic" key="quikpic">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="QuikPic Logo"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/quikpic.png" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> QuikPic - A QHacks17 Project </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/QHacks17">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>
                                - A Chrome extension that allows for faster load times and less internet
                                bandwidth need by dynamically reducing image size and resolution on webpage
                            </dd>
                            <dd>
                                - Images are sent onto a server run by AWS (Amazon Web Services) that receives
                                image urls and then transforms them into images upto 10% of the original size
                            </dd>
                            <dd> 
                                - Images are found and repacled dynamically with no change in webpage view
                            </dd>
                        </dl>
                        <div className="languages">
                            <div> HTML </div>
                            <div> CSS </div>
                            <div> JavaScript(Node) </div>
                            <div> Amazon Web Services (AWS) </div>
                        </div>
                    </div>
                </div>
            ),
            c2048: (
                <div className="row 2048-c" key="2048-c">
                    <div className="col-sm-4">
                        <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/2048C.jpg"
                            className="img-responsive" alt="2048 Command Line"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> 2048 (Command Line Version) </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Side-Projects/blob/master/2048.c">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>
                                - A fun command line game created while learning low-level C language and utilization of simple 
                                data structures and algorithms for gameplay and state operations
                            </dd>
                            <dd>
                                - Utilized GDB Debugger during development for debugging
                            </dd>
                            <dd style={{fontStyle: 'italic', marginTop: 10}}> 
                                - Note: A newer version of this game has been created as an Android application, scroll above to view
                            </dd>
                        </dl>
                        <div className="languages">
                            <div> C </div>
                            <div> GDB Debugger </div>
                            <div> Command Line Tools </div>
                        </div>
                    </div>
                </div>
            ),
            molar_mass: (
                <div className="row molar-mass" key="molar-mass">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Molar Mass Calc"
                        src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/molarMassCalc.jpg" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Molar Mass Calculator </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Side-Projects/blob/master/molarMassCalc.c">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>
                                - A chemistry based calculator written in C language
                            </dd>
                            <dd>
                                - Calculates molar mass of any valid element or compound to four decimal places
                            </dd>
                            <dd> 
                                - Incorporates jump case algorithm and recursion for any subscript usage in elements or compounds
                            </dd>
                        </dl>
                        <div className="languages">
                            <div> C </div>
                            <div> Command Line Tools </div>
                        </div>
                    </div>
                </div>
            ),
            hockey_stats: (
                <div className="row hockey-stats" key="hockey-stats">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Hockey Statistics Calculator"
                        src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/hockeyStats.jpg" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Hockey Statistics Calculator </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Side-Projects/blob/master/HockeyStats.c">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>
                                - A hockey data organizer that combines linked list storage and arrangement to provide a flexible statistics calculator and data manager
                            </dd>
                            <dd>
                                - Incorporates File I/O productivity for adaptable input forms
                            </dd>
                            <dd> 
                                - Utilizes output stream to produce a csv file, arranged to user parameters
                            </dd>
                        </dl>
                        <div className="languages">
                            <div> C </div>
                            <div> GDB Debugger </div>
                            <div> Command Line Tools </div>
                        </div>
                    </div>
                </div>
            ),
            snake: (
                <div className="row snake" key="snake">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Snake Game"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/snake.jpg" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Snake Game </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Side-Projects/blob/master/snakeGame.cpp">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd>
                                - A fun command prompt game written in C++ language and uses object-oriented design
                                for modularized and reproducible code segments
                            </dd>
                            <dd>
                                - Incorporates vector class usage for data storage of snake coordinates
                            </dd>
                            <dd> 
                                - Allows for a user-defined interface and gameplay to be setup
                            </dd>
                        </dl>
                        <div className="languages">
                            <div> C++ </div>
                            <div> GDB Debugger </div>
                            <div> Command Line Tools </div>
                        </div>
                    </div>
                </div>
            )
        }

        this.state = {
            tab: 1,
            projectList: ['website', 'ar_pathfinder', 'starter_blog', 'fitness60', 'trip_weather', 'python_calculator',
                'hangr', 'oldWebsite', 'android2048', 'quikpic', 'c2048', 'molar_mass', 'hockey_stats', 'snake']
        }
    }

    _handleTabSelect = (key) => {
        console.log('selected key ', key)
        let projectList
        if (key === 4) {
            projectList = ['trip_weather', 'python_calculator', 'c2048', 'molar_mass', 'hockey_stats', 'snake']
        } else if (key === 3) {
            projectList = ['ar_pathfinder', 'fitness60', 'android2048']
        } else if (key === 2) {
            projectList = ['website', 'starter_blog', 'hangr',  'oldWebsite', 'quikpic']
        } else {
            projectList = ['website', 'ar_pathfinder', 'starter_blog', 'fitness60', 'trip_weather', 'python_calculator',
                'hangr', 'oldWebsite', 'android2048', 'quikpic', 'c2048', 'molar_mass', 'hockey_stats', 'snake']
        }

        this.setState({tab: key, projectList})
    }

    _getProjectItems = (projectKeys) => {
        return projectKeys.reduce((res, val, index, arr) => (index < arr.length - 1 ?
            [...res, this.projects[val], <hr key={index}/>] : [...res, this.projects[val]]), [])
    }

    render() {
        let projectItems = this._getProjectItems(this.state.projectList)

        return (
            <div className="Projects" style={{backgroundImage : 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/project-background.jpg)'}}>
                <div className="container projects-container">
                    <div className="text-center pageTitle"> Just some of the projects I have worked on </div>
                    <Tabs activeKey={this.state.tab} id="project-tab" onSelect={this._handleTabSelect}>
                        <Tab eventKey={1} title="All"> </Tab>
                        <Tab eventKey={2} title="Web"> </Tab>
                        <Tab eventKey={3} title="Mobile"> </Tab>
                        <Tab eventKey={4} title="Command Line"> </Tab>
                    </Tabs>
                    <FlipMove enterAnimation="elevator" leaveAnimation="elevator">
                        {projectItems}
                    </FlipMove>
                </div>
            </div>
        );
    }
}


export default Projects;
