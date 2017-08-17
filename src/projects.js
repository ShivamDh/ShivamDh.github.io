import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="container Projects">
                <h1 className="text-center pageTitle"> Some of the projects I have worked on </h1>
                <div className="row website">
                    <div className="col-sm-4">
                        <img src="img/MyWebsite.png" className="img-responsive" alt="Website Home Screenshot"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Personal Website </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-star"></span>
                            <a className="githubLink" href="https://github.com/shivamdh/shivamdh.github.io/">
                                &nbsp; Your are viewing the website right now! Click to visit it on Github
                            </a>
                        </p>
                        <dl>
                            <dd>- This website was made to showcase my portfolio </dd>
                            <dd>- Created through ReactJS and a multi-page design for an extremely fast and interactive website</dd>
                            <dd>- Utilizes SASS styling and React-Bootstrap modelling for rendering fitting all screen sizes</dd>
                            <dd>- Incorporates modern ECMAScript 2016 (ES7) along with multiple third party libraries for UX Design</dd>
                        </dl>
                        <p> <span className="text-muted"> Used: </span> JavaScript (React.js, ES7), Node, HTML, SASS/CSS, Bootstrap </p>
                    </div>
                </div>
                <hr />
                <div className="row starter-blog">
                    <div className="col-sm-4">
                        <img src="img/starter-blog.png" className="img-responsive" alt="Starter's Blog"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Starter's Blog </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Python-Projects/tree/master/starter_blog">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl>
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
                        <p> <span className="text-muted"> Used: </span> Django (Python), SQLite, Bootstrap </p>
                    </div>
                </div>
                <hr />
                <div className="row fitness60">
                    <div className="col-sm-4">
                        <img src="http://placehold.it/1280X720" className="img-responsive" alt="Fitness App"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Fitness 60 </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/shivamdh/fitness60/">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl>
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
                        <p> <span className="text-muted"> Used: </span> Java, Android Studio, Android SQLite </p>
                    </div>
                </div>
                <hr />
                <div className="row hangr">
                    <div className="col-sm-4">
                        <img src="img/hangr.png" className="img-responsive" alt="Hangr Logo"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Hangr </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/HackPrincetonS17">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl>
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
                        <p> <span className="text-muted"> Used: </span> IBM Watson, Node-RED, HTML, CSS, JavaScript </p>
                    </div>
                </div>
                <hr />
                <div className="row 2048-android">
                    <div className="col-sm-4">
                        <img src="http://placehold.it/1280X720" className="img-responsive" alt="2048 Android App"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> 2048 Android Application </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-lock"></span>
                                &nbsp; Code maintained privately, sorry!
                        </p>
                        <dl>
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
                        <p> <span className="text-muted"> Used: </span> Java, Android Studio </p>
                    </div>
                </div>
                <hr />
                <div className="row quikpic">
                    <div className="col-sm-4">
                        <img src="http://placehold.it/1280X720" className="img-responsive" alt="QuikPic Logo"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> QuikPic </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/QHacks17">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl>
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
                        <p> <span className="text-muted"> Used: </span> HTML, CSS, JavaScript (Node.js), Amazon Web Services </p>
                    </div>
                </div>
                <hr />
                <div className="row 2048-c">
                    <div className="col-sm-4">
                        <img src="http://placehold.it/1280X720" className="img-responsive" alt="2048 Command Line"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> 2048 (Command Line Version) </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Side-Projects/blob/master/2048.c">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl>
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
                        <p> <span className="text-muted"> Used: </span> C Language, GDB Debugger, Command Line Tools </p>
                    </div>
                </div>
                <hr />
                <div className="row molar-mass">
                    <div className="col-sm-4">
                        <img src="http://placehold.it/1280X720" className="img-responsive" alt="Molar Mass Calc"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Molar Mass Calculator </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Side-Projects/blob/master/molarMassCalc.c">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl>
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
                        <p> <span className="text-muted"> Used: </span> C Language, Command Line Tools </p>
                    </div>
                </div>
                <hr />
                <div className="row hockey">
                    <div className="col-sm-4">
                        <img src="http://placehold.it/1280X720" className="img-responsive" alt="Hockey Statistics Calculator"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Hockey Statistics Calculator </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-search"></span>
                            <a className="githubLink" href="https://github.com/ShivamDh/Side-Projects/blob/master/HockeyStats.c">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl>
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
                        <p> <span className="text-muted"> Used: </span> C Language, GDB Debugger, Command Line Tools </p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Projects;
