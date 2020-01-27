import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();

    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        email,
        cellPhone,
        services,
        returning,
        lastSeen
      }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <List>
            <ListItem
              primaryText='First Name'
              secondaryText={firstName}
              className='confirmInfo'
            />
            <ListItem
              primaryText='Last Name'
              secondaryText={lastName}
              className='confirmInfo'
            />
            <ListItem
              primaryText='Email'
              secondaryText={email}
              className='confirmInfo'
            />
            <ListItem
              primaryText='Cell Phone'
              secondaryText={cellPhone}
              className='confirmInfo'
            />
            <ListItem
              primaryText='Service'
              secondaryText={services}
              className='confirmInfo'
            />
            <ListItem
              primaryText='Returning paitent'
              secondaryText={returning}
              className='confirmInfo'
            />
            <ListItem
              primaryText='Last time seen'
              secondaryText={lastSeen}
              className='confirmInfo'
            />
          </List>
          <br />
          <RaisedButton
            label='Confirm & Continue'
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

export default Confirm;
