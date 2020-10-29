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

const Sidebar = (
    <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Overview" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Quiz" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Layers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RecentActorsIcon />
      </ListItemIcon>
      <ListItemText primary="Portfolio" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText primary="Library" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TimelineIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    </div>
  )

export default Sidebar