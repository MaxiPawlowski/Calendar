import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import styles from "./styles";

const ReminderForm = ({ classes, prevValues, handleSave }) => {
  const [values, setValues] = useState(prevValues);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleSave(values);
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        id="title"
        label="Title"
        value={values.title}
        onChange={handleChange('title')}
        margin="normal"
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker value={values.date} onChange={(date) => handleChange('date')({target:{value:date}})} />
      </MuiPickersUtilsProvider>
      <TextField
        id="color"
        label="Color"
        type="color"
        value={values.color}
        onChange={handleChange('color')}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="city"
        label="City"
        value={values.city}
        onChange={handleChange('city')}
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

ReminderForm.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  prevValues: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      city: PropTypes.string.isRequired
    }),
    PropTypes.bool
  ]),
  handleSave: PropTypes.func.isRequired
};

ReminderForm.defaultProps = {
  prevValues: {
    title: '',
    color: '',
    date: new Date(Date.now()),
    city: ''
  },
}

export default withStyles(styles)(ReminderForm);
