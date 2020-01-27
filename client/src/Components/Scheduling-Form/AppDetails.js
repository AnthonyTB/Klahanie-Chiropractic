import React, { Component } from './node_modules/react';
import MuiThemeProvider from './node_modules/material-ui/styles/MuiThemeProvider';
import TextField from './node_modules/material-ui/TextField';
import RaisedButton from './node_modules/material-ui/RaisedButton';

export class AppDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <TextField
            hintText='Which Service Are You Interested In?'
            floatingLabelText='Choose A Service'
            onChange={handleChange('service')}
            defaultValue={values.service}
          />
          <br />
          <RaisedButton
            label='Continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label='Back'
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
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

export default AppDetails;
