import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { parseTime } from 'utils/date'
import styles from "./styles";

const hexToRGB = (hex, alpha = 1) => 
  `${parseInt(hex.slice(1, 3), 16)}, ${parseInt(hex.slice(3, 5), 16)}, ${parseInt(hex.slice(5, 7), 16)}, ${alpha}`;


const ReminderItem = ({ classes, reminder, deleteReminder, editReminder }) => (
  <div
    className={classes.container}
    style={{
        border: `1px solid ${reminder.color}`, 
        background: `rgba(${hexToRGB(reminder.color, 0.4)})`, 
      }}
  >
    <div>
      <Typography className={classes.typography}>
        {`${parseTime(reminder.date)} - ${reminder.title}`}
      </Typography>

      {reminder.city && (
      <Typography className={classes.typography}>
        {`${reminder.city.description}`}
        {reminder.weather && `. ${reminder.weather.main} (${reminder.weather.description})`}
      </Typography>
        )}
    </div>
    <div style={reminder.city ? {flexDirection:'column'}:{}} className={classes.iconsContainer}>
      <EditOutlinedIcon className={classes.icon} onClick={() => editReminder(reminder)} />
      <DeleteForeverOutlinedIcon className={classes.icon} onClick={() => deleteReminder(reminder)} />
    </div>
  </div>
);


ReminderItem.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    typography: PropTypes.string.isRequired,
    iconsContainer: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,

  reminder: PropTypes.shape({
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
    }).isRequired,

  deleteReminder: PropTypes.func.isRequired,
  editReminder: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReminderItem);
