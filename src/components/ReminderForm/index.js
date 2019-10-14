import React, { useState, useRef, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import Geosuggest from 'react-geosuggest';
import styles from "./styles";

const randomHexColor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16)

const ReminderForm = ({ classes, prevValues, handleSave }) => {
  const geoInput = useRef(null);
  const [values, setValues] = useState({
    title: '',
    color: randomHexColor(),
    date: new Date(Date.now()),
    city: ''
  });
  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: name === 'title' ? event.target.value.substring(0, 30) : event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    handleSave(values);
    if (geoInput.current && geoInput.current.clear){
      geoInput.current.clear()
    }
    setValues({
      title: '',
      color: randomHexColor(),
      date: new Date(Date.now()),
      city: ''
    });
  }
  
  useEffect(() => {
    if (prevValues){
      setValues({ ...prevValues})
    }
  }, [prevValues])
  
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        id="title"
        label="Title"
        value={values.title}
        onChange={handleChange('title')}
        margin="normal"
        required
      />

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
          required
          value={values.date}
          onChange={(date) => handleChange('date')({target:{value:date}})}
        />
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

      <Geosuggest
        inputClassName={classes.geoInput + ' MuiInputBase-input MuiInput-input'}
        suggestItemClassName={classes.suggestItem}
        suggestItemActiveClassName={classes.suggestItemActive}
        suggestsClassName={classes.suggestList}
        suggestsHiddenClassName={classes.suggestListHidden}
        className={classes.geoSuggest}
        initialValue={values.city ? values.city.description: undefined}
        ref={geoInput}
        placeholder="City"
        onSuggestSelect={(params) => {          
          if (params){
            handleChange('city')({ 
              target: {
                value: {
                  location: params.location,
                  description: params.description,
                } 
              } 
            })
          }
        }}
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
    geoSuggest: PropTypes.string.isRequired,
    geoInput: PropTypes.string.isRequired,
    suggestItem: PropTypes.string.isRequired,
    suggestItemActive: PropTypes.string.isRequired,
    suggestList: PropTypes.string.isRequired,
    suggestListHidden: PropTypes.string.isRequired,
  }).isRequired,

  prevValues: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      id: PropTypes.number,
      city: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          description: PropTypes.string.isRequired,
          location: PropTypes.shape({
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
          })
        }),
      ]),
    }),
    PropTypes.bool,
  ]),
  handleSave: PropTypes.func.isRequired
};

ReminderForm.defaultProps = {
  prevValues: false,
}

export default withStyles(styles)(ReminderForm);
