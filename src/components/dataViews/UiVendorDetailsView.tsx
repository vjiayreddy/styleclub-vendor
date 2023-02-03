import React from "react";
import { styled, Box, Grid, Typography, Button } from "@mui/material";
import { VendorType } from "../../apollo/hooks/useGetVendorsByFilter";

const StyledMainContainer = styled(Box)(({ theme }) => ({
  minWidth: 600,
  paddingLeft: 16,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
  },
}));

const StyledBrandImageView = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  backgroundColor: "red",
}));

interface UiVendorDetailsViewProps {
  data: VendorType;
}

const UiVendorDetailsView = ({ data }: UiVendorDetailsViewProps) => {
  return (
    <StyledMainContainer>
      <Grid container pt={2} spacing={1}>
        <Grid item flexGrow={1}>
          <Box pb={1}>
            <Typography variant="subtitle1">{data?.title}</Typography>
            <Typography variant="body2">Vendor </Typography>
          </Box>
        </Grid>
        {/* <Grid item>
          <img width={75} src="/images/sample_logo.png" />
        </Grid> */}
      </Grid>
      <Grid container alignItems="stretch" spacing={1}>
        {data?.brandPartner.length > 0 && (
          <Grid item xs={12}>
            <fieldset>
              <legend>Brand Partner Details</legend>
              <Grid container>
                <Grid item xs={6} md={3}>
                  <Typography variant="subtitle2">Brand No</Typography>
                  <Typography variant="body2">
                    {data.brandPartner[0].brandPartnerNo}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="subtitle2">Brand Name</Typography>
                  <Typography variant="body2">
                    {data.brandPartner[0].title}
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="subtitle2">Category</Typography>
                  <Typography variant="body2">
                    {data.brandPartner[0].brandPartnerCategory.title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">Website</Typography>
                  <Typography variant="body2">
                    {data.brandPartner[0].url}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2">Note</Typography>
                  <Typography variant="body2">
                    {data.brandPartner[0].note}
                  </Typography>
                </Grid>
              </Grid>
            </fieldset>
          </Grid>
        )}

        <Grid item xs={12}>
          <fieldset>
            <legend>Vendor Details</legend>
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="subtitle2">Vendor Name</Typography>
                <Typography variant="body2">{data.title}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2">GST NO</Typography>
                <Typography variant="body2">{data.gstNo}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2">City</Typography>
                <Typography variant="body2">{data.city}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2">State</Typography>
                <Typography variant="body2">{data.state}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2">Country</Typography>
                <Typography variant="body2">{data.country}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Building Address</Typography>
                <Typography variant="body2">{data.address}</Typography>
              </Grid>
            </Grid>
          </fieldset>
        </Grid>
        {/* <Grid item xs={6}>
          <fieldset>
            <legend>Vendor Manager Details</legend>
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="subtitle2">First Name</Typography>
                <Typography variant="body2">Rahul Kumar</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2">Last Name</Typography>
                <Typography variant="body2">Kumar</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2">What's No</Typography>
                <Typography variant="body2">+91 9052528142</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle2">Alternate No</Typography>
                <Typography variant="body2">+91 8907890987</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle2">Email</Typography>
                <Typography variant="body2">rahulkumar@gmail.com</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Password</Typography>
                <Typography variant="body2">mpf@1234</Typography>
              </Grid>
            </Grid>
          </fieldset>
        </Grid> */}
        <Grid item xs={12}>
          <Button size="small" color="secondary">
            Edit
          </Button>
        </Grid>
      </Grid>
    </StyledMainContainer>
  );
};

export default UiVendorDetailsView;
