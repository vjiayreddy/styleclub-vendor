import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Grid, Box, useMediaQuery } from "@mui/material";
import { useQuery } from "@apollo/client";
import parsePhoneNumber from "libphonenumber-js";
import { useRouter } from "next/router";

// Components
import UiDataGridHeader from "../../src/components/dataGrids/UiDataGridHeader";
import { UiDialogModal } from "../../src/components/models/UiDialogModal";
import UiDataGridPaginationFooter from "../../src/components/dataGrids/UiDataGridPaginationFooter";
import UiBrandPartnerForm from "../../src/containers/forms/UiVenorOnBoardingForms/UiBrandPartnerForm";
import UiLoadingIndicator from "../../src/components/loading/UiLoadingIndicator";
import UiVendorCard from "../../src/components/cards/UiVendorCard";
import UiVendorManagerForm from "../../src/containers/forms/UiVenorOnBoardingForms/UiVendorManagerForm";
import UiVendorForm from "../../src/containers/forms/UiVenorOnBoardingForms/UiVendorForm";
import { reactiveVendorOnBoardFormState } from "../../src/apollo/reactiveState";
import UiVendorDetailsView from "../../src/components/dataViews/UiVendorDetailsView";
import { GET_REACTIVE_VENDOR_ONBOARD_FORM } from "../../src/apollo/queries";
import useRegisterVendorByVendorAdmin from "../../src/apollo/hooks/useRegisterVendorByVendorAdmin";
import { vendorStepperForm } from "../../src/data";
import useGetVendorsByFilter from "../../src/apollo/hooks/useGetVendorsByFilter";
import { APP_ROUTES } from "../../src/routes/routes";
import UiVendorSubscriptionForm from "../../src/containers/forms/UiVenorOnBoardingForms/UiVendorSubscriptionForm";
import { useDebounce } from "../../src/apollo/hooks/useDebounce";

const StyledMainContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}));

const StyledPaginationFooter = styled(Box)(({ theme }) => ({
  minHeight: 40,
}));

const StyledStepperForm = styled(Box)(({ theme }) => ({
  width: 600,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledDataGridContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  position: "relative",
  padding: 20,
}));

