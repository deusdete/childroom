import { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Grid from '@mui/material/Unstable_Grid2';

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

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
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundColor: "#F0F3FC",
          justifyContent: "center",
          minHeight:  "80vh",
          paddingTop: 10,
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

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {plans.map((plan) => (
              <Grid xs={12} md={6}
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
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
                    <Typography
                      sx={{
                        color: "#3B2173",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                      }}
                    >
                      R$
                    </Typography>
                    <Typography
                      sx={{
                        color: "#3B2173",
                        fontWeight: 700,
                        fontSize: "1.5em",
                        px: 1
                      }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#3B2173",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                      }}
                    >
                      /mês
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 400,
                      fontSize: "0.8rem",
                    }}
                  >
                    R$
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
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Plans;
