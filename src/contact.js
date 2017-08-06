import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import {orange500, orange900} from 'material-ui/styles/colors'

import './contact.css'

class Contact extends Component {
  	render() {
    	return (
		    <div className="Contact">
	    		<img src="contact-343.jpg" className="header-image img-responsive" alt="Contact Page Header"/>
		    	<div className="contact-header">
		    		<div className="get-in-touch">
			    		GET IN TOUCH 
			    	</div>
			    	<div className="breakLine center-block"/>
			    	<div className="caption">
			    		I'll always make the time to respond to any of your inquiries
			    	</div>
		    	</div>
		    	<div className="mainBody">
			    	<div className="contact-info">
			    		Contact Me
			    	</div>
			    	<div className="contact-form">
			    		<div className="form-header text-center"> Send a Message </div>
			    		<div className="form-firstName center-block">
			    			Name:
			    			<TextField floatingLabelText="Styled Floating Label Text"
			    				underlineStyle={{borderColor: orange500}}
			    				underlineFocusStyle={{borderColor: orange900}}
			    				floatingLabelFocusStyle={{color: orange900}}
							    floatingLabelStyle={{color: orange500}}/>
			    		</div>
			    	</div>
			    </div>
		    </div>
    	);
  	}
}

export default Contact;
