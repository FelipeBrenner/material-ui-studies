import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Home from "./Home";

function App() {
  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3ea6ff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
