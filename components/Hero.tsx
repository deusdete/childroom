import { useState } from "react";
import {
  Box,
  Button,
  Link,
  Stack,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import Bg1 from "../public/bg-1.png";

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundImage: `url("/bg-1.png")`,
        backgroundColor: "background.default",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        minHeight: isMobile ? '80vh' : "100vh",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg" >
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={5}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: isMobile ? "2rem" : "3rem",
              textAlign: "center",
            }}
          >
            Crie o quarto dos seus sonhos através de vários temas e em poucos
            segundos.
          </Typography>
          <Button
            color="primary"
            size="large"
            variant="contained"
            href="#contained-buttons"
            sx={{ borderRadius: 10, px: 10 }}
          >
            <Typography sx={{ fontWeight: 400, fontSize: isMobile ? '1rem' :"2rem" }}>
              QUERO CRIAR AGORA
            </Typography>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
