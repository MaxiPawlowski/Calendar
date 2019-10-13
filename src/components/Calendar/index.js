import React from "react";
import CalendarDay from 'components/CalendarDay'
import { withStyles } from '@material-ui/styles';
import {
  addDays,
  compareDates,
  daysInMonth,
  daysName,
  lastDateOfCalendar,
  firstDateOfCalendar
} from "utils/date"
import PropTypes from 'prop-types';
import styles from "./styles";

const ReminderForm = ({ classes, reminders, calendarDate, handleDayExpand }) => {
  const days = [];
  const firstItemDate = firstDateOfCalendar(calendarDate);
  const lastItemDate = lastDateOfCalendar(calendarDate);

  for (let i = 1; i <= firstItemDate.getDay(); i++) {
    days.unshift(
      <CalendarDay
        key={days.length}
        reminders={reminders.filter(({ date }) => compareDates(date, addDays(firstItemDate, -i)))}
        date={addDays(firstItemDate, -i)}
      />
    );   
  }
  
  for (let i = 1; i <= daysInMonth( calendarDate ); i++) {
    const calendarItemDate = new Date(`${calendarDate.month}/${i}/${calendarDate.year}`);
    days.push(
      <CalendarDay
        key={days.length}
        handleDayExpand={handleDayExpand}
        reminders={reminders.filter(({ date }) => compareDates(date, calendarItemDate))}
        date={calendarItemDate} 
      />
    );    
  }
    
  for (let i = 1; i <= 6 - lastItemDate.getDay(); i++) {
    days.push(
      <CalendarDay
        key={days.length}
        reminders={reminders.filter(({ date }) => compareDates(date, addDays(lastItemDate, i)))}
        date={addDays(lastItemDate, i)}
      />
    );   
  }

  return (
    <div className={classes.root}>
      {daysName.map((day, index) => (
        <div key={index} className={classes.days}>
          {day}
        </div>
      ))}
      {days}
    </div>
  );
};

ReminderForm.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    days: PropTypes.string.isRequired,
  }).isRequired,

  calendarDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,

  reminders: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    city: PropTypes.string.isRequired
  })).isRequired,

  handleDayExpand: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReminderForm);
