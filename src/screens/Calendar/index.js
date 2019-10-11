import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { createReminder } from 'actions';
import styles from './styles'

class Calendar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        BOILERPLATE
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
};

export const StyledApp = withStyles(styles)(Calendar);

export default connect(mapStateToProps, mapDispatchToProps)(StyledApp);
