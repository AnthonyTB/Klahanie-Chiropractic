import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const LastSeen = props => {
  const classes = useStyles();
  const { values, handleChange } = props;
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const continuer = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel ref={inputLabel} id='demo-simple-select-label'>
              Are you a returining paitent?
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              hintText='Yes or No'
              onChange={handleChange('returning')}
              defaultValue='Are you a returining paitent?'
              value={values.returning}
              className='Select'
              labelWidth={labelWidth}
            >
              <MenuItem value='Are you a returining paitent?' disabled>
                Are you a returining paitent?
              </MenuItem>
              <MenuItem value='Yes'>Yes</MenuItem>
              <MenuItem value='No'>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            hintText='Last seen date'
            floatingLabelText='If so, when were you last seen?'
            onChange={handleChange('lastSeen')}
            defaultValue={values.lastSeen}
            className='textField'
          />
          <br />
          <RaisedButton
            label='Continue'
            primary={true}
            style={styles.button}
            onClick={continuer}
          />
          <RaisedButton
            label='Back'
            primary={false}
            style={styles.button}
            onClick={back}
          />
        </div>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15
  }
};

export default LastSeen;
