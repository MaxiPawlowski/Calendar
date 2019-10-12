import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { createReminder } from 'actions';
import ReminderForm from 'components/ReminderForm';
import styles from './styles'

class Calendar extends Component {
  handleSave = (values) => {
    const { addReminder } = this.props;
    addReminder(values);
  }

  render() {
    const { classes, reminders } = this.props;
    console.log(reminders);
    return (
      <div className={classes.root}>
        <ReminderForm handleSave={this.handleSave} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reminders: state.remindersReducer.reminders,
});

const mapDispatchToProps = (dispatch) => ({
  addReminder: (reminder) => dispatch(createReminder(reminder))
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
  addReminder: PropTypes.func.isRequired
};

export const StyledApp = withStyles(styles)(Calendar);

export default connect(mapStateToProps, mapDispatchToProps)(StyledApp);
