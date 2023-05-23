import Head from "next/head";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Footer from "../components/Footer";
import prisma from "../lib/prismadb";
import { Room } from "@prisma/client";
import { RoomGeneration } from "../components/RoomGenerator";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import HeaderDashboard from "../components/HeaderDashboard";
import Grid2 from "@mui/material/Unstable_Grid2";
import {
  Avatar,
  Box,
  Stack,
  Container,
  Divider,
  Typography,
  Button,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#3B2173",
  },
  subtitle: {
    fontSize: "0.8rem",
    fontWeight: 400,
    color: "#000",
  },
  body: {
    fontSize: "0.7rem",
    fontWeight: 400,
    color: "#858585",
  },
  linkText: {
    textDecoration: "none",
    fontSize: "0.8rem",
    fontWeight: 700,
    color: "#3B2173",
  },
  buttonLink: {},
});

const imagens = [
  {
    name: "Room1",
    image: "/room1.png",
  },
  {
    name: "Room2",
    image: "/room2.png",
  },
  {
    name: "Room3",
    image: "/room3.png",
  },
  {
    name: "Room4",
    image: "/room4.png",
  },
  {
    name: "Room5",
    image: "/room3.png",
  },
  {
    name: "Room6",
    image: "/room4.png",
  },
];

export default function Dashboard({ rooms }: { rooms: Room[] }) {
  const { data: session } = useSession();

  const classes = useStyles();

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>RoomGPT Dashboard</title>
      </Head>
      <HeaderDashboard />
      <Box sx={{ backgroundColor: "#F0F3FC" }}>
        <Container maxWidth="lg" sx={{py: 5}}>
          <Grid2 container spacing={2}>
            <Grid2 xs={6} md={4}>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  width: "100%",
                }}
              >
                <Stack direction="column" spacing={2} sx={{ p: 2 }}>
                  <Typography className={classes.title}>Meu perfil</Typography>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Avatar alt="Remy Sharp" src="/avatar.png" />
                    <Box sx={{ ml: 1 }}>
                      <Typography className={classes.subtitle}>
                        Maria Fernanda
                      </Typography>
                      <Typography className={classes.body}>
                        mariafernanda@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Typography className={classes.title}>
                    Minhas fotos
                  </Typography>
                  {imagens.map((item) => (
                    <Stack direction="row" justifyContent="space-between">
                      <img
                        alt="Original photo of a room"
                        src={item.image}
                        className="w-full object-cover h-40 rounded-2xl"
                        style={{
                          width: "50%",

                          height: "auto",
                          padding: 0,
                          margin: 0,
                          borderRadius: 5,
                        }}
                        loading="lazy"
                      />
                      <Stack direction="column" spacing={1}>
                        <Typography className={classes.subtitle}>
                          Tema: <span>Aventura na selva</span>
                        </Typography>
                        <Typography className={classes.body}>
                          Dia: 03/04/23 às 13:45
                        </Typography>
                        <Button
                          color="primary"
                          size="large"
                          variant="contained"
                        >
                          Download
                        </Button>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid2>
            <Grid2 xs={6} md={8}>
              <Stack direction="column" spacing={2}>
                <Typography className={classes.title}>
                  1 Faça o upload da sua foto
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    width: "100%",
                    height: 200,
                  }}
                >
                  <Box>
                    <Stack direction="column" spacing={2} alignItems={"center"}>
                      <Typography className={classes.body}>
                        Arraste sua foto aqui
                      </Typography>
                      <Typography className={classes.linkText}>
                        ou clique aqui para importar
                      </Typography>
                    </Stack>
                  </Box>
                </Paper>
                <Typography className={classes.title}>
                  2 Escolha seu tema preferido
                </Typography>
                <Grid2
                  container
                  rowSpacing={1}
                  columnSpacing={1}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  sx={{ textAlign: "center", mt: 5 }}
                >
                  {imagens.map((item, index) => (
                    <Grid2 xs={2} sm={4} md={4} key={index}>
                      <Button variant="text" sx={{ padding: 0, margin: 0 }}>
                        <img
                          alt="Original photo of a room"
                          src={item.image}
                          className="w-full object-cover h-40 rounded-2xl"
                          style={{
                            width: "100%",
                            maxWidth: 300,
                            height: "auto",

                            borderRadius: 20,
                          }}
                          loading="lazy"
                        />
                      </Button>
                    </Grid2>
                  ))}
                </Grid2>
                <Button color="primary" size="large" variant="contained">
                  Gerar imagem
                </Button>
              </Stack>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session || !session.user) {
    return { props: { rooms: [] } };
  }

  let rooms = await prisma.room.findMany({
    where: {
      user: {
        email: session.user.email,
      },
    },
    select: {
      inputImage: true,
      outputImage: true,
    },
  });

  return {
    props: {
      rooms,
    },
  };
}
