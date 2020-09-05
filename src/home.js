import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="home-background"
                    style={{ backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/home-background.jpg)' }}>
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
                    style={{ backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/home-about.jpg' }} >
                    <div className="home-about-me-who">
                        <div className="home-about-me-who-header">
                            <span>&lt;</span>
                            &nbsp;&nbsp;&nbsp;WHO AM I&nbsp;&nbsp;&nbsp;
                            <span>&gt;</span>
                        </div>
                        <div className="home-about-me-who-body">
                            I'm a
                            <span> final year </span>
                            university student, passionate about developing
                            <span> smart </span>
                            and
                            <span> cutting-edge </span>
                            software solutions. I've completed
                            <span> 5 successful internships </span>
                            at companies such as
                            <span> Facebook</span>
                            ,
                            <span> Google </span>
                            and
                            <span> Accenture </span>
                            . This Fall, I'll be working at
                            <span> Citadel </span>
                            as a Software Engineering Intern.
                        </div>
                    </div>
                    <hr />
                    <div className="home-about-me-what">
                        <div className="home-about-me-what-header">
                            <span>&lt;</span>
                            &nbsp;&nbsp;&nbsp;WHAT I DO&nbsp;&nbsp;&nbsp;
                            <span>&gt;</span>
                        </div>
                        <div className="home-about-me-what-body">
                            I have
                            <span> industry experience </span>
                            in many areas of software development such as
                            <span> full-stack</span>
                            ,
                            <span> infrastructure </span>
                            and
                            <span> backend </span>
                            development. In my free time, I've worked on
                            <span> mobile </span>
                            and
                            <span> artificial intelligence </span>
                            systems. My knowledge also expands to
                            <span> scripting</span>
                            ,
                            <span> embedded systems</span>
                            ,
                            <span> machine learning </span>
                            and
                            <span> AR/VR </span>
                            . I am always open to new
                            <span> technologies </span>
                            and willing to
                            <span> learn </span>
                            for the project at hand.
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;
