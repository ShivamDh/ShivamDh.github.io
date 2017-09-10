import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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
		if (this.state.firstName && this.state.lastName && this.state.email && this.state.message) {
			let body = `This is ${this.state.firstName} ${this.state.lastName}. ${this.state.message} \n Contact email is ${this.state.email}`
			window.open(`mailto: shivamdharme@gmail.ca?subject=Contact%20Shivam&body=${body}`);
			this.setState({firstName: '', lastName: '', email: '', message: ''})	
		} else {
			alert("For the message to be sent through proper channels, please enter all fields")
		}
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
				    	<div className="caption">
				    		I'll always make the time to respond to any inquiries
				    	</div>
			    	</div>
			    </div>
		    	<div className="mainBody">
			    	<div className="contact-info" style={{backgroundImage : 'url(img/contact-side.jpg)'}}>
			    		<div className="contact-info-text">
				    		<div className="contact-info-header"> Reach Out! </div>
				    		<div className="contact-info-1">
				    			Whether you are interested on working together, have a project for me,
				    			or would just like to talk, feel free to contact me.
				    		</div>
				    		<div className="contact-info-list">
				    			<div className="contact-email">
									<a href="mailto: shivamdharme@gmail.ca?subject=Contact%20Shivam" target="top">
										<div>
											<img alt="email" src="img/mail-bw.png" />
											<div> Email me at shivamdharme@gmail.com </div>
										</div>
									</a>
								</div>
								<div className="contact-github">
									<a href="https://www.github.com/ShivamDh" target="top">
										<div>
											<img alt="github" src="img/github-bw.png" />
											<div> Visit my projects on GitHub (ShivamDh) </div>
										</div>
									</a>
								</div>
								<div className="contact-linkedin">
									<a href="https://www.linkedin.com/in/shivam-dharme">
										<div>
											<img alt="linkedin" src="img/linkedin-bw.jpg" />
											<div> Connect with me on LinkedIn! </div>
										</div>
									</a>
								</div>
				    		</div>
			    		</div>
			    	</div>
			    	<div className="contact-form">
			    		<div className="contact-form-inner center-block">
				    		<div className="form-header text-center h1"> Send a Message </div>
				    		<div className="form-firstName">
				    			<TextField floatingLabelText="First Name"
				    				value={this.state.firstName}
				    				onChange={this.handleFirstNameChange}
				    				inputStyle={{color: '#5C5656'}}
				    				underlineStyle={{borderColor: '#A69D9D'}}
				    				underlineFocusStyle={{borderColor: '#5C5656'}}
				    				floatingLabelFocusStyle={{color: '#5C5656'}}
								    floatingLabelStyle={{color: '#A69D9D'}}/>
				    		</div>
				    		<div className="form-lastName">
				    			<TextField floatingLabelText="Last Name"
				    				value={this.state.lastName}
				    				onChange={this.handleLastNameChange}
				    				inputStyle={{color: '#5C5656'}}
				    				underlineStyle={{borderColor: '#A69D9D'}}
				    				underlineFocusStyle={{borderColor: '#5C5656'}}
				    				floatingLabelFocusStyle={{color: '#5C5656'}}
								    floatingLabelStyle={{color: '#A69D9D'}}/>
				    		</div>
				    		<div className="form-email">
				    			<TextField floatingLabelText="Email"
				    				value={this.state.email}
				    				onChange={this.handleEmailChange}
				    				inputStyle={{color: '#5C5656'}}
				    				underlineStyle={{borderColor: '#A69D9D'}}
				    				underlineFocusStyle={{borderColor: '#5C5656'}}
				    				floatingLabelFocusStyle={{color: '#5C5656'}}
								    floatingLabelStyle={{color: '#A69D9D'}}/>
				    		</div>
				    		<div className="form-message">
				    			<TextField floatingLabelText="Message"
				    				value={this.state.message}
				    				onChange={this.handleMessageChange}
				    				hintText="Enter your message"
				    				rows={3} rowsMax={7}
				    				multiLine floatingLabelFixed
				    				underlineStyle={{borderColor: '#A69D9D'}}
				    				underlineFocusStyle={{borderColor: '#5C5656'}}
				    				floatingLabelFocusStyle={{color: '#5C5656'}}
								    floatingLabelStyle={{color: '#A69D9D'}}/>
				    		</div>
				    		<div className="form-submit">
				    			<RaisedButton label="Submit" backgroundColor={'#A69D9D'} 
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