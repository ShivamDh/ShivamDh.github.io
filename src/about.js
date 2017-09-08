import React, { Component } from 'react';
import './about.css';

class About extends Component {

    render() {
        return (
            <div className="About">
                <div className="header">
                    <div className="header-pic">
                        <img src="img/44245.png" alt="Shivam Dharme"/>
                    </div>
                    <div className="header-text"> 
                        <div className="text"> <i> - MEET SHIVAM DHARME - </i> </div>
                    </div>
                </div>
                <div className="about-me">
                    <div className="about-me-info" style={{backgroundImage: 'url(img/about-info.jpg'}}>
                        <div className="about-me-info-first">
                            <span> Hi! </span>
                            I'm a second-year Computer Engineering co-op student at the University of Waterloo.
                            My interests lie in software development and through my internships, I hope to utilize my unique
                            skillset to build first-rate applications while gaining invaluable experience. 
                        </div>
                        <div className="about-me-info-others">
                            I have already completed one four month co-op term working at
                            <a href="http://www.evertz.com/" > Evertz Microsystems </a>
                            as a Web Applications Developer.
                            While studying at Waterloo, I have also been a part of the University of Waterloo Midnight Sun Solar Car Team where I worked on embedded systems and website development.
                        </div>
                        <div className="about-me-info-others">
                            Along with personal side-projects completed on my free time, I have also participated in hackathons
                            such as HackPrinceton. Feel free to go to the
                            <a href="/projects"> Projects </a>
                            tab to view a full list of all my projects.
                        </div>
                        <div className="about-me-info-others">
                            I'm always looking for new opportunities to collaborate with others who share the same
                            passion and interest as me for software development.
                        </div>
                    </div>
                    <div className="about-me-skills" style={{backgroundImage: 'url(img/skills-background.jpg)'}} >
                        <div className="about-me-skills-header"> Skills </div>
                        <div className="about-me-skills-software">
                            <div className="about-me-skills-software-header"> Software Knowledge </div>
                            <div className="about-me-skills-software-list">
                                <ul>
                                    <li> C </li>
                                    <li> C++ </li>
                                    <li> C# </li>
                                    <li> Python </li>
                                    <li> MySQL </li>
                                    <li> Java </li>
                                    <li> Apache </li>
                                    <li> PHP </li>
                                    <li id="androidDev"> Android Development </li>
                                    <li id="androidSQL"> Android SQLite </li>
                                </ul>
                            </div>
                        </div>
                        <div className="about-me-skills-web">
                            <div className="about-me-skills-web-header"> Web Based Languages and Frameworks </div>
                            <div className="about-me-skills-web-list">
                                <ul>
                                    <li> HTML </li>
                                    <li> CSS </li>
                                    <li> LESS </li>
                                    <li> SCSS </li>
                                    <li> Bootstrap </li>
                                    <li> Javascript </li>
                                    <li> jQuery </li>
                                    <li> Node </li>
                                    <li> AngularJS </li>
                                    <li> React </li>
                                    <li> ES6/ES7 </li>
                                    <li> JSX/Babel </li>
                                    <li> Redux </li>
                                    <li> Django </li>
                                    <li> Gatsby </li>
                                    <li> Npm </li>
                                    <li> Yarn </li>
                                </ul>
                            </div>
                        </div>
                        <div className="about-me-skills-tech">
                            <div className="about-me-skills-tech-header"> Other Technologies Used </div>
                            <div className="about-me-skills-tech-list">
                                <ul>
                                    <li> Linux (Ubuntu) </li>
                                    <li> Unix </li>
                                    <li> Git </li>
                                    <li> Bash </li>
                                    <li> JIRA </li>
                                    <li> Confluence </li>
                                    <li> Stash </li>
                                    <li> IBM Watson </li>
                                    <li> Jasmine </li>
                                    <li> Enzyme </li>
                                    <li> VHDL </li>
                                    <li> SPI </li>
                                    <li id="AWS"> Amazon Web Services (AWS) </li>
                                    <li> Android Studio </li>
                                    <li> Eclipse </li>
                                    <li> Pydev </li>
                                    <li> Visual Studio </li>
                                    <li> Pycharm </li>
                                    <li> GDB Debugger </li>
                                    <li id="sqlServer"> SQL Server Management Studio </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="about-resume" href="Res.pdf">
                    <span className="about-resume-text">
                        VIEW MY RESUME
                    </span>
                    <img src="img/download-icon.png" className="about-resume-img" alt="Download"/>
                </a>
            </div>
        )
    }
}

export default About;
