import { createStyles } from '@material-ui/core';

export default () =>
  createStyles({
    root: {
      flex: `0 0 calc(${100 / 7}% - 10px)`,
      height: '100px',
      margin: '5px',
      padding: '5px',
      backgroundColor: '#e4f0f5',
      border: '1px solid rgba(50,50,50,.2)',
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    button:{
      padding: '0px',
      justifyContent: 'flex-start',
      textTransform: 'inherit'
    },
    dotContainer:{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      height: '30px',
      alignContent: 'baseline',
    },
    reminderDot: {
      height: '10px',
      width: '10px',
      borderRadius: '100%',
      marginRight: '5px',
      marginBottom: '5px',
    },
  });
