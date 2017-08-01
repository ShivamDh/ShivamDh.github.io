import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="container Projects">
                <div className="row">
                    <div className="col-sm-4"> <a href="#" className=""><img src="http://placehold.it/1280X720" className="img-responsive"/></a> </div>
                    <div className="col-sm-8 content">
                        <h2 className="title"> Personal Website </h2>
                        <p className="text-muted"><span className="glyphicon glyphicon-lock"></span> Available Exclusively for Premium Members</p>
                        <dl>
                            <dd>- This website was made to showcase my portfolio </dd>
                            <dd>- Combines static site generation (Gatsby.js) with one-page design</dd>
                        </dl>
                        <p> <span className="text-muted"> Used: </span> JavaScript (React.js, Gatsby.js), Node, jQuery, HTML, CSS </p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-4"> <a href="#" className=""><img src="http://placehold.it/1280X720" className="img-responsive"/></a> </div>
                    <div className="col-sm-8 content">
                        <h2 className="title"> Fitness 60 </h2>
                        <p className="text-muted"><span className="glyphicon glyphicon-lock"></span> Available Exclusively for Premium Members</p>
                        <dl>
                            <dd>- This website was made to showcase my portfolio </dd>
                            <dd>- Combines static site generation (Gatsby.js) with one-page design</dd>
                        </dl>
                        <p> <span className="text-muted"> Used: </span> JavaScript (React.js, Gatsby.js), Node, jQuery, HTML, CSS </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
