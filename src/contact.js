import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {orange500, orange900} from 'material-ui/styles/colors'

import './contact.css'

class Contact extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		message: '',
		errorCheckEmail: false,
	}

	submitMessage = () => {
		console.log('submitting message')
		console.log(this.state)
		this.setState({firstName: '', lastName: '', email: '', message: ''})
	}

	test = () => {
		console.log('test')
	}

	handleFirstNameChange = (evt, val) => {
		this.setState({firstName: val})
	}

	handleLastNameChange = (evt, val) => {
		this.setState({lastName: val})
	}

	handleEmailChange = (evt, val) => {
		this.setState({email: val})
	}

	handleMessageChange = (evt, val) => {
		this.setState({message: val})
	}

  	render() {
    	return (
		    <div className="Contact">
		    	<div className="contact-header" style={{backgroundImage : 'url(img/contact-header.jpg)'}}>
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
			    	<div className="contact-info" style={{backgroundImage : 'url(img/contact-side.jpg)'}}>
			    		<div className="contact-info-header"> Reach Out ! </div>
			    		<div className="breakLine" />
			    		<div className="contact-info-1">
			    			Whether you are interested on working together, have a project for me,
			    			or would just like to talk, feel free to connect with me.
			    		</div>
			    		<div className="contact-info-list">

			    		</div>
			    	</div>
			    	<div className="contact-form">
			    		<div className="contact-form-inner center-block">
				    		<div className="form-header text-center h1"> Send a Message </div>
				    		<div className="form-firstName">
				    			<TextField floatingLabelText="First Name"
				    				value={this.state.firstName}
				    				onChange={this.handleFirstNameChange}
				    				inputStyle={{color: '#9F9F9F'}}
				    				underlineStyle={{borderColor: orange500}}
				    				underlineFocusStyle={{borderColor: orange900}}
				    				floatingLabelFocusStyle={{color: orange900}}
								    floatingLabelStyle={{color: orange500}}/>
				    		</div>
				    		<div className="form-lastName">
				    			<TextField floatingLabelText="Last Name"
				    				value={this.state.lastName}
				    				onChange={this.handleLastNameChange}
				    				inputStyle={{color: '#9F9F9F'}}
				    				underlineStyle={{borderColor: orange500}}
				    				underlineFocusStyle={{borderColor: orange900}}
				    				floatingLabelFocusStyle={{color: orange900}}
								    floatingLabelStyle={{color: orange500}}/>
				    		</div>
				    		<div className="form-email">
				    			<TextField floatingLabelText="Email"
				    				value={this.state.email}
				    				onChange={this.handleEmailChange}
				    				inputStyle={{color: '#9F9F9F'}}
				    				underlineStyle={{borderColor: orange500}}
				    				underlineFocusStyle={{borderColor: orange900}}
				    				floatingLabelFocusStyle={{color: orange900}}
								    floatingLabelStyle={{color: orange500}}/>
				    		</div>
				    		<div className="form-message">
				    			<TextField floatingLabelText="Message"
				    				value={this.state.message}
				    				onChange={this.handleMessageChange}
				    				hintText="Enter your message"
				    				rows={3} rowsMax={7}
				    				multiLine floatingLabelFixed
				    				underlineStyle={{borderColor: orange500}}
				    				underlineFocusStyle={{borderColor: orange900}}
				    				floatingLabelFocusStyle={{color: orange900}}
								    floatingLabelStyle={{color: orange500}}/>
				    		</div>
				    		<div className="form-submit">
				    			<RaisedButton label="Submit" backgroundColor={orange500} 
				    				style={{margin: 12}} onClick={this.submitMessage} />
				    		</div>
			    		</div>
			    	</div>
			    </div>
		    </div>
    	);
  	}
}

export default Contact;