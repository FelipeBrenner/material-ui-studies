import React from "react";
import { MoreVert, Chat } from "@material-ui/icons";
import {
  Paper,
  Typography,
  Grid,
  CardHeader,
  CardActions,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
} from "@material-ui/core";
import NoSignal from "../svg/NoSignal";

const list = [
  {
    id: 1,
    name: "Milani",
    text: "Poode",
    image: "./images/milani.jpg",
  },
  {
    id: 2,
    name: "Kim",
    text: "Aham",
    image: "./images/kim.jpg",
  },
  {
    id: 3,
    name: "Vou te surpreender",
    text: "Delela: KKKK",
    image: "./images/grupo.jpg",
  },
];

function LeftContainer({ classes }) {
  return (
    <Grid item xs={3}>
      <Box className={classes.cardHeaderActions}>
        <CardHeader
          avatar={<Avatar aria-label="Recipe" src="./images/eu.jpg" />}
        />
        <CardActions className={classes.rightBorder}>
          <IconButton className={classes.button} aria-label="new-conversation">
            <Chat />
          </IconButton>
          <IconButton className={classes.button} aria-label="options-left">
            <MoreVert />
          </IconButton>
        </CardActions>
      </Box>
      <Paper className={classes.paper} elevation={0} square={true}>
        <Box className={classes.profilePicture}>
          <NoSignal />
        </Box>
        <Box className={classes.information}>
          <Typography variant="body1">Telefone desconectado</Typography>
          <Typography variant="body2">
            Certifique-se de que seu celular está conectado à internet.
          </Typography>
        </Box>
      </Paper>
      <List>
        {list.map((item, key) => (
          <ListItem key={key} button={true}>
            <Box className={classes.profilePicture}>
              <Avatar className={classes.avatar} src={item.image} />
            </Box>
            <ListItemText primary={item.name} secondary={item.text} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default LeftContainer;
