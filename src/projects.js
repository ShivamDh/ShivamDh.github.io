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
                            <dd> - Version 2.0 of my website created, aimed to incorporate more styling and intuitive UI control </dd>
                            <dd> - Created through ReactJS and a multi-page design for an extremely fast and interactive website</dd>
                            <dd> - Utilizes SASS styling and React-Bootstrap modelling to scale website for all screen sizes</dd>
                            <dd> - Incorporates modern ECMAScript 2016 (ES7) along with multiple third party libraries for UX Design</dd>
                        </dl>
                        {this.makeToolsList(['JavaScript (React, ES7, Node)', 'HTML', 'SASS/CSS', 'Bootstrap', 'Material-UI'])}
                    </div>
                </div>
            ),
            tour_planner: (
                <div className="row flights_web_scraping" key="tour_planner">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Tour Planner"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/tour-planner.png" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Tour Planner </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-star"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/TourPlanner">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd> - A React-Native application for iOS and Android that helps plans tours and trips </dd>
                            <dd> - Finds the optimal trip route by solving a Travelling Salesman or Hamiltonian path problem </dd>
                            <dd> - Uses Places API to search for geographical viewpoints or addresses inputted by user </dd>
                            <dd> - Incorporates a Distance Matrix API to find optimal routes between locations provided </dd>
                        </dl>
                        {this.makeToolsList(['React-Native', 'JavaScript', 'Places API', 'Distance Matrix API'])}
                    </div>
                </div>
            ),
            flights_web_scraping: (
                <div className="row flights_web_scraping" key="flights_web_scraping">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Flights Web Scraper"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/flights-web-scraping.png" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Flights Web Scraper </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-star"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Python-Projects/blob/master/flights_web_scraping.py">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd> - A Python web scraping tool for finding cheapest flights across multiple domains </dd>
                            <dd> - Uses Beautiful Soup to scrape html data from websites or parses JSON from requests </dd>
                            <dd> - Outputs final data to a CSV file for easy to read information </dd>
                            <dd> - Gives user the ability to search for one-way or return trips </dd>
                        </dl>
                        {this.makeToolsList(['Python', 'BeautifulSoup', 'JSON'])}
                    </div>
                </div>
            ),
            blockchain_tic_tac_toe: (
                <div className="row blockchain_tic_tac_toe" key="blockchain_tic_tac_toe">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Blockchain Tic-Tac-Toe Game"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/blockchain-tic-tac-toe.png" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Blockchain Tic-Tac-Toe </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-star"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/blockchain-tic-tac-toe">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd> - A classic tic-tac-toe game built using the fundamentals of blockchain for multiplayer </dd>
                            <dd> - Built the front-end using Angular and TypeScript for interactive game play</dd>
                            <dd> - Created a custom blockchain to store game results between two players playing live </dd>
                            <dd> - Used Express and Pusher API to make the game live and playable by two players on same host </dd>
                        </dl>
                        {this.makeToolsList(['Angular', 'Express', 'Material-UI', 'Blockchain', 'Pusher API', 'TypeScript', 'SASS'])}
                    </div>
                </div>
            ),
            ar_pathfinder: (
                <div className="row ar_pathfinder" key="ar_pathfinder">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="ARPathFinder App"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/ARPathFinder.png" />
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
                            <dd> - Created an augmented-reality Android app to display map directions using AR via camera feed </dd>
                            <dd> - Built through Android Studio and ARCore to create a comprehensive mobile view display </dd>
                            <dd> - Integrated OpenGL and Blender to create a 3D marker used within AR mode to display direction </dd>
                            <dd> - Used Google Maps API to obtain GPS coordinates and place markers in appropriate location</dd>
                        </dl>
                        {this.makeToolsList(['Java', 'ARCore', 'Android Studio', 'Blender', 'OpenGL', 'Maps API'])}
                    </div>
                </div>
            ),
            market_viewer: (
                <div className="row market-viewer" key="market-viewer">
                    <div className="col-sm-4">
                        <img className="img-responsive" alt="Market Viewer"
                            src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/market-viewer.PNG" />
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Market Viewer </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Market-Viewer">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl className="content-list">
                            <dd> - Built on Ruby on Rails to display live stock and ETF data on a dynamic website </dd>
                            <dd> - Integrates Chartkick graphing library to display the graph and auto-update charting info </dd>
                            <dd> - Utilized AlphaVantage and Yahoo Finance API for up-to-date stock pricing and company information </dd>
                        </dl>
                        {this.makeToolsList(['Ruby', 'Rails', 'AlphaVantage API', 'Yahoo Finance API'])}
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
                            <dd> - Django blog template created from scratch to gain experience in Django website creation and Jinja templating </dd>
                            <dd> - Project includes backend support for the dynamic entry of blogs using the SQLite </dd>
                            <dd> - Website designing and UI layout was created through Bootstrap styling along with custom component creations </dd>
                        </dl>
                        {this.makeToolsList(['Django (Python)', 'SQLite', 'Bootstrap'])}
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
                            <dd> - Displays weather forecasts on a user defined trip from point A to point B (via road) </dd>
                            <dd> - Allows for user selections for time of trip, how often to check for weather, and units to display in </dd>
                            <dd> - Utilizes Google Maps Directions API to obtain the fastest route from user inputted source to destination </dd>
                            <dd> - Incorporates Weather Underground API to obtain weather at user specified time intervals and locations </dd>
                        </dl>
                        {this.makeToolsList(['Python', 'Google Maps API', 'Weather Underground API'])}
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
                            <dd> - Python GUI used to build a simple scientific calculator with basic mathematical operations and 22-digit display </dd>
                            <dd> - Utilizes a History sidebar to allow for easy recollection of past mathematical results </dd>
                            <dd> - Built in with OOP implementation and utilization of Python Tkinter features like Menubar, Labels, Styles </dd>
                        </dl>
                        {this.makeToolsList(['Python', 'Tkinter (GUI Package)'])}
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
                            <dd> - Android app that users can use to record and store their workout and fitness data </dd>
                            <dd> - A multipage application that includes an options menu, and an ability to create custom workout tabs </dd>
                            <dd> - Used Android SQLite to store workout data and ability to view it at a later time </dd>
                            <dd> - Android SharedPreferences allows for customizable user options like timer </dd>
                        </dl>
                        {this.makeToolsList(['Java', 'Android Studio', 'SQLite', 'XML'])}
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
                            <dd> - An Internet of Things (IoT) project for a "smart closet" to help users select clothes </dd>
                            <dd> - Implements machine learning algorithm to cater choices according to past user selection and 3-set matches </dd>
                            <dd> - User can input their clothing collection through photos, IBM Watson's visual recognition can find key info </dd>
                            <dd> - Complete with a SQL backend and IBM Watson's Node-RED technology for fully functional web application </dd>
                        </dl>
                        {this.makeToolsList(['IBM Watson', 'IBM Bluemix', 'Node-RED', 'HTML', 'CSS'])}
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
                            <dd> - Android version of the popular 2048 game that uses hardware sensors to control gameplay </dd>
                            <dd> - Integrates accelerometer readings and gyroscope to distinguish user movements and move blocks </dd>
                            <dd> - Custom 2048 blocks that can have special purposes and user selections for gesture type </dd>
                        </dl>
                        {this.makeToolsList(['Java', 'Android Studio'])}
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
                            <dd> - A Chrome extension that allows for faster load times and smaller bandwidth usage </dd>
                            <dd> - Dynamically reduce image size and resolution on webpage and sends URL </dd>
                            <dd> - Images are sent to AWS (Amazon Web Services) server to transforms into 10% of original size </dd>
                            <dd> - Images are found and replaced dynamically with no change in webpage view </dd>
                        </dl>
                        {this.makeToolsList(['JavaScipt (Node)', 'Amazon Web Services (AWS)', 'HTML', 'CSS'])}
                    </div>
                </div>
            ),
            c2048: (
                <div className="row 2048-c" key="2048-c">
                    <div className="col-sm-4">
                        <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/2048C.jpg"
                            className="img-responsive" alt="2048 Command Line" />
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
                            <dd> - A fun command line game created while learning low-level C language </dd>
                            <dd> - Utilizes simple data structures and algorithms for gameplay and state operations </dd>
                            <dd> - Utilized GDB Debugger during development for debugging </dd>
                            <dd style={{ fontStyle: 'italic', marginTop: 10 }}>
                                - Note: A newer version of this game has been created as an Android application, scroll above to view
                            </dd>
                        </dl>
                        {this.makeToolsList(['C', 'GDB Debugger', 'Command Line Tools'])}
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
                            <dd> - A chemistry based calculator written in C language </dd>
                            <dd> - Calculates molar mass of any valid element or compound to four decimal places </dd>
                            <dd> - Incorporates jump case algorithm and recursion for any subscript usage in elements or compounds </dd>
                        </dl>
                        {this.makeToolsList(['C', 'GDB Debugger', 'Command Line Tools'])}
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
                            <dd> - A hockey data organizer that provides a flexible statistics calculator and data manager </dd>
                            <dd> - Incorporates File I/O productivity for adaptable input forms </dd>
                            <dd> - Utilizes output stream to produce a csv file, arranged to user parameters </dd>
                        </dl>
                        {this.makeToolsList(['C', 'GDB Debugger', 'Command Line Tools'])}
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
                            <dd> - A command prompt game written in C++ language using object-oriented design for modularized code segments </dd>
                            <dd> - Incorporates vector class usage for data storage of snake coordinates </dd>
                            <dd> - Allows for a user-defined interface and gameplay to be setup </dd>
                        </dl>
                        {this.makeToolsList(['C++', 'GDB Debugger', 'Command Line Tools'])}
                    </div>
                </div>
            )
        }

        this.projectKeys = {
            'ar_pathfinder': ['mobile', 'ml-ai-vr'],
            'flights_web_scraping': ['data', 'ml-ai-vr'],
            'tour_planner': 'mobile',
            'website': 'web',
            // 'fitness60': 'mobile',
            'blockchain-tic-tac-toe': ['web', 'ml-ai-vr'],
            'market_viewer': 'web',
            'trip_weather': 'data',
            'starter_blog': 'web',
            // 'python_calculator': 'command-line',
            'hangr': ['web', 'ml-ai-vr'],
            // 'android2048': 'mobile',
            'quikpic': 'web',
            // 'c2048': 'command-line',
            // 'molar_mass': 'command-line',
            // 'snake': 'command-line',
            'hockey_stats': 'data'
        };

        this.state = {
            tab: 1,
            projectList: Object.keys(this.projectKeys)
        };
    }

    makeToolsList = (tools) => {
        return (
            <div className="tools">
                {
                    tools.map(tool => (
                        <div key={tool}> {tool} </div>
                    ))
                }
            </div>
        );
    }

    _getProjectsByType = (type) => {
        return Object.keys(this.projectKeys).reduce((arr, key) => {
            return this.projectKeys[key].includes(type) ? [...arr, key] : arr
        }, [])
    }

    _handleTabSelect = (key) => {
        let projectList = []
        if (key === 2) {
            projectList = this._getProjectsByType('data');
        } else if (key === 3) {
            projectList = this._getProjectsByType('ml-ai-vr');
        } else if (key === 4) {
            projectList = this._getProjectsByType('mobile');
        } else if (key === 5) {
            projectList = this._getProjectsByType('web');
        } else {
            projectList = Object.keys(this.projectKeys);
        }

        this.setState({ tab: key, projectList })
    }

    _getProjectItems = (projectKeys) => {
        return projectKeys.reduce((res, val, index, arr) => (index < arr.length - 1 ?
            [...res, this.projects[val], <hr key={index} />] : [...res, this.projects[val]]), [])
    }

    render() {
        let projectItems = this._getProjectItems(this.state.projectList)

        return (
            <div className="Projects" style={{ backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/project-background.jpg)' }}>
                <div className="container projects-container">
                    <div className="text-center pageTitle"> Just some of the projects I have worked on in my free time </div>
                    <Tabs activeKey={this.state.tab} id="project-tab" onSelect={this._handleTabSelect}>
                        <Tab eventKey={1} title="All"> </Tab>
                        <Tab eventKey={2} title="Data"> </Tab>
                        <Tab eventKey={3} title="ML/AI/VR"> </Tab>
                        <Tab eventKey={4} title="Mobile"> </Tab>
                        <Tab eventKey={5} title="Web"> </Tab>
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
