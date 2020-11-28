import React from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
// database imports

import './App.css';
import Quiz from './quiz/Quiz';

import Dashboard from './profile/Dashboard';
import PointsAllocation from './points-allocation/PointsAllocation';
import SignIn from './login/login';
import SignUp from './signup/Signup';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Navbar from './profile/NavBar';
import Drawer from './profile/Drawer';

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
    fontFamily: ['Montserrat'
    ].join(','),
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
    }
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div className="App">
     <BrowserRouter>

        <div>
      <Navbar />
      <div className={classes.root}>
          <Drawer />
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <div style = {{width:"100%", marginRight:'10px'}}>
              <Typography variant="h5" style={{color: "#FFFFFF"}}>Overview</Typography>
              <Typography variant="h4" style={{color: "#FFFFFF"}}>Social Emotional Profile</Typography>

              <Paper style={{width: '100%', height:'80vh', alignContent: 'center', justifyContent: 'center', overflow: 'auto', borderRadius: '18px'}}>
                
        
          <div style = {{margin:'10px', color:'#6B9BC0'}}>

              <Switch>
               <Route path="/points-reallocation" component={PointsAllocation} />
               <Route path="/quiz" component={Quiz}/>
               <Route path="/signin" component={SignIn}/>
               <Route path="/signup" component={SignUp}/>
               
             </Switch>
             
          </div> 

              </Paper>
            </div>
          </MuiThemeProvider>
      </div>
    </div>

        
    </BrowserRouter>
      </div>
  
    );
  }

export default App;
