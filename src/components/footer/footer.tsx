import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import UiIconButton from "../iconButton/iconButton";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { footerLinks } from "../../data";
import UiFooterLinksList from "./linksList";

const StyledFooterBox = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  backgroundColor: theme.palette.secondary.main,
}));

const StyledLogo = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const StyledUiIconButton = styled(UiIconButton)(({ theme }) => ({
  paddingLeft: 0,
  fontSize: theme.spacing(1.4),
}));

const StyledFooterLinksTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
}));

const StyledAddress = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: theme.spacing(1.8),
  marginTop: 20,
}));

const UiFooter = () => {
  return (
    <StyledFooterBox>
      <Container>
        <Grid container>
          <Grid xs={12} item md={3}>
            <StyledLogo variant="h6">LOGO</StyledLogo>
            <Box pt={2} mb={2}>
              <Grid container>
                <Grid item>
                  <StyledUiIconButton color="milkWhite" size="small">
                    <FacebookOutlinedIcon sx={{ fontSize: "1.2rem" }} />
                  </StyledUiIconButton>
                </Grid>
                <Grid item>
                  <UiIconButton color="milkWhite" size="small">
                    <YouTubeIcon sx={{ fontSize: "1.2rem" }} />
                  </UiIconButton>
                </Grid>
                <Grid item>
                  <UiIconButton color="milkWhite" size="small">
                    <TwitterIcon sx={{ fontSize: "1.2rem" }} />
                  </UiIconButton>
                </Grid>
                <Grid item>
                  <UiIconButton color="milkWhite" size="small">
                    <InstagramIcon sx={{ fontSize: "1.2rem" }} />
                  </UiIconButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid xs={6} item md={2}>
            <UiFooterLinksList
              title="STYLE CLUB"
              links={footerLinks.styledClub}
            />
          </Grid>
          <Grid xs={6} item md={2}>
            <UiFooterLinksList title="PRODUCTS" links={footerLinks.products} />
          </Grid>
          <Grid xs={12} item md={2}>
            <UiFooterLinksList title="HELP" links={footerLinks.help} />
          </Grid>
          <Grid item md={3}>
            <StyledFooterLinksTitle variant="body2">
              ADDRESS
            </StyledFooterLinksTitle>
            <StyledAddress>
              Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257)
              563-7401
            </StyledAddress>
          </Grid>
        </Grid>
      </Container>
    </StyledFooterBox>
  );
};

export default UiFooter;
