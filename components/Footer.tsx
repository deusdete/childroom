import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import {
  AppBar,
  Box,
  Grid,
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
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import Logo from "./Logo";

import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

interface HeaderProps {
  onSidebarMobileOpen?: () => void;
  children?: ReactNode;
}

const useStyles = makeStyles({
  navDisplayFlex: {
    display: "flex",
  },
  linkText: {
    textDecoration: "none",
    color: "white",
    fontSize: "0.875rem",
  },
  buttonLink: {},
});

const navLinks = [
  { title: "Termos e condições", path: "/termos-e-condicoes" },
  { title: "Política de privacidade", path: "/politica-de-privacidade" },
  { title: "Fale conosco", path: "/fale-conosco" },
];
const Footer: FC<HeaderProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();

  return (
    <footer>
      <Box sx={{ backgroundColor: "#803DA9" }}>
        <Toolbar sx={{ minHeight: 100 }}>
          <Container maxWidth="lg">
            <Stack
              direction={isMobile ? "column" : "row"}
              justifyContent={{ xs: "center", sm: "space-between" }}
              alignItems={"center"}
              spacing={2}
              sx={{py: isMobile ? 5 : 2}}
            >
              <NextLink href={`"/"`} style={{ margin: 0 }}>
                {isMobile ? (
                  <Logo src="/RoomChild_2.png" />
                ) : (
                  <Logo src="/RoomChild_2.png" />
                )}
              </NextLink>
              <Box className="menu-footer">
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
                            color: "#FFFFFF",
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
                sx={{ display: "flex" }}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Link
                  color="textPrimary"
                  component="button"
                  underline="none"
                  variant="body1"
                  sx={{ color: "#fff" }}
                >
                  <InstagramIcon />
                </Link>
                <Link
                  color="textPrimary"
                  component="button"
                  underline="none"
                  variant="body1"
                  sx={{ color: "#fff" }}
                >
                  <FacebookIcon />
                </Link>
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </Box>
    </footer>
  );
};

export default Footer;