const Home: NextPage = () => {
  const [openModel, setOpenModel] = useState<boolean>(false);
  const [vendorItem, setVendorItem] = useState<any>(null);
  const [openSubscription, setOpenSubscription] = useState<boolean>(false);
  const [value, setValue] = useDebounce(500, null);
  const router = useRouter();
  const theme = useTheme();
  const isDownSmDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [openViewModel, setOpenViewModel] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState(0);
  const { data: dataRVOF } = useQuery(GET_REACTIVE_VENDOR_ONBOARD_FORM);
  const { gqlVendorRegistration, loading: loadingVR } =
    useRegisterVendorByVendorAdmin();
  const { GetVendorsByFilter, data, loadingVBF } = useGetVendorsByFilter();
  // handle brand partner form
  const handleBrandPartnerForm = (data: any) => {
    reactiveVendorOnBoardFormState({
      brandPartnerFormState: {
        ...data,
      },
      vendorDetailsFormState: {
        ...dataRVOF.reactiveVendorOnBoardFormState.vendorDetailsFormState,
      },
      vendorManagerFormState: {
        ...dataRVOF.reactiveVendorOnBoardFormState.vendorManagerFormState,
      },
    });
    setActiveStep(1);
  };

  // handle brand partner form
  const handleVendorForm = (data: any) => {
    reactiveVendorOnBoardFormState({
      brandPartnerFormState: {
        ...dataRVOF.reactiveVendorOnBoardFormState.brandPartnerFormState,
      },
      vendorDetailsFormState: {
        ...data,
      },
      vendorManagerFormState: {
        ...dataRVOF.reactiveVendorOnBoardFormState.vendorManagerFormState,
      },
    });
    setActiveStep(2);
  };

  // handle Vendor Manager Form
  const handleVendorManagerForm = (data: any) => {
    const parsePhone1 = parsePhoneNumber(`+${data?.phone}`);
    const parsePhone2 = parsePhoneNumber(`+${data?.phone2}`);
    reactiveVendorOnBoardFormState({
      brandPartnerFormState: {
        ...dataRVOF.reactiveVendorOnBoardFormState.brandPartnerFormState,
      },
      vendorManagerFormState: {
        ...data,
        countryCode: parsePhone1?.countryCallingCode,
        countryCode2: parsePhone2?.countryCallingCode,
      },
      vendorDetailsFormState: {
        ...dataRVOF.reactiveVendorOnBoardFormState.vendorDetailsFormState,
      },
    });
    gqlVendorRegistration();
  };

  useEffect(() => {
    GetVendorsByFilter({
      variables: {
        limit: 100,
        page: router?.query?.page ? Number(router?.query?.page) : 1,
        filter: {},
      },
    });
  }, [router]);

  useEffect(() => {
    if (value !== null) {
      GetVendorsByFilter({
        variables: {
          limit: 100,
          page: router?.query?.page ? Number(router?.query?.page) : 1,
          filter: {
            searchTerm: value,
          },
        },
      });
    }
  }, [value]);

  return (
    <StyledMainContainer disableGutters maxWidth={false}>
      <UiDataGridHeader
        btnTitle="On Boarding Vendor"
        title="Vendors"
        onChangeSearch={(e) => {
          setValue(e.target.value);
        }}
        onClick={() => setOpenModel(true)}
      />
      <StyledDataGridContent>
        {loadingVBF ? (
          <UiLoadingIndicator />
        ) : (
          <>
            {data && (
              <Grid container alignItems="stretch" spacing={1}>
                {data?.vendors?.map((item, index) => (
                  <Grid item key={index} md={4}>
                    <UiVendorCard
                      onClickSubscription={() => {
                        //setOpenSubscription(true);
                      }}
                      cardData={item}
                      onClickView={() => {
                        setVendorItem(item);
                        setOpenViewModel(true);
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </>
        )}
      </StyledDataGridContent>
      <StyledPaginationFooter>
        <UiDataGridPaginationFooter
          defaultPage={1}
          page={Number(router?.query?.page) || 1}
          onChange={(_, page) => {
            router.push({
              pathname: APP_ROUTES.VENDORS,
              query: {
                page: page,
              },
            });
          }}
        />
      </StyledPaginationFooter>

      <UiDialogModal
        dialogTitle="Vendor On Boarding"
        maxWidth="lg"
        fullScreen={isDownSmDevice}
        open={openModel}
        onCloseModel={() => setOpenModel(false)}
      >
        <StyledStepperForm>
          <Stepper orientation={"horizontal"} nonLinear activeStep={activeStep}>
            {vendorStepperForm.map((item, index) => (
              <Step key={index}>
                <StepLabel>
                  {isDownSmDevice ? item.smDevices : item.lgDevices}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box pl={1} mt={2} pr={1} pb={2}>
            {activeStep === 0 && (
              <UiBrandPartnerForm
                optBtnName="Back"
                onSubmit={handleBrandPartnerForm}
              />
            )}
            {activeStep === 1 && (
              <UiVendorForm
                optBtnName="Back"
                enableOptButton={true}
                onClickOptBtn={() => {
                  setActiveStep(0);
                }}
                onSubmit={handleVendorForm}
              />
            )}

            {activeStep === 2 && (
              <UiVendorManagerForm
                optBtnName="Back"
                isSubmit={loadingVR as boolean}
                enableOptButton={true}
                onClickOptBtn={() => {
                  setActiveStep(1);
                }}
                onSubmit={handleVendorManagerForm}
              />
            )}
          </Box>
        </StyledStepperForm>
      </UiDialogModal>
      <UiDialogModal
        onCloseModel={() => {
          setOpenViewModel(false);
        }}
        maxWidth="md"
        fullScreen={isDownSmDevice}
        open={openViewModel}
      >
        <UiVendorDetailsView data={vendorItem} />
      </UiDialogModal>

      <UiDialogModal
        onCloseModel={() => {
          setOpenSubscription(false);
        }}
        maxWidth="md"
        open={openSubscription}
      >
        <UiVendorSubscriptionForm />
      </UiDialogModal>
    </StyledMainContainer>
  );
};

export default Home;
