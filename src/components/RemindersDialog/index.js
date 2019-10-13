import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/styles';
import { format } from 'date-fns';
import styles from "./styles";

const RemindersDialog = ({ handleClose, open, data, classes }) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Reminders for {format(data.date, 'MM/dd/yyyy')}</DialogTitle>
      <div className={classes.body}>
        {data.reminders.map((reminder, index) => (
          <div key={index}>
            {reminder.title}
          </div>
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
    reminders: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      city: PropTypes.string.isRequired
    })).isRequired,
  }).isRequired,

  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(RemindersDialog);
