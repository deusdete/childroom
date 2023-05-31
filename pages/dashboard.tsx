import Head from "next/head";
import React, { useState, useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Footer from "../components/Footer";
import prisma from "../lib/prismadb";
import useSWR from "swr";
import { Room } from "@prisma/client";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import HeaderDashboard from "../components/HeaderDashboard";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Avatar,
  Box,
  Stack,
  Container,
  Divider,
  Typography,
  Button,
  Paper,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AuthContext from "../contexts/AuthContext";
import { GenerateResponseData } from "./api/generate";
import { UploadDropzone } from "react-uploader";
import { roomType, rooms, themeType, themes } from "../utils/dropdownTypes";
import { UploadWidgetResult, Uploader } from "uploader";

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

const uploader = Uploader({
  apiKey: !!process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    ? process.env.NEXT_PUBLIC_UPLOAD_API_KEY
    : "free",
});

export default function Dashboard({ rooms }: { rooms: Room[] }) {
  const themeMui = useTheme();
  const isMobile = useMediaQuery(themeMui.breakpoints.down("sm"));
  const { user } = useContext(AuthContext);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const classes = useStyles();

  const [originalPhoto, setOriginalPhoto] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<UploadWidgetResult | null>(
    null
  );
  const [restoredImage, setRestoredImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [restoredLoaded, setRestoredLoaded] = useState<boolean>(false);
  const [sideBySide, setSideBySide] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const [theme, setTheme] = useState<themeType>("Modern");
  const [room, setRoom] = useState<roomType>("Living Room");

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, mutate } = useSWR("/api/remaining", fetcher);
  const { data: session, status } = useSession();

  const options = {
    layout: "modal",
    maxFileCount: 1,
    mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
    editor: { images: { crop: false } },
    tags: [data?.remainingGenerations > 3 ? "paid" : "free"],
    styles: {
      colors: {
        primary: "#2563EB", // Primary buttons & links
        error: "#d23f4d", // Error messages
        shade100: "#fff", // Standard text
        shade200: "#fffe", // Secondary button text
        shade300: "#fffd", // Secondary button text (hover)
        shade400: "#fffc", // Welcome text
        shade500: "#fff9", // Modal close button
        shade600: "#fff7", // Border
        shade700: "#fff2", // Progress indicator background
        shade800: "#fff1", // File item background
        shade900: "#ffff", // Various (draggable crop buttons, etc.)
      },
    },
    onValidate: async (file: File): Promise<undefined | string> => {
      return data.remainingGenerations === 0
        ? `Não há mais créditos restantes. Compre mais em planos.`
        : undefined;
    },
  };

  function uploadImage() {
    uploader
      .open({
        maxFileCount: 1,
        mimeTypes: ["image/jpeg", "image/png", "image/webp"],
        editor: {
          images: {
            cropShape: "circ", // "rect" also supported.
            cropRatio: 1 / 1, // "1" is enforced for "circ".
          },
        },
      })
      .then(
        (files) => {
          if (files.length !== 0) {
            setPhotoName(files[0].originalFile.originalFileName);
            setOriginalPhoto(files[0].fileUrl.replace("raw", "thumbnail"));
            setOriginalFile(files[0]);
          }
        },
        (error) => alert(error)
      );
  }

  async function generatePhoto() {
    await new Promise((resolve) => setTimeout(resolve, 200));
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl: originalPhoto, theme, room }),
    });

    let response = (await res.json()) as GenerateResponseData;
    if (res.status !== 200) {
      setError(response as any);
    } else {
      mutate();
      const rooms =
        (JSON.parse(localStorage.getItem("rooms") || "[]") as string[]) || [];
      rooms.push(response.id);
      localStorage.setItem("rooms", JSON.stringify(rooms));
      setRestoredImage(response.generated);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }

  const router = useRouter();

  useEffect(() => {
    if (router.query.success === "true") {
      toast.success("Payment successful!");
    }
  }, [router.query.success]);

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>RoomGPT Dashboard</title>
      </Head>
      <HeaderDashboard />
      <Box sx={{ backgroundColor: "#F0F3FC" }}>
        <Container maxWidth="lg" sx={{ py: 5 }}>
          <Grid
            container
            spacing={2}
            direction={isMobile ? "column-reverse" : "row"}
          >
            <Grid item xs={12} md={4}>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 5,
                  width: "100%",
                }}
              >
                <Stack direction="column" spacing={2} sx={{ p: 2 }}>
                  <Typography variant="h1" className={classes.title}>
                    Meu perfil
                  </Typography>
                  <Accordion
                    className="perfil"
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={user.user?.image ? user.user.image : ""}
                      />
                      <div className="usuario">
                        <Typography className={classes.subtitle}>
                          {user.user?.name}
                        </Typography>
                        <Typography className={classes.body}>
                          {user.user?.email}
                        </Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>Você tem 05/25 créditos.</Typography>
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
                          <Button color="primary" variant="contained">
                            Download
                          </Button>
                        </Stack>
                      </Stack>
                    ))}
                  </div>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
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
                      <Button
                        onClick={uploadImage}
                        className={classes.linkText}
                      >
                        Clique aqui para selecionar uma imagem
                      </Button>
                    </Stack>
                  </Box>
                </Paper>
                <Typography className={classes.title}>
                  2º - Escolha seu tema preferido
                </Typography>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={1}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  sx={{ textAlign: "center", mt: 5 }}
                >
                  {imagens.map((item, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <Button
                        onClick={() => setTheme(themes[index])}
                        variant="text"
                        sx={{ padding: 0, margin: 0 }}
                      >
                        <img
                          alt="Original photo of a room"
                          src={item.image}
                          style={{
                            display: "flex",
                            width: "100%",
                            maxWidth: "auto",
                            height: "auto",
                            padding: 0,
                            margin: 0,
                            borderRadius: 20,
                            borderWidth: 2,
                            borderColor: "#ccc",
                            border: themes[index] === theme ? "solid" : "none",
                          }}
                          loading="lazy"
                        />
                      </Button>
                    </Grid>
                  ))}
                </Grid>
                <Box>
                  <Button
                    onClick={generatePhoto}
                    color="primary"
                    variant="contained"
                    size="large"
                  >
                    <span>GERAR IMAGEM</span>
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
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
