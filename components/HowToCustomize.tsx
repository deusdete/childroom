import { Box, Chip, Container, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";


const features = [
  {
    name: "1º passo",
    description: "Tire uma foto do seu quarto e faça o upload na plataforma.",
  },
  {
    name: "2º passo",
    description: "Escolha até três temas de sua preferência.",
  },
  {
    name: "3º passo",
    description:
      "Aguarde a plataforma criar seu quarto dos sonhos e veja o resultado final.",
  },
];

export default function HowToCustomize() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#fff", py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "2rem", color: "#3B2173" }}
          >
            Como personalizar meu quarto?
          </Typography>
        </Box>
        <Stack direction={isMobile ? "column" : "row"} justifyContent="space-between">
          {features.map((feature) => (
            <Box sx={{ p: 5 }}>
              <Chip
                label={feature.name}
                sx={{ backgroundColor: "#FFD300", fontWeight: 700, mb: 2 }}
              />
              <Typography sx={{ fontSize: "1rem", fontWeight: 4000 }}>
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
