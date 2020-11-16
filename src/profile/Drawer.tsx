import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LayersIcon from '@material-ui/icons/Layers';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      width: '240px',
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(4),
      paddingRight: theme.spacing(1),
    },
  }),
);



export default function Drawer() {
  const classes = useStyles();
 return (
   <div style={{color: "white"}} className={classes.drawerPaper}>
      <MuiThemeProvider theme={theme}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon style={{color: "white"}}/>
          </ListItemIcon>
          <ListItemText primary="Overview" style={{color: "white"}}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MenuBookIcon style={{color: "white"}}/>
          </ListItemIcon>
          <ListItemText primary="Quiz" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LayersIcon style={{color: "white"}}/>
          </ListItemIcon>
          <ListItemText primary="Layers" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RecentActorsIcon style={{color: "white"}}/>
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LibraryBooksIcon style={{color: "white"}}/>
          </ListItemIcon>
          <ListItemText primary="Library" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TimelineIcon style={{color: "white"}}/>
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon style={{color: "white"}}/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </MuiThemeProvider>
      </div>
  );
 }