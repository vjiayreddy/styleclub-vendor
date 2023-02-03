import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import useGetUserProductRecommendationAttributes from "../../src/apollo/hooks/useGetUserProductRecommendationAttributes";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import UiTypographyVersionOne from "../../src/components/typography/typographyVersionOne";
import useGetPersonalizedProducts from "../../src/apollo/hooks/useGetPersonalizedProducts";
import useGetPersonalizedLooksByProducts from "../../src/apollo/hooks/useGetPersonalizedLooksByProducts";
import { useSession } from "next-auth/react";
import { AUTH_STATE } from "../../src/shared/enums";

const StyledBannerBox = styled(Box)(({ theme }) => ({
  minHeight: 350,
  backgroundColor: theme.palette.grey[200],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: theme.spacing(15),
  paddingRight: theme.spacing(15),
}));

const StyledBannerBoxContent = styled(Box)(({ theme }) => ({
  width: theme.spacing(60),
  backgroundColor: theme.palette.common.white,
  margin: `${theme.spacing(-10)} auto ${theme.spacing(3)} auto`,
  padding: theme.spacing(3),
}));

const StyledBannerNote = styled(Typography)(() => ({
  textAlign: "center",
}));

const OutfitRecommendationsPage = () => {
  const { dataPPC, productAttributes } =
    useGetUserProductRecommendationAttributes();
  const { status } = useSession();
  const { gqlGetPersonalizedProducts, loadingGPP, errorGPP, dataGPP } =
    useGetPersonalizedProducts();
  const {
    gqlGetPersonalizedLooksByProducts,
    loadingGPLBP,
    dataGPLBP,
    errorGPLBP,
  } = useGetPersonalizedLooksByProducts();

  useEffect(() => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      gqlGetPersonalizedProducts({ limit: 10, page: 1 });
      gqlGetPersonalizedLooksByProducts({ limit: 10, page: 1 });
    }
  }, [status]);


  console.log(dataGPLBP);


  return (
    <Container disableGutters maxWidth="xl">
      <StyledBannerBox></StyledBannerBox>

      {dataPPC && (
        <StyledBannerBoxContent>
          {dataPPC?.note && (
            <StyledBannerNote variant="body1">{dataPPC?.note}</StyledBannerNote>
          )}
        </StyledBannerBoxContent>
      )}

      {productAttributes && (
        <>
          {productAttributes.map((attribute, key) => (
            <Box key={key}>
              <Typography variant="h6" align="center">
                {attribute.label}
              </Typography>
              <Typography variant="body1" align="center">
                {attribute.note}
              </Typography>
              {attribute.products.map((product: any, index: any) => (
                <Box key={index}>
                  <img width={100} src={product.masterData.personalizeImage} />
                  <p>{product.name}</p>
                </Box>
              ))}
            </Box>
          ))}
        </>
      )}

      {dataGPP?.getPersonalizedProducts.products && (
        <>
          <Box>
            <UiTypographyVersionOne
              title={dataPPC?.looks.label as string}
              titleAlign="center"
              contentAlign="center"
              content={dataPPC?.looks.description as string}
            />
          </Box>
          <Grid container>
            {dataGPP?.getPersonalizedProducts.products
              .slice(0, 10)
              .map((product, index) => (
                <Grid key={index} item xs={2}>
                  <img width={100} src={product.images[0]} />
                  <p>{product.name}</p>
                </Grid>
              ))}
          </Grid>
        </>
      )}
      {dataGPLBP?.getPersonalizedLooksByProducts && <>
      

      
      </>}
    </Container>
  );
};

export default OutfitRecommendationsPage;
