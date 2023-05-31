import { FC, ReactNode, useContext } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import {
  AppBar,
  Box,
  Button,
  Stack,
  Link,
  Toolbar,
  ListItem,
  ListItemText,
  List,
  useMediaQuery,
  Container,
  Typography,
} from "@mui/material";

import Logo from "./Logo";

import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import AuthContext from "../contexts/AuthContext";
import { useSession } from "next-auth/react";

interface HeaderProps {
  onSidebarMobileOpen?: () => void;
  children?: ReactNode;
}

const useStyles = makeStyles({
  navDisplayFlex: {
    display: "flex",
    flexDirection: "row",
  },
  linkText: {
    textDecoration: "none",
    color: "white",
    fontSize: "0.875rem",
  },
  buttonLink: {},
});

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Planos", path: "/plans" },
  { title: "Contato", path: "/contact" },
];

const Header: FC<HeaderProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { isAuthenticated } = useContext(AuthContext);

  const classes = useStyles();

  return (
    <AppBar
      elevation={1}
      sx={{
        backgroundColor: "background.paper",
        color: "text.secondary",
        flexGrow: 1,
        px: 1,
      }}
    >
      <Toolbar
        variant="dense"
        disableGutters={true}
        sx={{ minHeight: isMobile ? 50 : 70 }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            justifyContent={{ xs: "flex-start", sm: "space-between" }}
            alignItems="center"
            spacing={2}
          >
            <NextLink href={"/"} style={{ margin: 0 }}>
              {isMobile ? <Logo width={50} height={20} /> : <Logo />}
            </NextLink>
            <Box>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navDisplayFlex}
              >
                {navLinks.map(({ title, path }, index) => (
                  <Link
                    key={title}
                    component={NextLink}
                    href={path}
                    className={classes.linkText}
                  >
                    <ListItem button>
                      <Typography
                        sx={{
                          fontSize: isMobile ? "0.8rem" : "1rem",
                          fontWeight: 400,
                          color: "#000",
                        }}
                      >
                        {title}
                      </Typography>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
            <Stack
              sx={{ display: { xs: "none", sm: "flex" } }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Link
                color="textPrimary"
                underline="none"
                variant="body1"
                href={
                  isAuthenticated === "authenticated" ? "/dashboard" : "/login"
                }
                sx={{ fontSize: isMobile ? "0.8rem" : "1rem", fontWeight: 400 }}
              >
                {isAuthenticated === "authenticated" ? "Dashboard" : "Login"}
              </Link>
              {isAuthenticated !== "authenticated" && (
                <Button
                  color="primary"
                  component="button"
                  size="large"
                  variant="contained"
                  sx={{
                    fontSize: isMobile ? "0.8rem" : "1rem",
                    fontWeight: 400,
                    borderRadius: 10,
                  }}
                >
                  Começar
                </Button>
              )}
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onSidebarMobileOpen: PropTypes.func,
  children: PropTypes.node,
};

export default Header;
