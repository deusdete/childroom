import { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

import useSWR from "swr";

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
import Script from "next/script";
import { useSession } from "next-auth/react";

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
    title: "Básico",
    description: "Faça até 03 imagens",
    price: "10,00",
    buyButtonId: "buy_btn_1NDe58CSFCiUm89eacqC0n3b",
    publishableKey: "pk_test_iwIGX4fSviMAmcZxZuQDRxqm",
  },
  {
    title: "Profissional",
    description: "Faça até 20 imagens por dia",
    price: "49,90",
    buyButtonId: "buy_btn_1NDe58CSFCiUm89eacqC0n3b",
    publishableKey: "pk_test_iwIGX4fSviMAmcZxZuQDRxqm",
  },
];

const Plans: NextPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { data: session } = useSession();

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/remaining", fetcher);

  const classes = useStyles();

  return (
    <>
      <Script async src="https://js.stripe.com/v3/buy-button.js" />
      <Header />
      <Box
        sx={{
          backgroundColor: "#F0F3FC",
          justifyContent: "center",
          minHeight: "80vh",
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              my: 5,
            }}
          >
            <Typography
              sx={{ fontWeight: 700, fontSize: "2rem", color: "#3B2173" }}
            >
              Planos
            </Typography>
            {session?.user?.email && (
              <Box>
                <Typography sx={{ color: "#3B2173" }}>
                  Creditos, você tem atualmente{" "}
                  <span className="font-semibold text-gray-400">
                    {data?.remainingGenerations}{" "}
                    {data?.remainingGenerations > 1 ? "credits" : "credit"}
                  </span>
                  . Purchase more below.
                </Typography>
              </Box>
            )}
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
                  {session?.user?.email ? (
                    // @ts-ignore
                    <stripe-buy-button
                      buy-button-id={plan.buyButtonId}
                      publishable-key={plan.publishableKey}
                      client-reference-id={session.user.email}
                      customer-email={session.user.email}
                    />
                  ) : (
                    <Button
                      color="primary"
                      component="button"
                      size="large"
                      variant="contained"
                      href="/login"
                      sx={{ borderRadius: 10 }}
                    >
                      Começar
                    </Button>
                  )}
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
