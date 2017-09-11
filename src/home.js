import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-background" style={{backgroundImage: 'url(img/home-background.jpg)'}}>
                	<img className="home-profile-image" src="img/4424.jpg" alt="Profile"/>
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
                <div className="home-about-me" style={{backgroundImage: 'url(img/home-about.jpg'}} >
                    <div className="home-about-me-who">
                        <div className="home-about-me-who-header">
                            <span>&lt;</span>/<span>&gt;</span>
                            &nbsp;&nbsp;&nbsp;WHO AM I&nbsp;&nbsp;&nbsp;
                            <span>&lt;</span>/<span>&gt;</span>
                        </div>
                        <div className="home-about-me-who-body">
                            I am a software developer who is <span> passionate </span> about creating <span> superior </span> applications through
                            <span> effective </span> code and <span> efficient </span> algorithms. I like to produce <span> smart </span> and
                            <span> cutting-edge </span> solutions to obstacles at hand to deliver <span> excellence </span> at every turn.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
