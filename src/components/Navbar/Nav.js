import NavLinks from "./NavLinks";
import NavMenu from "./NavMenu";
import OpenCartButton from "./OpenCartButton";
import MemoryIcon from "@mui/icons-material/Memory";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { AppBar, Toolbar, createTheme, Box, Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#76B900",
    },
    secondary: {
      main: "#212121",
    },
    light: {
      main: "#fff",
    },
  },
  typography: {
    h5: {
      "@media (max-width:400px)": {
        fontSize: 16,
      },
    },
  },
  mixins: {
    toolbar: {
      "@media (min-width: 0px)": {
        minHeight: "80px",
      },
    },
  },
});

const StyledAppBar = styled(AppBar)(() => ({
  display: "flex",
  padding: "0 7.5%",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  justifyContent: "space-between",
}));

const StyledBox = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
}));

const Nav = ({ toggleDrawer, cart }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar color="secondary" position="sticky" elevation={0}>
        <StyledToolbar>
          <StyledBox>
            <StyledBox sx={{ mr: "4rem" }}>
              <MemoryIcon sx={{ mr: 1 }} />
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography
                  color="primary"
                  variant="h5"
                  component="h1"
                  textTransform="uppercase"
                  sx={{ fontFamily: "Geforce" }}
                >
                  Component Nexus
                </Typography>
              </Link>
            </StyledBox>
            <NavLinks />
          </StyledBox>
          <StyledBox>
            <NavMenu />
            <OpenCartButton cart={cart} toggleDrawer={toggleDrawer} />
          </StyledBox>
        </StyledToolbar>
      </StyledAppBar>
    </ThemeProvider>
  );
};

export default Nav;
