import React from 'react'
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import PersonIcon from '@mui/icons-material/Person';

const useStyles = makeStyles({
  drawer: {
    width: 240,
  },
  avatar: {
    margin: 10,
  },
});

const ListenerHome = () => {
    const classes = useStyles();

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawer,
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="User Name" secondary="user@example.com" />
          </ListItem>
        </List>
        <Divider />
        <List>
          {['Artist 1', 'Artist 2', 'Artist 3'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
}

export default ListenerHome