import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import {
  Paper,
  Typography,
  Grid,
  CardHeader,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const list = [
  { id: 1, name: "Diego", text: "Lorem ipsum", image: <ImageIcon /> },
  { id: 2, name: "Robson", text: "Lorem ipsum", image: <WorkIcon /> },
  { id: 3, name: "Cleiton", text: "Lorem ipsum", image: <BeachAccessIcon /> },
];

const LeftContainer = ({ classes }) => (
  <Grid item xs={3}>
    <CardHeader
      className={classes.rightBorder}
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          H
        </Avatar>
      }
    />
    <Paper className={classes.paper} elevation={0}>
      <Typography className={classes.information} variant="subheader">
        Acesse nossa comunidade no Discord e fique por dentro das novidades!
      </Typography>
    </Paper>
    <List>
      {list.map((item) => (
        <ListItem>
          <Avatar>{item.image}</Avatar>
          <ListItemText primary={item.name} secondary={item.text} />
        </ListItem>
      ))}
    </List>
  </Grid>
);

export default LeftContainer;
