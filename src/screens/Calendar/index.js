import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ReminderForm from 'components/ReminderForm';
import CalendarComponent from 'components/Calendar';
import RemindersDialog from 'components/RemindersDialog';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { dateToCalendar, firstDateOfCalendar } from "utils/date"
import DateFnsUtils from '@date-io/date-fns';
import {
  createReminder,
  changeCalendarDate,
  getWeatherFromReminders,
  editReminders,
  deleteReminders
} from 'actions';
import styles from './styles'

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      editing: false,
      dialog:{
        date: new Date(Date.now()),
        reminders: []
      },
    }
  }

  handleSave = (values) => {
    const { addReminder, editReminder } = this.props;
    const { editing } = this.state;
    
    if (editing){
      editReminder(values)
    } else {
      addReminder({ ...values, id: Date.now() })
    }
    
    this.setState({
      editing: false,
    });
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

  handleEdit = reminder => {
    this.setState({
      editing: reminder,
      open:false,
      dialog: {
        date: new Date(Date.now()),
        reminders: []
      }
    });
  };

  handleDelete = (reminder) => {
    const { removeReminders } = this.props;
    this.setState((prevState)=> ({
      dialog: {
        ...prevState.dialog,
        reminders: prevState.dialog.reminders.filter(reminderItem => reminderItem.id !== reminder.id),
      },
    }), () => removeReminders([reminder]));
  };

  render() {
    const {
      classes,
      reminders,
      calendarDate,
      changeDate,
      getWeathers,
      weathers,
      removeReminders
    } = this.props;
    const { open, dialog, editing } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.sidebar}>
          {editing ? <ReminderForm prevValues={editing} handleSave={this.handleSave} /> : <ReminderForm handleSave={this.handleSave} />}
          
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              openTo="year"
              views={["year", "month"]}
              label="Calendar Date"
              value={firstDateOfCalendar(calendarDate)}
              onChange={(date) => changeDate(dateToCalendar(date))}
            />
          </MuiPickersUtilsProvider>
        </div>
        <CalendarComponent
          calendarDate={calendarDate}
          reminders={reminders}
          deleteReminder={removeReminders}
          handleDayExpand={this.handleDialogOpen}
        />
        <RemindersDialog
          data={{ ...dialog, weathers }}
          open={open}
          editReminder={this.handleEdit}
          deleteReminder={this.handleDelete}
          getWeatherFromReminders={getWeathers}
          handleClose={this.handleDialogClose}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reminders: state.remindersReducer.reminders,
  weathers: state.remindersReducer.weathers,
  calendarDate: state.dateReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addReminder: (reminder) => dispatch(createReminder(reminder)),
  changeDate: (date) => dispatch(changeCalendarDate(date)),
  getWeathers: (reminders) => dispatch(getWeatherFromReminders(reminders)),
  editReminder: (reminder) => dispatch(editReminders(reminder)),
  removeReminders: (reminder) => dispatch(deleteReminders(reminder)),
});


Calendar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    sidebar: PropTypes.string.isRequired,
  }).isRequired,

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

  calendarDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,

  addReminder: PropTypes.func.isRequired,
  changeDate: PropTypes.func.isRequired,
  removeReminders: PropTypes.func.isRequired,
  getWeathers: PropTypes.func.isRequired,
  editReminder: PropTypes.func.isRequired,
};

export const StyledApp = withStyles(styles)(Calendar);

export default connect(mapStateToProps, mapDispatchToProps)(StyledApp);
