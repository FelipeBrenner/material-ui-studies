import React from "react";
import { Grid, Card, makeStyles, Switch } from "@material-ui/core";

import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "19px calc(198vw - 186vw)",
    zIndex: 997,
    position: "absolute",
  },
  card: {
    display: "flex",
    height: "calc(100vh - 38px)",
  },
  header: {
    position: "absolute",
    height: 127,
    width: "100%",
    top: 0,
    background: theme.palette.background.header,
  },
  switch: {
    float: "right",
    zIndex: 999,
  },
  body: {
    position: "absolute",
    height: "calc(100% - 127px)",
    width: "100%",
    top: 127,
    background: theme.palette.background.dark,
  },
}));

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.header} />
      <div className={classes.body}></div>
      <Switch
        value={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className={classes.switch}
      />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Card className={classes.card} square={true}>
            <Grid container>
              <LeftContainer />
              <RightContainer />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
