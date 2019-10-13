import { createStyles } from '@material-ui/core';

export default () =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '1%',
      flexBasis: '80%'
    },
    days: {
      flex: `0 0 calc(${100 / 7}% - 10px)`,
      margin: '5px',
      padding: '5px',
      backgroundColor: '#e4f0f5',
      border: '1px solid rgba(50,50,50,.2)',
      borderRadius: '4px',
      textAlign: 'center',
    },
  });
