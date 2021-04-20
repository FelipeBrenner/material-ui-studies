import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  appBar: {
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color= "inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.grow}></div>
          <Button variant="outlined" color="secondary">Fazer Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Home;