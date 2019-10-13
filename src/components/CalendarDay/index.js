import React from "react";
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from "./styles";

const ReminderForm = ({ classes, date, reminders, handleDayExpand }) => (
  <div className={classes.root}>
    {date.getDate()}
    <div className={classes.dotContainer}>
      {reminders.map(({ color }, index) => (
        <div
          key={index}
          className={classes.reminderDot}
          style={{backgroundColor:color}}
        />
        ))}
    </div>
    {(reminders.length > 0) && (
    <Button className={classes.button} onClick={() => handleDayExpand({reminders, date})}>
          See More...
    </Button>
      )}
  </div>
);

ReminderForm.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    dotContainer: PropTypes.string.isRequired,
    reminderDot: PropTypes.string.isRequired,
  }).isRequired,

  date: PropTypes.instanceOf(Date).isRequired,

  reminders: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    city: PropTypes.string.isRequired
  })).isRequired,

  handleDayExpand: PropTypes.func,
};

ReminderForm.defaultProps = {
  handleDayExpand: () => {},
}

export default withStyles(styles)(ReminderForm);
