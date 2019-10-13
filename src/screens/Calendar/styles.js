import { createStyles } from '@material-ui/core';

export default () => 
  createStyles({
    root: {
      display: 'flex',
    },
    sidebar:{
      flexBasis: "20%",
      padding: "0px 1%",
      borderRight: '1px solid rgba(0, 0, 0, 0.12)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }
  });
