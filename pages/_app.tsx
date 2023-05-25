import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import pt from "date-fns/locale/pt-BR";
import en from "date-fns/locale/en-US";
import es from "date-fns/locale/es";
import { createTheme } from "../theme";
import { ThemeProvider } from "@emotion/react";

const locationDate = {
  br: pt,
  en: en,
  es: es,
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const theme = createTheme({
    theme: "LIGHT",
  });
  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={locationDate["br"]}
    >
      <ThemeProvider theme={theme}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
          <Analytics />
        </SessionProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
