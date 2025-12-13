import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#12161a",
      paper: "#181d22",
    },
    text: {
      primary: "#eeebe1",
      secondary: "#b8b5ad",
    },
    primary: {
      main: "#eeebe1", // boutons blancs
      contrastText: "#12161a",
    },
    secondary: {
      main: "#b8b5ad",
    },
  },
  typography: {
    fontFamily: "Inter Tight, system-ui, sans-serif",
    h1: {
      fontFamily: "Space Grotesk, sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "Space Grotesk, sans-serif",
      fontWeight: 500,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontFamily: "Space Grotesk, sans-serif",
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant="h3" component="h2" gutterBottom>
        WhiteKnight
      </Typography>
    </ThemeProvider>
  );
}

export default App;
