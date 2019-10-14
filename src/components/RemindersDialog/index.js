import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ReminderItem from 'components/ReminderItem'
import { withStyles } from '@material-ui/styles';
import { format } from 'date-fns';
import styles from "./styles";

const mergeArraysById = (arr1, arr2) => arr1.map((item) => ({ 
  ...item, 
  ...(arr2.find((itmInner) => itmInner.id === item.id)) 
}))

const RemindersDialog = ({
  handleClose,
  open,
  data,
  classes,
  getWeatherFromReminders,
  deleteReminder,
  editReminder
}) => {
  const reminders = mergeArraysById(data.reminders, data.weathers).sort((a, b) => a.date - b.date);

  useEffect(() => {
    getWeatherFromReminders(data.reminders);
  }, [data.reminders, getWeatherFromReminders])

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Reminders for {format(data.date, 'MM/dd/yyyy')}</DialogTitle> 
      <div className={classes.body}>
        {reminders.map((reminder, index) => (
          <ReminderItem
            deleteReminder={deleteReminder}
            editReminder={editReminder}
            key={index}
            reminder={reminder}
          /> 
        ))}
      </div>
    </Dialog>
  );
}

RemindersDialog.propTypes = {
  classes: PropTypes.shape({
    body: PropTypes.string.isRequired,
  }).isRequired,

  data: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,

    weathers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      weather: PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        main: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    ).isRequired,
    
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
  }).isRequired,

  handleClose: PropTypes.func.isRequired,
  getWeatherFromReminders: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired,
  editReminder: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(RemindersDialog);
