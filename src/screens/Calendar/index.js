import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { createReminder, changeCalendarDate } from 'actions';
import ReminderForm from 'components/ReminderForm';
import CalendarComponent from 'components/Calendar';
import RemindersDialog from 'components/RemindersDialog';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { dateToCalendar, calendarToDate } from "utils/date"
import DateFnsUtils from '@date-io/date-fns';
import styles from './styles'

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      dialog:{
        date: new Date(Date.now()),
        reminders: []
      },
    }
  }

  handleSave = (values) => {
    const { addReminder } = this.props;
    addReminder(values);
  }

  handleDialogOpen = dialog => {
    this.setState({
      open:true,
      dialog,
    });
  };

  handleDialogClose = () => {
    this.setState({
      open:false,
      dialog: {
        date: new Date(Date.now()),
        reminders: []
      }
    });
  };

  render() {
    const { classes, reminders, calendarDate, changeDate } = this.props;
    const { open, dialog } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.sidebar}>
          <ReminderForm handleSave={this.handleSave} />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              openTo="year"
              views={["year", "month"]}
              label="Calendar Date"
              value={calendarToDate(calendarDate)}
              onChange={(date) => changeDate(dateToCalendar(date))}
            />
          </MuiPickersUtilsProvider>
        </div>
        <CalendarComponent calendarDate={calendarDate} reminders={reminders} handleDayExpand={this.handleDialogOpen} />
        <RemindersDialog data={dialog} open={open} handleClose={this.handleDialogClose} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reminders: state.remindersReducer.reminders,
  calendarDate: state.dateReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addReminder: (reminder) => dispatch(createReminder(reminder)),
  changeDate: (date) => dispatch(changeCalendarDate(date))
});


Calendar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,

  reminders: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    city: PropTypes.string.isRequired
  })).isRequired,

  calendarDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,

  addReminder: PropTypes.func.isRequired,
  changeDate: PropTypes.func.isRequired
};

export const StyledApp = withStyles(styles)(Calendar);

export default connect(mapStateToProps, mapDispatchToProps)(StyledApp);
