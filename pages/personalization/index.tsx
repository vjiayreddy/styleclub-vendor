import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { API_ERRORS, UI_STATUS } from "../../src/shared/enums";
import { getSession } from "next-auth/react";
import { gqlGetSubscriptionsByUserId } from "../../src/apollo/server/getSubscriptionsByUserId";
import { APP_ROUTES } from "../../src/routes/routes";
import { gqlGetUserProductRecommendedAttributes } from "../../src/apollo/server/getUserProductRecommendedAttributes";
import { gqlGetPersonalizeForm } from "../../src/apollo/server/getPersonalizeForm";
import _ from "lodash";
import UiPersonalizeForm from "../../src/containers/personalizeForm";

// Client Side
const PersonalizationPage = (props: any) => {
  if (props?.status === UI_STATUS.SERVICE_CART) {
    return <h1>Show service cart</h1>;
  }

  if (props?.status === UI_STATUS.STYLE_CLUB_NAVIGATION) {
    return <h1>Navigate StyleClub</h1>;
  }

  if (props?.error === API_ERRORS.INTERNAL_SERVER_ERROR) {
    return <h1>Internal server errors</h1>;
  }

  if (!props?.screen && props?.status === UI_STATUS.NO_SCREENS_FOUND) {
    return <h1>NO QUESTIONS FOUND</h1>;
  }
  return (
    <Container maxWidth="sm">
      <p>
        {props?.qusIndex}/{props?.totalScreens - 1}
      </p>
      <Box pt={10}>
        <UiPersonalizeForm qusIndex={props?.qusIndex} screen={props.screen} />
      </Box>
    </Container>
  );
};

// This function call before Ui load 
export const getServerSideProps = async (context: any) => {
  const { query } = context;
  const session = await getSession(context);
  if (session) {
    try {
      let screen = null;
      let totalScreens = 0;
      const { data: dataGSBUI, error: errorGSBUI } =
        await gqlGetSubscriptionsByUserId(session.user._id);
      const { data: dataGPRA, error: errorGPRA } =
        await gqlGetUserProductRecommendedAttributes({
          userId: session.user._id,
        });
      const { data: dataPF, error: errorPF } = await gqlGetPersonalizeForm({
        userId: session.user._id,
        Id: query?.formId,
        isEdit: true,
      });

      if (!_.isEmpty(dataGSBUI.getSubscriptionsByUserId) && !errorGSBUI) {
        if (
          !_.isEmpty(dataGPRA.getUserProductRecommendedAttributes) &&
          !errorGPRA
        ) {
          return {
            props: {},
            redirect: {
              destination: APP_ROUTES.DASHBOARD,
              permanent: false,
            },
          };
        }

        if (!_.isEmpty(dataPF?.getPersonalizeForm?.screens) && !errorPF) {
          const screens = dataPF?.getPersonalizeForm?.screens;
          totalScreens = screens.length;
          const getScreenWithIndex = query?.qusIndex
            ? screens[Number(query?.qusIndex)]
            : screens[0];
          if (getScreenWithIndex) {
            screen = getScreenWithIndex;
          }
        }

        return {
          props: {
            status: screen ? null : UI_STATUS.NO_SCREENS_FOUND,
            qusIndex: query?.qusIndex || 0,
            screen,
            totalScreens,
          },
        };
      }

      return {
        props: {
          status: UI_STATUS.SERVICE_CART,
          screen: null,
          qusIndex: 0,
          totalScreens: 0,
        },
      };
    } catch (error) {
      return {
        props: {
          error: API_ERRORS.INTERNAL_SERVER_ERROR,
          status: null,
          screen: null,
          qusIndex: 0,
          totalScreens: 0,
        },
      };
    }
  }
  return {
    props: {},
    redirect: {
      destination: APP_ROUTES.LOGIN,
      permanent: false,
    },
  };
};

export default PersonalizationPage;
