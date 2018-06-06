import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="home-background"
                    style={{backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/home-background.jpg)'}}>
                	<img className="home-profile-image" alt="Profile"
                        src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/4426.jpg" />
                	<div className="home-profile-text">
                		<div className="home-profile-text-describ text-center">
                			Developer
                			<span> ∙ </span>
                			Designer
                			<span> ∙ </span>
                			Innovator
                		</div>
                		<div className="home-profile-text-breakline" />
                		<div className="home-profile-text-name text-center">
                			Shivam Dharme
                		</div>
                	</div>
                </div>
                <div className="home-about-me"
                    style={{backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/home-about.jpg'}} >
                    <div className="home-about-me-who">
                        <div className="home-about-me-who-header">
                            <span>&lt;</span>/<span>&gt;</span>
                            &nbsp;&nbsp;&nbsp;WHO AM I&nbsp;&nbsp;&nbsp;
                            <span>&lt;</span>/<span>&gt;</span>
                        </div>
                        <div className="home-about-me-who-body">
                            I am a
                            <span> software developer </span>
                            who is
                            <span> passionate </span>
                            about creating
                            <span> first-rate </span>
                            applications through
                            <span> effective </span>
                            code and
                            <span> efficient </span>
                            algorithms. I like to develop
                            <span> smart </span>
                            and
                            <span> cutting-edge </span>
                            solutions to obstacles at hand and be able to deliver
                            <span> excellence </span>
                            at every turn.
                        </div>
                    </div>
                    <hr/>
                    <div className="home-about-me-what">
                        <div className="home-about-me-what-header">
                            <span>&lt;</span>/<span>&gt;</span>
                            &nbsp;&nbsp;&nbsp;WHAT I DO&nbsp;&nbsp;&nbsp;
                            <span>&lt;</span>/<span>&gt;</span>
                        </div>
                        <div className="home-about-me-what-body">
                            I am skilled and experienced in both
                            <span> front-end </span>
                            and
                            <span> back-end </span>
                            development through numerous
                            <span> website</span>
                            ,
                            <span> mobile </span>
                            and
                            <span> command-line </span>
                            applications I have made. My knowledge also expands to
                            <span> scripting</span>
                            ,
                            <span> embedded systems</span>
                            ,
                            <span> artificial intelligence </span>
                            and
                            <span> AR/VR technology </span>
                            . I am always open to new
                            <span> technologies </span>
                            and willing to pick up and learn new
                            <span> programming </span>
                            skills for the project at hand.
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;
