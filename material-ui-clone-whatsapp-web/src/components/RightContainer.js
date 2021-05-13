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
} from "@material-ui/core";

function RightContainer({ classes }) {
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
