import React, { Component } from 'react';
import './resume.css';

class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <object data="/shivam.pdf" className="resume_pdf">
                    <p> This browser does not support PDFs. Please download the PDF to view it:
                        <a href="shivam.pdf">Download PDF</a>.
                    </p>
                </object>
            </div>
        );
    }
}

export default Resume;
