import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
  Typography,
  ListSubheader,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import Subscriptions from "@material-ui/icons/Subscriptions";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";
import AddCircle from "@material-ui/icons/AddCircle";

const listItens = [
  {
    list: 1,
    itens: [
      { name: "Inicio", icon: <HomeIcon /> },
      { name: "Explorar", icon: <ExploreIcon /> },
      { name: "Inscrições", icon: <Subscriptions /> },
    ],
  },
  {
    list: 2,
    itens: [
      { name: "Biblioteca", icon: <VideoLibrary /> },
      { name: "Histórico", icon: <History /> },
    ],
  },
  {
    list: 3,
    itens: [
      { name: "Música", icon: <AddCircle /> },
      { name: "Esportes", icon: <AddCircle /> },
      { name: "Jogos", icon: <AddCircle /> },
      { name: "Filmes", icon: <AddCircle /> },
      { name: "Notícias", icon: <AddCircle /> },
      { name: "Ao vivo", icon: <AddCircle /> },
      { name: "Aprender", icon: <AddCircle /> },
      { name: "Videos do momento", icon: <AddCircle /> },
      { name: "Video em 360º", icon: <AddCircle /> },
    ],
  },
  {
    list: 4,
    itens: [{ name: "Procurar canais", icon: <AddCircle /> }],
  },
  {
    list: 5,
    itens: [
      { name: "YouTube Premium", icon: <AddCircle /> },
      { name: "Ao vivo", icon: <AddCircle /> },
    ],
  },
  {
    list: 6,
    itens: [
      { name: "Configurações", icon: <AddCircle /> },
      { name: "Histórico de denúncias", icon: <AddCircle /> },
      { name: "Ajuda", icon: <AddCircle /> },
      { name: "Enviar feedback", icon: <AddCircle /> },
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 30,
  },
  drawer: {
    width: 257,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 257,
    borderRight: "none",
  },
  drawerContainer: {
    overflow: "auto",
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    fontSize: 13,
    textTransform: "uppercase",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            src="./images/preto.png"
            alt="youtube"
            className={classes.logo}
          />
          <div className={classes.grow}></div>
          <IconButton className={classes.icons} color="inherit">
            <Apps />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {listItens[0].itens.map((item) => {
              return (
                <ListItem
                  button
                  key={item.name}
                  classes={{ root: classes.listItem }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={item.name}
                  />
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <List>
            {listItens[1].itens.map((item) => {
              return (
                <ListItem
                  button
                  key={item.name}
                  classes={{ root: classes.listItem }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={item.name}
                  />
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <Box ml={6} mr={8} mt={4} mb={4}>
            <Typography variant="body2">
              Faça login para curtir videos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button
                startIcon={<AccountCircle />}
                variant="outlined"
                color="secondary"
              >
                Fazer Login
              </Button>
            </Box>
          </Box>
          <Divider />
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                className={classes.subheader}
              >
                O Melhor do youtube
              </ListSubheader>
            }
          >
            {listItens[2].itens.map((item) => {
              return (
                <ListItem
                  button
                  key={item.name}
                  classes={{ root: classes.listItem }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={item.name}
                  />
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <List>
            {listItens[3].itens.map((item) => {
              return (
                <ListItem
                  button
                  key={item.name}
                  classes={{ root: classes.listItem }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={item.name}
                  />
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                className={classes.subheader}
              >
                Mais do YouTube
              </ListSubheader>
            }
          >
            {listItens[4].itens.map((item) => {
              return (
                <ListItem
                  button
                  key={item.name}
                  classes={{ root: classes.listItem }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={item.name}
                  />
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <List>
            {listItens[5].itens.map((item) => {
              return (
                <ListItem
                  button
                  key={item.name}
                  classes={{ root: classes.listItem }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={item.name}
                  />
                </ListItem>
              );
            })}
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
}

export default Home;
