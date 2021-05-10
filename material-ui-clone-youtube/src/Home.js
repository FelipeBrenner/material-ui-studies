import React, { useState } from "react";

import { makeStyles, Box } from "@material-ui/core";

import Videos from "./components/Videos";
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(18) + 1,
    },
  },
  drawerContainer: {
    overflow: "auto",
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    fontSize: 13,
    textTransform: "uppercase",
  },
  divAvatar: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar
        classes={classes}
        handleDrawer={handleDrawer}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Box display="flex">
        <Drawer classes={classes} open={open} />
        <Videos classes={classes} />
      </Box>
    </div>
  );
}

export default Home;
