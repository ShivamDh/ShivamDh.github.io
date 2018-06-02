import React, { Component } from 'react';
import './about.css';

class About extends Component {

    getSoftwareSkillList() {
        return (
            <ul>
                <li> C </li>
                <li> C++ </li>
                <li> C# (.NET) </li>
                <li> Python </li>
                <li> SQL </li>
                <li> Java </li>
                <li> PHP </li>
                <li id="androidDev"> Android Development </li>
                <li id="androidSQL"> Android SQLite </li>
            </ul>
        )
    }

    getWebSkillList() {
        return (
            <ul>
                <li> REST API </li>
                <li> HTML </li>
                <li> CSS3 </li>
                <li> LESS </li>
                <li> SASS </li>
                <li> Bootstrap </li>
                <li id="javascript"> JavaScript ES7+</li>
                <li> jQuery </li>
                <li> Node </li>
                <li> Angular </li>
                <li> React </li>
                <li> Redux </li>
                <li> Django </li>
                <li> Polymer </li>
                <li> Npm </li>
                <li> Yarn </li>
            </ul>
        );
    }

    getTechSkillList() {
        return(
            <ul>
                <li> Linux (Ubuntu) </li>
                <li> Unix (Bash) </li>
                <li> Git </li>
                <li> JIRA/Stash </li>
                <li> Confluence </li>
                <li> IBM Watson </li>
                <li> Jasmine </li>
                <li> Enzyme </li>
                <li> VHDL </li>
                <li> SPI </li>
                <li id="AWS"> Amazon Web Services (AWS) </li>
                <li> ROS </li>
                <li> OpenCV </li>
                <li> Android Studio </li>
                <li> Eclipse </li>
                <li> Visual Studio </li>
                <li> GDB Debugger </li>
                <li> SQL Server </li>
            </ul>
        );
    }

