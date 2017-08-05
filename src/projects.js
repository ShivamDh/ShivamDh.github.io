import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="container Projects">
                <h1 className="text-center pageTitle"> Some of the projects I have worked on </h1>
                <div className="row website">
                    <div className="col-sm-4">
                        <img src="img/MyWebsite.png" className="img-responsive"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Personal Website </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-lock"></span>
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
                <div className="row fitness60">
                    <div className="col-sm-4">
                        <img src="http://placehold.it/1280X720" className="img-responsive"/>
                    </div>
                    <div className="col-sm-8 content">
                        <h2 className="projectName"> Fitness 60 </h2>
                        <p className="text-muted">
                            <span className="glyphicon glyphicon-lock"></span>
                            <a className="githubLink" href="https://github.com/shivamdh/fitness60/">
                                &nbsp; Click to view this project on Github
                            </a>
                        </p>
                        <dl>
                            <dd>- An Android app that users can use to record and store their workout and fitness data, which users can later analyze and see their growth and accomplishments </dd>
                            <dd>- The project is a multipage application that includes an options menu, new workout tabs and a chance to view old workouts and activities</dd>
                            <dd>- SQLite is utilized for workout data storage and Android SharedPreferences allows for users to save app options</dd>
                        </dl>
                        <p> <span className="text-muted"> Used: </span> Java, Android Studio, Android SQLite </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
