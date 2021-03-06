import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<div className="textFields">
						<TextField
							hintText="Enter Your First Name"
							floatingLabelText="First Name"
							onChange={handleChange('firstName')}
							defaultValue={values.firstName}
							className="textField"
						/>
						<br />
						<TextField
							hintText="Enter Your Last Name"
							floatingLabelText="Last Name"
							onChange={handleChange('lastName')}
							defaultValue={values.lastName}
							className="textField"
						/>
						<br />
						<TextField
							hintText="Enter Your Email"
							floatingLabelText="Email"
							onChange={handleChange('email')}
							defaultValue={values.email}
							className="textField"
						/>
						<br />
						<TextField
							hintText="Enter Your Cell Phone Number"
							floatingLabelText="Cell Phone Number"
							onChange={handleChange('cellPhone')}
							defaultValue={values.cellPhone}
							className="textField"
						/>
					</div>
					<RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue} />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15
	}
};

export default FormUserDetails;
