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


const TermosCondicoes: NextPage = () => {
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
          paddingBottom: 10
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ my: 5 }}>
            <Typography
              sx={{ fontWeight: 700, fontSize: "2rem", color: "#3B2173" }}
            >
              Termos e condições
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
                  p: 5,
                }}
              >
                <Typography
                  sx={{ fontWeight: 400, fontSize: ".9rem", color: "#000" }}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </Typography>
                <Typography
                  sx={{ fontWeight: 400, fontSize: ".9rem", color: "#000" }}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </Typography>
                <Typography
                  sx={{ fontWeight: 400, fontSize: ".9rem", color: "#000" }}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </Typography>
                <Typography
                  sx={{ fontWeight: 400, fontSize: ".9rem", color: "#000" }}
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </Typography>
              </Paper>
            
          </Stack>
        </Container>
      </Box>
          
      <Footer />
    </>
  );
};

export default TermosCondicoes;
