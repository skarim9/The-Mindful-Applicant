import React from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Grid from '@material-ui/core/Grid'

import { Link } from 'react-router-dom';
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

const drawerWidth = 240;

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
    navBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    navBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },

  }),
);

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar 
        position="fixed" 
        className={clsx(classes.navBar, {
          [classes.navBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Box className={classes.title}/>
            <Button  onClick = {() => {auth.signOut()}}><Typography>Sign Out</Typography></Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          // variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemText>Home</ListItemText>
              </ListItem>
            </Link>
            <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemText>Profile</ListItemText>
              </ListItem>
            </Link>
            <Link to="/quiz" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemText>Quiz</ListItemText>
              </ListItem>
            </Link>
            <Link to="/history" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button onClick={handleDrawerClose}>
                <ListItemText>History</ListItemText>
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </MuiThemeProvider>
    </div>
  );
}
