import React, { useState } from 'react';

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from '../../components/Home';

const useStyles = makeStyles({
  root: {},
});

const Dashboard: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        light: '#33877c',
        main: '#00695c',
        dark: '#004940',
      },
      secondary: {
        light: '#ffac33',
        main: '#ff9800',
        dark: '#b26a00',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        // dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default Dashboard;
