import { createStyles } from '@material-ui/core';

export default () => 
  createStyles({
    root:{
      display: 'flex',
      flexDirection: 'column'
    },
    geoSuggest:{
      fontSize: '1rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      lineHeight: '1.1875em',
    },
    geoInput:{
      borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
    },
    suggestItem:{
      fontSize: '1rem',
      padding: '.5em .65em',
      cursor: 'pointer',
      listStyle: 'none',
    },
    suggestItemActive:{
      background: '#267dc0',
      color: '#fff',
    },
    suggestList:{
      padding: 0,
      borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
      borderLeft: '1px solid rgba(0, 0, 0, 0.42)',
      borderRight: '1px solid rgba(0, 0, 0, 0.42)',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    },
    suggestListHidden:{
      border:'none'
    },
  });
