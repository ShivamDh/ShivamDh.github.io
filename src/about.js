import React, { Component } from 'react';
import './about.css';

class About extends Component {

    getSoftwareSkillList() {
        let skills = ['C', 'C++', 'C# (.NET)', 'Java', 'Python', 'SQL',
            'PHP', 'Ruby', 'Android', 'React Native']

        return skills.map(skill => <li> {skill} </li>)
    }

    getWebSkillList() {
        let skills = ['REST API', 'Node', 'JavaScript', 'jQuery', 'React',
            'Redux', 'Angular', 'Django', 'Flask', 'Rails', 'HTML5', 'CSS3', 'LESS',
            'SASS', 'Bootstrap', 'Foundation', 'Polymer', 'NPM']

        return skills.map(skill => <li> {skill} </li>)
    }

    getTechSkillList() {
        let skills = ['Linux (Ubuntu)', 'Unix (Bash)', 'Git', 'JIRA/Stash', 'Confluence',
            'IBM Watson', 'AWS', 'Google Cloud', 'Microsoft Azure', 'OpenCV', 'ROS', 'VHDL',
            'SPI', 'Android Studio', 'Visual Studio', 'GDB Debugger', 'Hyperledger', 'SQL Server']

        return skills.map(skill => <li> {skill} </li>)
    }

