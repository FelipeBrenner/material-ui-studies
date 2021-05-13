import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
import {
  Grid,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
} from "@material-ui/core";

function RightContainer({ classes }) {
  return (
    <Grid className={classes.heightAdjust} item xs={9}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe">
            <ImageIcon />
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="Milani"
      />
      <CardContent className={classes.rightContainer} />
    </Grid>
  );
}

export default RightContainer;
