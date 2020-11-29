import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
// database imports
import {signInWithGoogle} from './firebase-db/config'

import './App.css';
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

function Application() {
  const classes = useStyles();

  return (
    
    <div >

        <div>
      <Navbar />
      <div className={classes.root}>
          <Drawer />
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
                <div style = {{width:"100%", marginRight:'10px'}}>
                    
     <BrowserRouter>
                <Switch>

                <Route path="/profile" >
                    <Typography variant="h5" style={{color: "#FFFFFF"}}>Overview</Typography>
                    <Typography variant="h4" style={{color: "#FFFFFF"}}>Social Emotional Profile</Typography>

                    <Paper style={{width: '100%', height:'80vh', alignContent: 'center', justifyContent: 'center', overflow: 'auto', borderRadius: '18px'}}>
                        <History />
                    <div style = {{margin:'10px', color:'#6B9BC0'}}>
    
                    </div> 
                    </Paper>
              </Route>

                <Route path="/quiz" >
                    {/* <Typography variant="h5" style={{color: "#FFFFFF"}}>Overview</Typography> */}
                    <Typography variant="h4" style={{color: "#FFFFFF"}}>Social Emotional Quiz</Typography>

                    <Paper style={{width: '100%', height:'80vh', alignContent: 'center', justifyContent: 'center', overflow: 'auto', borderRadius: '18px'}}>
                        <Quiz/>
                
                    <div style = {{margin:'10px', color:'#6B9BC0'}}>
    
                    </div> 
                    </Paper>
              </Route>
              
             </Switch>
      </BrowserRouter>
            </div>
          </MuiThemeProvider>
      </div>
    </div>

        
      </div>
  
    );
  }

export default Application;
