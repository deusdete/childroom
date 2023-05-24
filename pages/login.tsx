import { NextPage } from "next";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Footer from "../components/Footer";
import Header from "../components/Header";

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

import {
  Box,
  Button,
  Container,
  TextField,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const Login: NextPage = () => {

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F0F3FC",
          justifyContent: "center",
          alignItens: "center",
          minHeight:  "100vh",
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
              <Typography >Faça login e senha ou entre com uma conta existente.</Typography>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                    marginBottom: 2,
                  }}
                >
                  <TextField fullWidth label="email" id="email" />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                    marginBottom: 2,
                  }}
                >
                  <TextField fullWidth label="senha" id="senha" />
                </Box>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  ou
                </Typography>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                    marginBottom: 2,
                  }}
                >
                  <Button className="google" variant="contained" size="large" startIcon={<GoogleIcon />}>
                    Google
                  </Button>
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                    marginBottom: 2,
                  }}
                >
                  <Button className="facebook" variant="contained" size="large" startIcon={<FacebookIcon />}>
                    Facebook
                  </Button>
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                  <Button variant="contained" size="large">
                    Criar conta
                  </Button>
                </Box>
               
              </CardContent>

        </Container>
      </Box>
      
    </>
  );
};

export default Login;
