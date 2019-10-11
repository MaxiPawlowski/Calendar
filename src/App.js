import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import CalendarScreen from 'screens/Calendar';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <CssBaseline />
      <CalendarScreen />
    </ThemeProvider>
  </Provider>
);

export default App;
