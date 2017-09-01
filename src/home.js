import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-background" style={{backgroundImage : 'url(img/home-background.jpg)'}}>
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
            </div>
        );
    }
}

export default Home;
