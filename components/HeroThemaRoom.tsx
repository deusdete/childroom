import {
  Box,
  Stack,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

const rommThemes = [
  {
    name: "Room1",
    image: "/room-01.jpg",
  },
  {
    name: "Room2",
    image: "/room-02.jpg",
  },
  {
    name: "Room3",
    image: "/room-03.jpg",
  },
  {
    name: "Room4",
    image: "/room-04.jpg",
  },
  {
    name: "Room5",
    image: "/room-05.jpg",
  },
  {
    name: "Room6",
    image: "/room-06.jpg",
  },
];

export default function HeroThemaRoom() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ backgroundColor: "#F0F3FC", pb: 5 }}>
      <Container maxWidth="lg">
        <Box sx={{ alignItems: "center" }}>
          <Grid2
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 5 }}
            sx={{ position: "relative", top: -100, textAlign: "center" }}
          >
            <Grid2 xs={6}>
              <img
                src={"/quarto-01.jpg"}
                style={{
                  width: "100%",
                  maxWidth: "auto",
                  height: "auto",
                  padding: 0,
                  margin: 0,
                  borderRadius: 20,
                }}
                loading="lazy"
              />
            </Grid2>
            <Grid2 xs={6}>
              <img
                src={"/quarto-02.jpg"}
                style={{
                  width: "100%",
                  maxWidth: "auto",
                  height: "auto",
                  padding: 0,
                  margin: 0,
                  borderRadius: 20,
                }}
                loading="lazy"
              />
            </Grid2>
          </Grid2>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "2rem", color: "#3B2173" }}
          >
            Veja alguns de nossos temas
          </Typography>
          <Typography
            sx={{ fontWeight: 700, fontSize: "1rem", color: "#858585" }}
          >
            Conte com mais de 20 modelos de quartos temáticos.
          </Typography>
        </Box>
        <Grid2
          container
          rowSpacing={1}
          columnSpacing={1}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ textAlign: "center", mt: 5 }}
        >
          {rommThemes.map((item, index) => (
            <Grid2 xs={2} sm={4} md={4} key={index}>
                <img
                  alt="Original photo of a room"
                  src={item.image}
                  className="w-full object-cover h-40 rounded-2xl"
                  style={{
                    display: "flex",
                    width: "100%",
                    maxWidth: "auto",
                    height: "auto",
                    padding: 0,
                    margin: 0,
                    borderRadius: 20,
                  }}
                  loading="lazy"
                />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
