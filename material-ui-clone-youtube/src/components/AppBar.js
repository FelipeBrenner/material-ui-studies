import { AppBar, Toolbar, IconButton, Button, Switch } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";

import { Menu, Apps, MoreVert, AccountCircle } from "@material-ui/icons";

function AppBarComponent({ classes, handleDrawer, darkMode, setDarkMode }) {
  const theme = useTheme();

  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.Menu}
          aria-label="menu"
          onClick={handleDrawer}
        >
          <Menu />
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
  );
}

export default AppBarComponent;
