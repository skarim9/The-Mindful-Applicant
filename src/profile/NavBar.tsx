import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {auth} from '../firebase-db/config'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#6B9BC0',
    },
    secondary: {      
      main: '#fff',
      contrastText: '#97B695',
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
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    
  }),
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar
          position = "static" 
          // style = {{height:"min-content"}}
        >
          <Toolbar
            // style = {{minHeight:"min-content", maxHeight: "min-content"}}
          >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" className={classes.title} >
              The Mindful Applicant
            </Typography>
            
            <button onClick = {() => { auth.signOut()}}>Sign Out</button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}
