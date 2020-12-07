import React from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import Grid from '@material-ui/core/Grid'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Title } from '@material-ui/icons';
import { CssBaseline } from '@material-ui/core';

import {auth} from '../firebase-db/config'

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
    login: {
      flexGrow: 1,
      marginLeft: 'auto'
    },
    title: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" style={{height:"min-content"}}>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Box className={classes.title}/>
            <Button  onClick = {() => {auth.signOut()}}><Typography>Sign Out</Typography></Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}
