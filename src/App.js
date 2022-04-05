import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./assets/fonts/GeForce/GeForce-Bold.ttf";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#76B900",
    },
    secondary: {
      main: "#212121",
    },
    light: {
      main: "#f5f5f5",
    },
  },
  mixins: {
    toolbar: {
      "@media (min-width: 0px)": {
        minHeight: "64px",
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "GeForce", "Arial", sans-serif',
  },
});

function App() {
  const linkStyle = {
    textDecoration: "none",
    color: "#f5f5f5",
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header linkStyle={linkStyle} />
        <Routes>
          <Route path="/" element={<Home linkStyle={linkStyle} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
