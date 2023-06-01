import { useEffect } from "react";
import { NextPage } from "next";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import {
  Box,
  Button,
  Container,
  TextField,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // checks if the user is
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status]);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F0F3FC",
          justifyContent: "center",
          alignItens: "center",
          minHeight: "100vh",
          padding: 0,
        }}
      >
        <Container className="tela-login" maxWidth="lg">
          <Box sx={{ my: 5 }}>
            <Typography
              sx={{ fontWeight: 700, fontSize: "2rem", color: "#3B2173" }}
            >
              Login
            </Typography>
          </Box>

          <CardContent className="box-login">
            <Typography>Faça login com o Google.</Typography>

            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
                marginBottom: 2,
              }}
            >
              <Button
                className="google"
                variant="contained"
                size="large"
                startIcon={
                  status === "loading" ? <CircularProgress /> : <GoogleIcon />
                }
                onClick={() => signIn("google")}
              >
                {status !== "loading" && "Google"}
              </Button>
            </Box>
          </CardContent>
        </Container>
      </Box>
    </>
  );
};

export default Login;