    render() {
        return (
            <div className="About">
                <div className="header" style={{backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-header.jpg)'}}>
                    <div className="header-pic">
                        <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/44251.png" alt="Shivam Dharme"/>
                    </div>
                    <div className="header-text"> 
                        <div className="text"> <i> - MEET SHIVAM DHARME - </i> </div>
                    </div>
                </div>
                <div className="about-me">
                    <div className="about-me-info" style={{backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-info.jpg'}} >
                        <div className="about-me-info-first">
                            <span> Hi! </span>
                            I'm a second-year Computer Engineering co-op student at the <a href="https://uwaterloo.ca/"> University of Waterloo </a>.
                            My interests lie in software development and through my internships, I hope to utilize my unique
                            skillset to build first-rate applications while gaining invaluable experience. 
                        </div>
                        <div className="about-me-info-others">
                            I have completed two four month internships at <a href="https://www.d2l.com/"> D2L </a> and
                            <a href="http://www.evertz.com/" > Evertz Microsystems </a> as a developer.
                            While studying at Waterloo, I have been a part of the two engineering design teams. Currently, I am on the software team on
                            <a href="https://watonomous.ca/"> WATonomous </a>, helping to convert an electrical vehicle into an autonomous one.
                            During my first year, I was part of the
                            <a href="http://www.uwmidsun.com/"> Midnight Sun Solar Car Team </a> where I worked on embedded systems and website development.
                        </div>
                        <div className="about-me-info-others">
                            Along with personal side-projects completed on my free time, I have also participated in hackathons
                            such as PennApps and HackPrinceton. Feel free to go to the
                            <a href="/projects"> Projects </a>
                            tab to view a full list of all my projects.
                        </div>
                        <div className="about-me-info-others">
                            Feel free to reach out as I'm always looking for new opportunities to collaborate with others who share the same
                            passion and interest as me for software development.
                        </div>
                    </div>
                    <div className="about-me-skills" style={{backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/skills-background.jpg)'}} >
                        <div className="about-me-skills-header"> Skills </div>
                        <div className="about-me-skills-software">
                            <div className="about-me-skills-software-header"> Software Knowledge </div>
                            <div className="about-me-skills-software-list">
                                { this.getSoftwareSkillList() }
                            </div>
                        </div>
                        <div className="about-me-skills-web">
                            <div className="about-me-skills-web-header"> Web Based Languages and Frameworks </div>
                            <div className="about-me-skills-web-list">
                                { this.getWebSkillList() }
                            </div>
                        </div>
                        <div className="about-me-skills-tech">
                            <div className="about-me-skills-tech-header"> Other Technologies Used </div>
                            <div className="about-me-skills-tech-list">
                                { this.getTechSkillList() }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-timeline"
                    style={{backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-timeline-img.jpg)'}}>
                    <div className="about-timeline-header"> Experience </div>
                    <div id="cd-timeline" className="cd-container">
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> JAN 2018 - present  </div>
                                <div className="cd-timeline-content-header">Software Team Member - Prediction Subteam </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.d2l.com/"> WATonomous - SAE AutoDrive Challenge </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    - Implemented computer vision software with OpenCV and C++ to track traffic signs <br/>
                                    - Processed and synchronized IMU data to produce output data <br/>
                                    - Coded with Robot Operating System (ROS) on Ubuntu for environment setup and package output
                                </div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-car-icon.png" alt="Car" />
                            </div> 
                        </div> 
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> JAN - APR 2018  </div>
                                <div className="cd-timeline-content-header">Software Developer</div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.d2l.com/"> D2L (formerly Desire2Learn) </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    - Integrated SCORM tools with existing tools for customization in e-learing using C#.NET, REST, MVC <br/>
                                    - Implemented new features to 'Add' feature in Lessons tool for 50% more content availabilit using React, Node, MySQL <br/>
                                    - Incorporated time tracking feature to monitor content viewing <br/>
                                    - Created API for PostgreSQL script for data purge regarding European Union Data Protection Regulation
                                </div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-schedule-icon.png" alt="Schedule" />
                            </div> 
                        </div> 
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> MAY - AUG 2017 </div>
                                <div className="cd-timeline-content-header">Web Application Developer</div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://www.evertz.com/"> Evertz Microsystems </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    - Developed scalable website applications integrating video streams through React, Redux, Node, jQuery, LESS <br/>
                                    - Rearchitected search engine for web component modularity, increasing efficiency by over 20% <br/>
                                    - Enhanced website data workflow by efficient result querying and refined search results with Python <br/>
                                    - Built a client-specific platform utilizing barcode recognition and job scheduling through Python and PostgreSQL
                                </div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-work-icon.png" alt="Work" />
                            </div> 
                        </div> 
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> SEPT 2016 - APR 2017 </div>
                                <div className="cd-timeline-content-header">Business and Electrical Team Member</div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://www.uwmidsun.com/"> Midnight Sun Solar Race Car Team </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    - Built a working footer module through React and Node <br/>
                                    - Styled new icons and media links on footer with Bootstrap and SCSS <br/>
                                    - Wrote bare-metal firmware for car's embedded systems, in SPI and C language
                                </div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-website-icon.png" alt="Website"/>
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> SEPT 2016 - present </div>
                                <div className="cd-timeline-content-header">Computer Engineering Student</div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://www.uwaterloo.ca/"> University of Waterloo </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    - Candidate for Bachelor's of Applied Science in Computer Engineering <br/>
                                    - First year average: 87%. Top 10 Rank
                                    <strong> Expected Graduation in 2021 </strong>
                                </div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-school-icon.png" alt="Study"/>
                            </div>
                        </div>

                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> OCT 2015 - MAR 2016 </div>
                                <div className="cd-timeline-content-header">Board of Director and Finance Team Member</div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://scentsationja.wixsite.com/scentsation"> Scentsation - A Junior Achievement Company </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    - Managed company's balances and projected return on investments (ROI) through Excel worksheets <br/>
                                    - Assisted the production team in sourcing environmentally-friendly packaging for products <br/>
                                </div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-chart-icon.png" alt="Chart"/>
                            </div>
                        </div>
						
						<div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> SEPT 2014 - JUN 2016 </div>
                                <div className="cd-timeline-content-header">Youth Sports and Aquatics Volunteer</div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.ymcacalgary.org/"> YMCA Calgary </a> 
                                </div> 
                                <div className="cd-timeline-content-text">
                                    - Aided swim instructors with lessons by managing large class sizes <br/>
                                    - Took initiative to run class games at the end of lessons to review learned skills <br/> 
									- Supervised weekly sports for children, responsible for the safety, setup and conduct of said events
								</div>
                            </div> 
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-play-icon.png" alt="Play"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
