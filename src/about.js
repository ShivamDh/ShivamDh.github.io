import React, { Component } from 'react';
import './about.css';

class About extends Component {

    render() {
        return (
            <div className="About">
                <div className="header" style={{backgroundImage: 'url(https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/development/public/img/about-header.jpg)'}}>
                    <div className="header-pic">
                        <img src="https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/development/public/img/44245.png" alt="Shivam Dharme"/>
                    </div>
                    <div className="header-text"> 
                        <div className="text"> <i> - MEET SHIVAM DHARME - </i> </div>
                    </div>
                </div>
                <div className="about-me">
                    <div className="about-me-info" style={{backgroundImage: 'url(https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/development/public/img/about-info.jpg'}} >
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
                    <div className="about-me-skills" style={{backgroundImage: 'url(https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/development/public/img/skills-background.jpg)'}} >
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
                <div className="about-timeline"
                    style={{backgroundImage: 'url(https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/development/public/img/about-timeline-img.jpg)'}}>
                    <div className="about-timeline-header"> Experience </div>
                    <div id="cd-timeline" className="cd-container">
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> MAY - AUG <span> 2017 </span>  </div>
                                <div className="cd-timeline-content-header">Web Application Developer</div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://www.evertz.com/"> Evertz Microsystems </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    Developed scalable website applications integrating video streams through React, Redux, ES6, LESS.
                                    Improved search engine efficiency by over 20% through UI component refactoring and
                                    refined query model to utilizing more backend power. Built a client-specific independent platform
                                    for broadcasting controls, utilizing barcode recognition and creating custom job scheduling.
                                </div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/development/public/img/about-work-icon.png" alt="Work" />
                            </div> 
                        </div> 
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> SEPT <span> 2016 </span> - APR <span> 2017 </span> </div>
                                <div className="cd-timeline-content-header">Business and Electrical Team Member</div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://www.uwmidsun.com/"> Midnight Sun Solar Race Car Team </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    Built a working footer module through React and tested website components through Ngrok.
                                    Wrote bare-metal firmware for car's embedded systems, in SPI and C language.
                                    Aided in resolving website bug fixes and decision making for business team.
                                </div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/development/public/img/about-website-icon.png" alt="Car"/>
                            </div>
                        </div> 

                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> SEPT <span> 2016 </span> - present </div>
                                <div className="cd-timeline-content-header">Computer Engineering Student</div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://www.uwaterloo.ca/"> University of Waterloo </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    Candidate for Bachelor's of Applied Science in Computer Engineering.
                                    First year average: 87%. Top 10 Rank.
                                    <strong> Expected Graduation in 2021 </strong>
                                </div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/development/public/img/about-school-icon.png" alt="Study"/>
                            </div>
                        </div>

                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> OCT <span> 2015 </span> - MAR <span> 2016 </span> </div>
                                <div className="cd-timeline-content-header">Board of Director and Finance Team Member</div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://scentsationja.wixsite.com/scentsation"> Scentsation - A Junior Achievement Company </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    Managed company's balances and projected return on investments (ROI) through Excel worksheets.
                                    Assisted the production team in sourcing environmentally-friendly packaging for products.
                                </div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/development/public/img/about-chart-icon.png" alt="Company"/>
                            </div>
                        </div>
						
						<div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> SEPT <span> 2014 </span> - JUN <span> 2016 </span> </div>
                                <div className="cd-timeline-content-header">Youth Sports and Aquatics Volunteer</div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.ymcacalgary.org/"> YMCA Calgary </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    Aided swim instructors with lessons by managing large class sizes, took the initiative to run
									class games at the end of lessons to review learned skills. 
									Supervised weekly sports for children, responsible for the safety, setup and conduct of said events.
								</div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/development/public/img/about-play-icon.png" alt="Company"/>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="about-resume" href="https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/master/Res.pdf">
                    <span className="about-resume-text">
                        VIEW MY RESUME
                    </span>
                    <img className="about-resume-img" alt="Download"
                        src="https://raw.githubusercontent.com/ShivamDh/ShivamDh.github.io/development/public/img/download-icon.png" />
                </a>
            </div>
        )
    }
}

export default About;
