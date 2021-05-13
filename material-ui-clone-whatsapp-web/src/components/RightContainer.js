import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
import {
  Grid,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
} from "@material-ui/core";

const RightContainer = ({ classes }) => (
  <Grid className={classes.heightAdjust} item xs={9}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          <ImageIcon />
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title="Diego"
    />
    <CardContent className={[classes.rightContainer, classes.content]} />
  </Grid>
);

export default RightContainer;
