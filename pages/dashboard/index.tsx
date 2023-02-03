import { Container } from "@mui/system";
import React, { Fragment } from "react";
import { useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { useRouter } from "next/router";

/**
 * Components
 */
import UiUserInfoCard from "../../src/components/cards/UiUserInfoCard";
import { AUTH_STATE } from "../../src/shared/enums";
import { USER_MENUS } from "../../src/data";
import { useGetAllOccasions } from "../../src/apollo/hooks/useGetAllOccasions";
import { APP_ROUTES } from "../../src/routes/routes";

const DashboardPage = () => {
  const { status, data: session } = useSession();
  const { occasions, grooming } = useGetAllOccasions();
  const router = useRouter();

  if (status === AUTH_STATE.LOADING) {
    return <div />;
  }
  if (status === AUTH_STATE.UNAUTHENTICATED) {
    router.push(APP_ROUTES.LOGIN);
  }

  return (
    <Fragment>
      <Container disableGutters maxWidth="xl">
        <UiUserInfoCard user={session?.user} />
        <Container maxWidth="md">
          <Box mt={5} mb={3}>
            <Typography variant="h6">Access</Typography>
          </Box>
          <Grid container spacing={2}>
            {USER_MENUS.map((menu, index) => (
              <Grid key={index} item>
                <Chip
                  onClick={() => router.push(menu.link)}
                  label={menu.name}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        {occasions.length > 0 && (
          <Container maxWidth="md">
            <Box mt={5} mb={3}>
              <Typography variant="h6">Outfit Recommendations</Typography>
            </Box>

            <Grid container spacing={2}>
              {occasions?.map(
                (occasion) =>
                  occasion.isEnabledForPersonalize && (
                    <Grid key={occasion._id} item>
                      <Chip
                        onClick={() =>
                          router.push({
                            pathname: APP_ROUTES.OUTFIT_RECOMMENDATIONS,
                            query: {
                              catId: occasion._id,
                            },
                          })
                        }
                        label={occasion.label}
                      />
                    </Grid>
                  )
              )}
            </Grid>
          </Container>
        )}
        {grooming.length > 0 && (
          <Container maxWidth="md">
            <Box mt={5} mb={3}>
              <Typography variant="h6">Grooming Recommendations</Typography>
            </Box>
            <Grid container spacing={2}>
              {grooming?.map((_grooming) => (
                <Grid key={_grooming._id} item>
                  <Chip
                    onClick={() =>
                      router.push({
                        pathname: APP_ROUTES.GROOMING_RECOMMENDATIONS,
                        query: {
                          catId: _grooming._id,
                        },
                      })
                    }
                    label={_grooming.name}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Container>
    </Fragment>
  );
};

export default DashboardPage;
