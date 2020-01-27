import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Select from '@material-ui/core/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export class FormServices extends Component {
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
          <Select
            hintText='Last seen date'
            floatingLabelText='If so, when were you last seen?'
            onChange={handleChange('services')}
            defaultValue={values.services}
            className='Select'
          >
            <option value='Chiropractic'>Chiropractic</option>
            <option value='Deep Tissue Massage'>Deep Tissue Massage</option>
            <option value='Soft Tissue Massage'>Soft Tissue Massage</option>
          </Select>
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

export default FormServices;
