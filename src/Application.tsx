import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
// database imports
import { signInWithGoogle } from './firebase-db/config'

import './App.css';
import Profile from './profile/Profile'
import Quiz from './quiz/Quiz';


import { UserContext } from "./providers/UserProvider";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Navbar from './profile/NavBar';
import Drawer from './profile/Drawer';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import History from './history/History'


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
    fontFamily: ['Montserrat',].join(','),
  }
});


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignContent: 'column',
      backgroundColor: '#6B9BC0',
      height: '100%',
    },
    container: {
      height: '100%',
      width: '100%'
    },
    paper: {
      width: '100%',
      height: '80vh',

      alignContent: 'center',
      justifyContent: 'center',
      overflow: 'auto',
      borderRadius: '10px',
      color: '#6B9BC0'
    }
  }),
);

function Application() {
  const classes = useStyles();

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className={classes.root} style = {{justifyContent:'center'}}>
            {/* <Drawer /> */}
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <div style={{ width: "95%", marginLeft: '5px', marginRight: '5px', paddingBottom:'5px'}}>
                <Typography variant="h4" style={{ color: "#FFFFFF", paddingTop: '1%', paddingBottom: '1%'}}>Social Emotional Profile</Typography>
                <Switch>

                  <Route path="/profile" >
                    <Paper className={classes.paper}>
                      <Profile />
                    </Paper>
                  </Route>

                  <Route path="/quiz" >
                    <Paper className={classes.paper}>
                      <Quiz />
                    </Paper>
                  </Route>

                  <Route path="/history" >
                    <Paper className={classes.paper}>
                      <History />
                    </Paper>
                  </Route>

                  <Route path="/" >
                    <Redirect to="/profile" />
                  </Route>

                </Switch>
              </div>
            </MuiThemeProvider>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Application;
