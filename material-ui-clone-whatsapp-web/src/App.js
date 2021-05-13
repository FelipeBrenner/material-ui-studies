import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Card } from "@material-ui/core";

import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

const styles = () => ({
  root: {
    padding: "50px 100px",
    zIndex: 999,
    position: "absolute",
  },
  card: {
    display: "flex",
    height: "calc(100vh - 100px)",
  },
  rightBorder: {
    borderRight: "solid #d0D0D0 1px",
  },
  content: {
    marginTop: 0,
  },
  background: {
    position: "absolute",
    height: 200,
    width: "100%",
    top: 0,
    background: "#7159C1",
  },
  rightContainer: {
    background:
      "url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center",
    flex: 1,
  },
  heightAdjust: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    background: "#9de1fe",
    padding: 20,
  },
  information: {
    color: "#444",
  },
});

const App = ({ classes }) => (
  <div>
    <div className={classes.background} />
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid container>
            <LeftContainer classes={classes} />
            <RightContainer classes={classes} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(App);
