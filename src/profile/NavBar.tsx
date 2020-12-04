import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Grid from '@material-ui/core/Grid'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Title } from '@material-ui/icons';

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
            <Button className={classes.login}>Login</Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>

  );
}
