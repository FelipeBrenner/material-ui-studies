import React from "react";
import { Grid, Card, makeStyles } from "@material-ui/core";

import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

const useStyles = makeStyles(() => ({
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
  background: {
    position: "absolute",
    height: 200,
    width: "100%",
    top: 0,
    background: "#7159C1",
  },
  rightContainer: {
    background:
      "url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png) center",
    flex: 1,
    marginTop: 0,
  },
  heightAdjust: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    background: "#fed859",
    padding: 13,
    display: "flex",
    alignItems: "center",
  },
  information: {
    color: "#444",
  },
  profilePicture: {
    paddingRight: 15,
    width: 48,
    height: 48,
  },
  avatar: {
    width: 49,
    height: 49,
  },
}));

function App() {
  const classes = useStyles();

  return (
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
}

export default App;
