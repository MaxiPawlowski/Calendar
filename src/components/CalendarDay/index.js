import React from "react";
import { withStyles } from '@material-ui/styles';
import { Button, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import styles from "./styles";

const CalendarDay = ({ classes, date, reminders, handleDayExpand, deleteReminder }) => (
  <div className={classes.root}>
    <Typography className={classes.typography}>
      {date.getDate()}
      {reminders.length > 0 && <DeleteForeverIcon className={classes.icon} onClick={() => deleteReminder(reminders)} />}
    </Typography>
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

CalendarDay.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    typography: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    dotContainer: PropTypes.string.isRequired,
    reminderDot: PropTypes.string.isRequired,
  }).isRequired,

  date: PropTypes.instanceOf(Date).isRequired,

  reminders: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    id: PropTypes.number.isRequired,
    city: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        location: PropTypes.shape({
          lat: PropTypes.number.isRequired,
          lng: PropTypes.number.isRequired,
        }).isRequired
      }),
    ]),
  })).isRequired,

  handleDayExpand: PropTypes.func,
  deleteReminder: PropTypes.func,
};

CalendarDay.defaultProps = {
  handleDayExpand: () => {},
  deleteReminder: () => {},
}

export default withStyles(styles)(CalendarDay);
