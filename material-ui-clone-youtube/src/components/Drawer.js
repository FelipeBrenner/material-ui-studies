import clsx from "clsx";

import {
  Toolbar,
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
  Hidden,
} from "@material-ui/core";

import {
  AccountCircle,
  Home,
  Explore,
  Subscriptions,
  VideoLibrary,
  History,
  AddCircle,
} from "@material-ui/icons";

const listItens = [
  {
    list: 1,
    itens: [
      { name: "Inicio", icon: <Home /> },
      { name: "Explorar", icon: <Explore /> },
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

export function DrawerComponent({ classes, open }) {
  return (
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
            {listItens[0].itens.map((item, index) => {
              return (
                <ListItem
                  button
                  key={index}
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
            {listItens[1].itens.map((item, index) => {
              return (
                <ListItem
                  button
                  key={index}
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
          {open && (
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
            ) && <Divider />}
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              open && (
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  className={classes.subheader}
                >
                  O Melhor do youtube
                </ListSubheader>
              )
            }
          >
            {listItens[2].itens.map((item, index) => {
              return (
                <ListItem
                  button
                  key={index}
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
            {listItens[3].itens.map((item, index) => {
              return (
                <ListItem
                  button
                  key={index}
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
              open && (
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  className={classes.subheader}
                >
                  Mais do YouTube
                </ListSubheader>
              )
            }
          >
            {listItens[4].itens.map((item, index) => {
              return (
                <ListItem
                  button
                  key={index}
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
            {listItens[5].itens.map((item, index) => {
              return (
                <ListItem
                  button
                  key={index}
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
  );
}

export default DrawerComponent;
