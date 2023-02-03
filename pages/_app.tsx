import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../src/apollo";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import createEmotionCache from "../src/theme/emotions";
import theme from "../src/theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { NextRouter, useRouter } from "next/router";

/**
 * Components
 */

import DashboardLayout from "../src/layouts/dashboard";

//import UiNotificationV1 from "../src/components/notifications/notificationV1";
import UiToasterNotification from "../src/components/notifications/UiToasterNotification";
import { ADMINS } from "../src/shared/enums";
import { APP_ROUTES } from "../src/routes/routes";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  session: any;
}

const clientSideEmotionCache = createEmotionCache();
const lightTheme = createTheme(theme);
const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const router: NextRouter = useRouter();
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    session,
  } = props;

  return (
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <UiToasterNotification />
          <NextNProgress
            options={{ showSpinner: false }}
            color={theme.palette.primary.main}
          />
          <ApolloProvider client={apolloClient}>
            {router.pathname === APP_ROUTES.LOGIN ||
            router.pathname === APP_ROUTES.RESET_PASSWORD ? (
              <Component {...pageProps} />
            ) : (
              <DashboardLayout>
                <Component {...pageProps} />
              </DashboardLayout>
            )}
          </ApolloProvider>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
  );
};

export default MyApp;
