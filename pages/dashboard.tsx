import Head from "next/head";
import * as React from 'react';
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

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

export default function Dashboard({ rooms }: { rooms: Room[] }) {
  const { data: session } = useSession();

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };


  const classes = useStyles();
  
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

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
                  <Typography variant="h1" className={classes.title}>Meu perfil</Typography>
                  <Accordion className="perfil" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Avatar alt="Remy Sharp" src="/avatar.png" />
                      <div className="usuario">
                        <Typography className={classes.subtitle}>
                          Maria Fernanda
                        </Typography>
                        <Typography className={classes.body}>
                          mariafernanda@gmail.com
                        </Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Você tem 05/25 créditos.
                      </Typography>
                    </AccordionDetails>
                  </Accordion> 

                  <Divider />

                  <Typography className={classes.title}>
                    Minhas fotos
                  </Typography>
                  
                  <div className="historico">
                    {imagens.map((item) => (
                      <Stack direction="row">
                        <img
                          alt="Original photo of a room"
                          src={item.image}
                          className="w-full object-cover h-40 rounded-2xl"
                          style={{
                            width: "45%",

                            height: "auto",
                            padding: 0,
                            marginBottom: 10,
                            borderRadius: 5,
                          }}
                          loading="lazy"
                        />
                        <Stack spacing={1}>
                          <Typography className={classes.subtitle}>
                            Tema: <span>Aventura na selva</span>
                          </Typography>
                          <Typography className={classes.body}>
                            Dia: 03/04/23 às 13:45
                          </Typography>
                          <Button
                            color="primary"
                            variant="contained"
                          >
                            Download
                          </Button>
                        </Stack>
                      </Stack>
                    ))}
                  </div>

                </Stack>
              </Paper>
            </Grid2>
            <Grid2 xs={6} md={8}>
              <Stack direction="column" spacing={2}>
                <Typography className={classes.title}>
                1º - Faça o upload da sua foto
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
                  2º - Escolha seu tema preferido
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
                <Box>
                  <Button 
                    color="primary" 
                    variant="contained"
                    size="large"
                    >
                    <span>GERAR IMAGEM</span>  
                  </Button>
                </Box>
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
