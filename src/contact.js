import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {orange500, orange900} from 'material-ui/styles/colors'

import './contact.css'

class Contact extends Component {
  	render() {
    	return (
		    <div className="Contact">
		    	<div className="contact-header" style={{'background-image' : 'url(img/contact-header.jpg)'}}>
			    	<div className="contact-header-text">
			    		<div className="get-in-touch">
				    		GET IN TOUCH 
				    	</div>
				    	<div className="breakLine center-block"/>
				    	<div className="caption">
				    		I'll always make the time to respond to any inquiries
				    	</div>
			    	</div>
			    </div>
		    	<div className="mainBody">
			    	<div className="contact-info">
			    		Contact Me
			    	</div>
			    	<div className="contact-form">
			    		<div className="contact-form-inner center-block">
				    		<div className="form-header text-center h1"> Send a Message </div>
				    		<div className="form-firstName">
				    			<TextField floatingLabelText="First Name"
				    				inputStyle={{color: '#9F9F9F'}}
				    				underlineStyle={{borderColor: orange500}}
				    				underlineFocusStyle={{borderColor: orange900}}
				    				floatingLabelFocusStyle={{color: orange900}}
								    floatingLabelStyle={{color: orange500}}/>
				    		</div>
				    		<div className="form-lastName">
				    			<TextField floatingLabelText="Last Name"
				    				inputStyle={{color: '#9F9F9F'}}
				    				underlineStyle={{borderColor: orange500}}
				    				underlineFocusStyle={{borderColor: orange900}}
				    				floatingLabelFocusStyle={{color: orange900}}
								    floatingLabelStyle={{color: orange500}}/>
				    		</div>
				    		<div className="form-email">
				    			<TextField floatingLabelText="Email"
				    				inputStyle={{color: '#9F9F9F'}}
				    				underlineStyle={{borderColor: orange500}}
				    				underlineFocusStyle={{borderColor: orange900}}
				    				floatingLabelFocusStyle={{color: orange900}}
								    floatingLabelStyle={{color: orange500}}/>
				    		</div>
				    		<div className="form-message">
				    			<TextField floatingLabelText="Message"
				    				hintText="Enter your message"
				    				rows="3" multiLine floatingLabelFixed
				    				underlineStyle={{borderColor: orange500}}
				    				underlineFocusStyle={{borderColor: orange900}}
				    				floatingLabelFocusStyle={{color: orange900}}
								    floatingLabelStyle={{color: orange500}}/>
				    		</div>
				    		<div className="form-submit">
				    			<RaisedButton label="Submit" style={{margin: 12}} primary />
				    		</div>
			    		</div>
			    	</div>
			    </div>
		    </div>
    	);
  	}
}

export default Contact;