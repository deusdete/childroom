import { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  Box,
  Button,
  Container,
  TextField,
  Paper,
  Stack,
  Card,
  CardActions,
  CardContent,
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


const FaleConosco: NextPage = () => {
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
          minHeight: "60vh",
          paddingTop: 10,
          paddingBottom: 20
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ my: 5 }}>
            <Typography
              sx={{ fontWeight: 700, fontSize: "2rem", color: "#3B2173" }}
            >
              Contato
            </Typography>
            <Typography
              sx={{ fontWeight: 400, fontSize: ".9rem", color: "#000" }}
            >
              Entre em contato para tira alguma dúvida ou qualquer outro assunto relevante.
            </Typography>
          </Box>

          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="center"
            spacing={5}
          >
            
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  width: "100%",
                  p: 1,
                }}
              >
                <Stack
                  direction="column"
                  justifyContent="start"
                  alignItems={"start"}
                  sx={{ p: 5 }}
                >
                  <TextField fullWidth label="Nome" id="Nome" margin="dense" />
                  <TextField fullWidth label="E-mail" id="E-mail" margin="dense" />
                  <TextField fullWidth label="Telefone" id="Telefone" margin="dense" />
                  <TextField fullWidth label="Mensagem" margin="dense" />
                  <Button
                    color="primary"
                    component="button"
                    size="large"
                    variant="contained"
                    sx={{
                      fontSize: isMobile ? "0.8rem" : "1rem",
                      fontWeight: 400,
                      borderRadius: 10,
                      marginTop: 1,
                    }}
                  >
                    Enviar
                  </Button>
                </Stack>
              </Paper>
            
          </Stack>
        </Container>
      </Box>
          
      <Footer />
    </>
  );
};

export default FaleConosco;
