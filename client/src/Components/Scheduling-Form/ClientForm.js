import React, { Component } from 'react';
import FormClientDetails from './FormClientDetails';
import Confirm from './Confirm';
import Success from './Success';
import FormServices from './FormServices';
import AppDetails from './AppDetails';
import LastSeen from './LastSeen';

export class ClientForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cellPhone: '',
    services: '',
    returning: 'Are you a returning paitent',
    lastSeen: '',
    appDetails: ''
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      cellPhone,
      services,
      returning,
      lastSeen,
      appDetails
    } = this.state;

    const values = {
      firstName,
      lastName,
      email,
      cellPhone,
      services,
      returning,
      lastSeen,
      appDetails
    };

    switch (step) {
      case 1:
        return (
          <FormClientDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <LastSeen
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormServices
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
    }
  }
}
export default ClientForm;
