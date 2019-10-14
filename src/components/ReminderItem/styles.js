import { createStyles } from '@material-ui/core';

export default () =>
  createStyles({
    container: {
      display: 'flex',
      borderRadius: '4px',
      justifyContent: 'space-between',
      padding: '10px',
      margin: '10px 0'
    },
    icon: {
      cursor: 'pointer',
    },
    iconsContainer: {
      display: 'flex',
      marginLeft: '10px',
      justifyContent: 'space-between',
    },
    typography: {
      display: 'block',
      verticalAlign: 'middle',
      lineHeight: 'normal',
      margin: '5px 0',
    },
  });