    render() {
        return (
            <div className="About">
                <div className="header"
                    style={{ backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-header.jpg)' }}>
                    <div className="header-pic">
                        <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/44251.png" alt="Shivam Dharme" />
                    </div>
                    <div className="header-text">
                        <div className="text"> <i> - MEET SHIVAM DHARME - </i> </div>
                    </div>
                </div>
                <div className="about-me"
                    style={{ backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-img.jpg)' }}>
                    <div className="about-me-info">
                        <div className="about-me-info-first">
                            <span> Hi! </span>
                            I'm a third-year Computer Engineering student at the
                            <a href="https://uwaterloo.ca/"> University of Waterloo</a>
                            . I am highly active in software development and through my internships, I hope to utilize
                            my unique skillset to build first-rate applications while gaining invaluable experience.
                        </div>
                        <div className="about-me-info-others">
                            I'm currently completing my fourth internship, working at 
                            <a href="https://www.google.com/"> Google </a>
                            as a Software Engineer in the Bay Area. 
                            Prior to this, I completed three other internships, working at
                            <a href="https://www.accenture.com/"> Accenture </a>
                            in their Innovation Hub, and at
                            <a href="https://www.d2l.com/"> D2L </a>
                            and
                            <a href="http://www.evertz.com/" > Evertz Microsystems </a>
                            as a developer on their main products.
                        </div>
                        <div className="about-me-info-others">
                            While studying at Waterloo, I have been a part of multiple engineering design teams.
                            Most recently, I was on the software team on
                            <a href="https://watonomous.ca/"> WATonomous</a>
                            , helping to convert an electric vehicle into a fully functional autonomous one.
                            During my first year, I was a part of the
                            <a href="http://www.uwmidsun.com/"> Midnight Sun Solar Car Team </a>
                            where I worked on embedded systems and website development.
                        </div>
                        <div className="about-me-info-others">
                            Along with personal side-projects completed on my free time, I have also participated in hackathons
                            such as HackHarvard, PennApps and HackPrinceton. Feel free to go to the
                            <a href="/projects"> Projects </a>
                            tab to view a full list of all my projects.
                        </div>
                        <div className="about-me-info-others">
                            Don't hesitate to reach out as I'm always looking for new opportunities to collaborate with others who share the same
                            passion and interest as me in application development.
                        </div>
                    </div>
                    <div className="about-me-skills">
                        <div className="about-me-skills-header"> Skills </div>
                        <div className="about-me-skills-software">
                            <div className="about-me-skills-software-header"> Software Knowledge </div>
                            <div className="about-me-skills-software-list">
                                <ul>
                                    {this.getSoftwareSkillList()}
                                </ul>
                            </div>
                        </div>
                        <div className="about-me-skills-web">
                            <div className="about-me-skills-web-header"> Web Based Languages and Frameworks </div>
                            <div className="about-me-skills-web-list">
                                <ul>
                                    {this.getWebSkillList()}
                                </ul>
                            </div>
                        </div>
                        <div className="about-me-skills-tech">
                            <div className="about-me-skills-tech-header"> Other Technologies Used </div>
                            <div className="about-me-skills-tech-list">
                                <ul>
                                    {this.getTechSkillList()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-timeline"
                    style={{ backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-timeline-img.jpg)' }}>
                    <div className="about-timeline-header"> Experience </div>
                    <div id="cd-timeline" className="cd-container">
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> MAY 2019 - AUG 2019 </div>
                                <div className="cd-timeline-content-header"> Software Engineering Intern </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.google.com/"> Google </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    - Charted a complete four-month project plan with relevant stakeholders via design documents and propsals
                                </div>
                            </div>
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-cloud-icon.png" alt="Cloud" />
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> SEPT 2018 - DEC 2018 </div>
                                <div className="cd-timeline-content-header"> Senior Application Engineering Analyst </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.accenture.com/"> Accenture </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    - Integrated Google Cloud Dialogflow and NLP to expand capabilities of virtual agents
                                    <br />
                                    - Constructed a serverless and scalable backend with AWS Lambda, API Gateway, S3 Storage
                                    <br />
                                    - Streamlined data architecture in DynamoDB NoSQL database via Python Scripting and AWS-SDK
                                    <br />
                                    - Developed and showcased a Unity3D interactive project for a smart-city purpose with Mapbox and REST APIs
                                </div>
                            </div>
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-work-icon.png" alt="Briefcase" />
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> JAN 2018 - AUG 2018 </div>
                                <div className="cd-timeline-content-header"> Software Team Member </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.d2l.com/"> WATonomous - SAE AutoDrive Challenge </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    - Implemented computer vision software with OpenCV and C++ to track traffic signs
                                    <br />
                                    - Processed and synchronized IMU data to produce output data
                                    <br />
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
                                <div className="cd-timeline-content-header"> Software Developer </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.d2l.com/"> D2L (formerly Desire2Learn) </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    - Integrated SCORM tools with existing tools for customization in e-learing using C#.NET, REST, MVC
                                    <br />
                                    - Implemented new features to 'Add' feature in Lessons tool for 50% more content availability using React, Node, MySQL
                                    <br />
                                    - Incorporated time tracking feature to monitor content viewing
                                    <br />
                                    - Created API for PostgreSQL script for compliance with European Union Data Protection Regulation
                                </div>
                            </div>
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-schedule-icon.png" alt="Schedule" />
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> MAY - AUG 2017 </div>
                                <div className="cd-timeline-content-header"> Web Application Developer </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://www.evertz.com/"> Evertz Microsystems </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    - Developed scalable website applications integrating video streams through React, Redux, Node, jQuery, LESS
                                    <br />
                                    - Rearchitected search engine for web component modularity, increasing efficiency by over 20%
                                    <br />
                                    - Enhanced website data workflow by efficient result querying and refined search results with Python
                                    <br />
                                    - Built a client-specific platform utilizing barcode recognition and job scheduling through Python and PostgreSQL
                                </div>
                            </div>
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-web-icon.png" alt="Work" />
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> SEPT 2016 - APR 2017 </div>
                                <div className="cd-timeline-content-header"> Business and Electrical Team Member </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://www.uwmidsun.com/"> Midnight Sun Solar Race Car Team </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    - Built a working footer module through React and Node
                                    <br />
                                    - Styled new icons and media links on footer with Bootstrap and SCSS
                                    <br />
                                    - Wrote bare-metal firmware for car's embedded systems, in SPI and C language
                                </div>
                            </div>
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-sections-icon.png" alt="Website" />
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> SEPT 2016 - present </div>
                                <div className="cd-timeline-content-header"> Computer Engineering Student </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://www.uwaterloo.ca/"> University of Waterloo </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    - Candidate for Bachelor's of Applied Science in Computer Engineering
                                    <br />
                                    - Cumulative GPA: 3.9,
                                    <strong> Expected Graduation in 2021 </strong>
                                </div>
                            </div>
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-school-icon.png" alt="Study" />
                            </div>
                        </div>

                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> OCT 2015 - MAR 2016 </div>
                                <div className="cd-timeline-content-header"> Board of Director and Finance Team Member </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="http://scentsationja.wixsite.com/scentsation"> Scentsation - A Junior Achievement Company </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    - Managed company's balances and projected return on investments (ROI) through Excel worksheets
                                    <br />
                                    - Assisted the production team in sourcing environmentally-friendly packaging for products
                                    <br />
                                </div>
                            </div>
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-chart-icon.png" alt="Chart" />
                            </div>
                        </div>

                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> SEPT 2014 - JUN 2016 </div>
                                <div className="cd-timeline-content-header"> Youth Sports and Aquatics Volunteer </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.ymcacalgary.org/"> YMCA Calgary </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    - Aided swim instructors with lessons by managing large class sizes
                                    <br />
                                    - Took initiative to run class games at the end of lessons to review learned skills
                                    <br />
                                    - Supervised weekly sports for children, responsible for the safety, setup and conduct of said events
								</div>
                            </div>
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-play-icon.png" alt="Play" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
