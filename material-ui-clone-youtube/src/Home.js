import React, { useState, useEffect } from "react";
import clsx from "clsx";
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
  Grid,
  Hidden,
  Switch,
  Avatar,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
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

import { api } from "./services/api";

const drawerWidth = 240;

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
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(18) + 1,
    },
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
  divAvatar: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

/* const videos = [
  {
    id: 1,
    title: "LUCAS INUTILISMO - Flow Podcast #212",
    channel: "Flow Podcast",
    views: "5,6 mi de visualizações",
    date: "há 6 meses",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjs2A34JZ0bd5aHW1aAikt1IkHaj6mqO_sQ_MPOdQ=s88-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/qOer7KEMHIo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcT1eRkya-xP_kUwG91eMtJQS1fA",
  },
  {
    id: 2,
    title: "DIOGO DEFANTE - Flow Podcast #184",
    channel: "Flow Podcast",
    views: "2,9 mi de visualizações",
    date: "há 8 meses",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjs2A34JZ0bd5aHW1aAikt1IkHaj6mqO_sQ_MPOdQ=s88-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/mtcudot_Urs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhzNWRrJPok6CSA63alsq_KqcGoQ",
  },
  {
    id: 3,
    title: "EVERSON ZOIO - Podpah #26",
    channel: "Podpah",
    views: "5,1 mi de visualizações",
    date: "Transmitido há 4 meses",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwniChRToD--JOEs8A18uXL3jSlsxAGpO2uUFdzbO=s88-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/Zt2qxGtcKyY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlHl6HxG5a4AHTzPp3UH4pTDioxg",
  },
  {
    id: 4,
    title: "PODPAH 24H - PARTE 1: JULIO COCIELO, PSIU,...",
    channel: "Podpah",
    views: "5 mi de visualizações",
    date: "Transmitido há 1 mês",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwniChRToD--JOEs8A18uXL3jSlsxAGpO2uUFdzbO=s88-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/skaCREeM5EA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxuRvf-FnGmyDN8hZq1BTvBQu6fQ",
  },
  {
    id: 5,
    title: "TUDO PARECIA MAS NÃO ERA UM SONHO (FUNK...",
    channel: "DJ Lucas Beat",
    views: "179 mil visualizações",
    date: "há 4 dias",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhQ-OMWJfFZ68yME17P6VhnmLmfkn2xNz8tGMYg_g=s88-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/ve1_9okkuqA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf3xpxqJaw7Q7km2BGGf81fWTktw",
  },
  {
    id: 6,
    title: "LUCAS - DJ LUCAS BEAT & CAMILLA E LUDMILLA",
    channel: "DJ Lucas Beat",
    views: "230 mil visualizações",
    date: "há 3 semanas",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhQ-OMWJfFZ68yME17P6VhnmLmfkn2xNz8tGMYg_g=s88-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/mJnNCMrfCss/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYdJidKwZ5lg_Iv4uTeBKZtwpZPw",
  },
  {
    id: 7,
    title: 'NEYMAR: "JÁ NÃO LIGO MAIS PRA BOLA DE OURO, QUERO A...',
    channel: "TNT Sports Brasil",
    views: "11 mil visualizações",
    date: "há 25 minutos",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhxwvI3uv1cMpQKVMp6QLrmOsTouJmagoVleW_7=s48-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/jLBsBYFN6Z8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArPg8BRhDuB4ybe8RQSc9Rt35_yg",
  },
  {
    id: 8,
    title: "Dribles Mais Humilhantes de Neymar Jr",
    channel: "iLance7i",
    views: "3,8 mi de visualizações",
    date: "há 6 meses",
    avatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhXn6L2eeQYeX9KXIzv4Ue6hte-cu-8rukfGBhYfQ=s48-c-k-c0x00ffffff-no-rj",
    thumb:
      "https://i.ytimg.com/vi/oUuA_PGr1-Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtqvzDz60oM9xhB--pjLZRm2T57Q",
  },
]; */

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const videos = [];

  function viewsDescription(views) {
    if (views < 1000000)
      return `${views
        .toString()
        .substring(0, views.length - 3)} mil visualizações`;
    else {
      const decimal = Number(
        views.toString().substring(views.length - 6, views.length - 5)
      );

      if (decimal)
        return `${Number(
          views.toString().substring(0, views.length - 6)
        )},${decimal} mi de visualizações`;
      else
        return `${Number(
          views.toString().substring(0, views.length - 6)
        )} mi de visualizações`;
    }
  }

  function dateDescription(publishedAt) {
    const date = new Date(publishedAt);
    const now = new Date();
    const days =
      Math.abs(now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
    if (days < 7) {
      return `há ${days.toFixed(0) - 1} dias`;
    } else if (days < 30) {
      return `há ${(days / 7).toFixed(0) - 1} semanas`;
    } else if (days < 365) {
      return `há ${(days / 30).toFixed(0) - 1} meses`;
    } else return `há ${(days / 365).toFixed(0) - 1} anos`;
  }

  useEffect(() => {
    api.get().then((response) => {
      response.data.items.forEach((item) => {
        videos.push({
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          views: viewsDescription(item.statistics.viewCount),
          date: dateDescription(item.snippet.publishedAt),
          avatar: "https://avatars.githubusercontent.com/u/23401362?v=4",
          thumb: item.snippet.thumbnails.maxres.url,
        });
      });
    });
  }, []);

  console.log(videos);

  // api.get().then((response) => console.log(response));

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            aria-label="menu"
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === "dark"
                ? "./images/branco.png"
                : "./images/preto.png"
            }
            alt="youtube"
            className={classes.logo}
          />
          <div className={classes.grow}></div>
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>
          <IconButton className={classes.icons}>
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
      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
            variant="permanent"
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
        </Hidden>
        <Box>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>
          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <div className={classes.divAvatar}>
                    <Avatar alt={item.channel} src={item.avatar} />
                    <Box>
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant="body1"
                        color="textPrimary"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        display="block"
                        variant="body2"
                        color="textSecondary"
                      >
                        {item.channel}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {`${item.views} •`}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.date}
                      </Typography>
                    </Box>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
