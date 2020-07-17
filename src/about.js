import React, { Component } from 'react';
import './about.css';

class About extends Component {

    getSoftwareSkillList() {
        let skills = ['C', 'C++', 'C# (.NET)', 'Java', 'Python', 'SQL',
            'PHP', 'Ruby', 'Android', 'React Native', 'Objective-C', 'iOS']

        return skills.map(skill => <li> {skill} </li>)
    }

    getWebSkillList() {
        let skills = ['JavaScript', 'jQuery', 'React', 'Redux', 'Angular', 'Django', 'Flask', 'Rails',
            'REST', 'Node', 'LESS/SASS', 'Bootstrap', 'Foundation', 'Polymer', 'NPM']

        return skills.map(skill => <li> {skill} </li>)
    }

    getTechSkillList() {
        let skills = ['Linux', 'Unix (Shell)', 'Git', 'JIRA', 'Confluence',
            'IBM Watson', 'AWS', 'Google Cloud', 'Microsoft Azure', 'OpenCV', 'ROS', 'VHDL',
            'SPI', 'GDB', 'Hyperledger']

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
                            I'm a final year Computer Engineering student at the
                            <a href="https://uwaterloo.ca/"> University of Waterloo</a>
                            . I'm highly active in the software development field, having completed
                            <a href="#experience"> 5 internships </a>
                            and in the middle of a sixth one. I hope to utilize
                            my unique skillset to build first-rate applications and gain experience as a new-grad software engineer.
                        </div>
                        <div className="about-me-info-others">
                            I've just completed my fifth internship, working at 
                            <a href="https://www.instagram.com/"> Instagram (Facebook) </a>
                            as a Software Engineer Intern in New York. 
                            Prior to this, I completed four other internships, working at
                            <a href="https://www.google.com/"> Google </a>
                            on the Google Cloud Platform, at
                            <a href="https://www.accenture.com/"> Accenture </a>
                            in their Innovation Hub, and at
                            <a href="https://www.d2l.com/"> D2L </a>
                            and
                            <a href="http://www.evertz.com/" > Evertz Microsystems </a>
                            as a developer on their main products.
                        </div>
                        <div className="about-me-info-others">
                            I've been a part of multiple engineering design teams at university.
                            I was on the software team at
                            <a href="https://watonomous.ca/"> WATonomous</a>
                            , helping to build a fully functional autonomous vehicle.
                            I was involved with the
                            <a href="http://www.uwmidsun.com/"> Midnight Sun Solar Car Team</a>
                            , where I worked on embedded systems and website development.
                        </div>
                        <div className="about-me-info-others">
                            In addition to personal projects, I've also participated in numerous hackathons
                            such as HackHarvard, PennApps and HackPrinceton. Feel free to go to the
                            <a href="/projects"> Projects </a>
                            tab to view a full list of all my projects.
                        </div>
                        <div className="about-me-info-others">
                            Don't hesitate to reach out! I'm always looking for new opportunities to collaborate with others
                            on application development.
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
                        <div className="about-me-skills-tech">
                            <div className="about-me-skills-tech-header"> Technologies Used </div>
                            <div className="about-me-skills-tech-list">
                                <ul>
                                    {this.getTechSkillList()}
                                </ul>
                            </div>
                        </div>
                        <div className="about-me-skills-web">
                            <div className="about-me-skills-web-header"> Web Frameworks </div>
                            <div className="about-me-skills-web-list">
                                <ul>
                                    {this.getWebSkillList()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-timeline"
                    style={{ backgroundImage: 'url(https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-timeline-img.jpg)' }}>
                    <a id="experience"> <div className="about-timeline-header"> Experience </div> </a>
                    <div id="cd-timeline" className="cd-container">
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> SEP 2020 - DEC 2020 </div>
                                <div className="cd-timeline-content-header"> Software Engineering Intern </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.citadel.com/"> Citadel </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    ‣ Excited to join Citadel for my Fall internship later this year!
                                </div>
                            </div>
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-cash-icon.png" alt="Cloud" />
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> JAN 2020 - MAR 2020 </div>
                                <div className="cd-timeline-content-header"> Software Engineer Intern </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.instagram.com/"> Instagram (Facebook) </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    ‣ Spearheaded efforts to provide async loaded image placeholders on Instagram iOS
                                    <br />
                                    ‣ Introduced caching support for thumbnails via Objective-C, speeding up image previews by 40%
                                    <br />
                                    ‣ Enhanced grid to full-screen image transitions, leading to performance wins on iOS app
                                </div>
                            </div>
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-iphone-icon.png" alt="Cloud" />
                            </div>
                        </div>
                        <div className="cd-timeline-block">
                            <div className="cd-timeline-content">
                                <div className="cd-date"> MAY 2019 - AUG 2019 </div>
                                <div className="cd-timeline-content-header"> Software Engineering Intern </div>
                                <div className="cd-timeline-content-subheader">
                                    <a href="https://www.google.com/"> Google </a>
                                </div>
                                <div className="cd-timeline-content-text">
                                    ‣ Devised a diagnosis tool to report failures on 1000+ networking devices, cutting triage time by 50%
                                    <br />
                                    ‣ Transitioned Python APIs into C++ and optimized SQL queries in BigQuery to improve read time by 65%
                                    <br />
                                    ‣ Scheduled automated email alerts to notify dev teams on network layer health with RPC protocol
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
                                    ‣ Incorporated Google Cloud Dialogflow to train and deploy natural language conversation cases on virtual agent technology
                                    <br />
                                    ‣ Constructed a serverless backend and streamlined data architecture with AWS Lambda, S3 Storage, and NoSQL database (DynamoDB)
                                    <br />
                                    ‣ Developed and showcased a Unity3D interactive project for a smart-city purpose with Mapbox and REST APIs
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
                                    ‣ Devised a physics model to predict stop line detection on vehicle's camera feed
                                    <br />
                                    ‣ Processed and synchronized IMU data tooutput prediction data to sub-teams
                                    <br />
                                    ‣ Incorporated computer vision software with OpenCV to track traffic signs on live feed
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
                                    ‣ Integrated SCORM tools with existing tools for customization in e-learing using C#.NET, REST, MVC
                                    <br />
                                    ‣ Overhauled Lessons tool for 50% material support and time tracking features via React, Node, MySQL
                                    <br />
                                    ‣ Worked on custom REST API for compliance with European Union Data Protection Regulation
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
                                    ‣ Developed scalable website applications integrating video streams through React, Redux, Node, jQuery
                                    <br />
                                    ‣ Rearchitected search engine with web component modularity and efficient result querying, increasing efficiency by over 20%
                                    <br />
                                    ‣ Delivered a client-specific platform utilizing barcode recognition and job scheduling through Python and PostgreSQL
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
                                    ‣ Developed a working footer module for the newly created team website through React and Node
                                    <br />
                                    ‣ Wrote bare-metal firmware for car's embedded systems, with the SPI protocol and C language
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
                                    ‣ Candidate for Bachelor's of Applied Science in Computer Engineering
                                    <br />
                                    ‣ Cumulative GPA: 3.9, Dean's Honour List, President's Scholarship, Sandford Award
                                    <br />
                                    <strong> ‣ Expected Graduation in 2021 </strong>
                                </div>
                            </div>
                            <div className="cd-timeline-img">
                                <img src="https://cdn.rawgit.com/ShivamDh/ShivamDh.github.io/development/public/img/about-school-icon.png" alt="Study" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
