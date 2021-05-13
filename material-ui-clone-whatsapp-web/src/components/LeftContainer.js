import React from "react";
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
  Box,
} from "@material-ui/core";
import NoSignal from "../svg/NoSignal";

const list = [
  { id: 1, name: "Milani", text: "Poode", image: <ImageIcon /> },
  { id: 2, name: "Kim", text: "Aham", image: <WorkIcon /> },
  {
    id: 3,
    name: "Vou te surpreender",
    text: "Delela: KKKK",
    image: <BeachAccessIcon />,
  },
];

function LeftContainer({ classes }) {
  return (
    <Grid item xs={3}>
      <CardHeader
        className={classes.rightBorder}
        avatar={<Avatar aria-label="Recipe">H</Avatar>}
      />
      <Paper className={classes.paper} elevation={0} square="true">
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
          <ListItem key={key}>
            <Box className={classes.profilePicture}>
              <Avatar className={classes.avatar}>{item.image}</Avatar>
            </Box>
            <ListItemText primary={item.name} secondary={item.text} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}

export default LeftContainer;
