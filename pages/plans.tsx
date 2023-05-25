import { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Grid from "@mui/material/Unstable_Grid2";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  priceText: {
    color: "#3B2173",
    fontWeight: 700,
    fontSize: "0.8rem",
  },
  price: {
    color: "#3B2173",
    fontWeight: 700,
    fontSize: "1.5em",
    marginLeft: 5,
    marginRight: 5,
  },
});

const plans = [
  {
    title: "Free",
    description: "Faça até 03 imagens",
    price: "0,00",
  },
  {
    title: "Profissional",
    description: "Faça até 20 imagens por dia",
    price: "49,90",
  },
];

const Plans: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();

  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: "#F0F3FC",
          justifyContent: "center",
          minHeight: "80vh",
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ my: 5 }}>
            <Typography
              sx={{ fontWeight: 700, fontSize: "2rem", color: "#3B2173" }}
            >
              Planos
            </Typography>
          </Box>

          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="center"
            spacing={5}
          >
            {plans.map((plan) => (
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  width: "100%",
                  py: 10,
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems={"center"}
                  spacing={2}
                  sx={{ p: 10 }}
                >
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                    }}
                  >
                    {plan.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography className={classes.priceText}>R$</Typography>
                    <Typography className={classes.price}>
                      {plan.price}
                    </Typography>
                    <Typography className={classes.priceText}>/mês</Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 400,
                      fontSize: "0.8rem",
                    }}
                  >
                    {plan.description}
                  </Typography>
                  <Button
                    color="primary"
                    component="button"
                    size="large"
                    variant="contained"
                    href="#"
                    sx={{ borderRadius: 10 }}
                  >
                    Começar
                  </Button>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Plans;
