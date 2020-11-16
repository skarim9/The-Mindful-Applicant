import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Navbar from './Navbar';
import Drawer from './Drawer';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6B9BC0',
      contrastText: '#fff',
    },
    secondary: {      
      main: '#97B695',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Palanquin',
      'Montserra',
    ].join(','),
  }
});


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignContent: 'column',
      backgroundColor: '#6B9BC0',
      height: '100vh',
    },
    container: {
      height: '100vh',
      width: '100vh'
    }
  }),
);

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div style={{overflow: 'auto'}}>
      <Navbar />
      <div className={classes.root}>
          <Drawer />
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <div>
              <Typography variant="h5" style={{color: "#FFFFFF", paddingTop: theme.spacing(1)}}>Overview</Typography>
              <Typography variant="h4" style={{color: "#FFFFFF", paddingBottom: theme.spacing(1)}}>Social Emotional Profile</Typography>
              <Paper style={{width: '200%', height: '80%', alignContent: 'center', justifyContent: 'center'}}>
                <Typography variant="h3" style={{textAlign: 'center', color: "#6B9BC0", paddingTop: theme.spacing(25)}}>Take our Social Emotional Quiz now!</Typography>
                <div style={{alignContent: 'center', justifyContent: 'center', position: 'absolute'}}>
                  <Button>Hello!</Button>
                </div>
              </Paper>
            </div>
          </MuiThemeProvider>
      </div>
    </div>
  );
}
