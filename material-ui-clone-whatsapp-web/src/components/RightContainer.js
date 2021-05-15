import React from "react";
import { MoreVert, Search } from "@material-ui/icons";
import {
  Grid,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Box,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardHeaderActions: {
    display: "flex",
    justifyContent: "space-between",
    background: theme.palette.background.dark,
    height: 59,
  },
  heightAdjust: {
    display: "flex",
    flexDirection: "column",
  },
  rightContainer: {
    background:
      "url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png) center",
    flex: 1,
    marginTop: 0,
  },
  button: {
    width: 40,
    height: 40,
  },
}));

function RightContainer() {
  const classes = useStyles();

  return (
    <Grid className={classes.heightAdjust} item xs={9}>
      <Box className={classes.cardHeaderActions}>
        <CardHeader
          avatar={<Avatar aria-label="Recipe" src="./images/milani.jpg" />}
          title="Milani"
        />
        <CardActions>
          <IconButton className={classes.button} aria-label="search">
            <Search />
          </IconButton>
          <IconButton className={classes.button} aria-label="options-right">
            <MoreVert />
          </IconButton>
        </CardActions>
      </Box>
      <CardContent className={classes.rightContainer} />
    </Grid>
  );
}

export default RightContainer;
