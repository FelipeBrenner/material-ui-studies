import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Home from "./Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      background: {
        header: darkMode ? "#181818" : "#009688",
        dark: darkMode ? "#232323" : "#ededed",
        paper: darkMode ? "#666" : "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
