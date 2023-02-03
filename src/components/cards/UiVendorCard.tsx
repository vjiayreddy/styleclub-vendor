import React from "react";
import {
  Card,
  CardContent,
  styled,
  Grid,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import UiButton from "../button/button";
import { VendorType } from "../../apollo/hooks/useGetVendorsByFilter";
import { VENDOR_STATUS_ENUM } from "../../shared/enums";
const random = () => Math.floor(Math.random() * 255);
const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderTop: `4px solid #81c784`,
}));

const StyledCardHeader = styled(Box)(({ theme }) => ({}));

const StyledProfileBox = styled(Box)(({ theme }) => ({
  height: "100px",
  width: "100px",
  backgroundColor: "gainsboro",
}));

interface UiVendorCardProps {
  onClickView?: () => void;
  cardData: VendorType;
  onClickSubscription?: () => void;
}

const UiVendorCard = ({
  cardData,
  onClickView,
  onClickSubscription,
}: UiVendorCardProps) => {
  const CardInfo = (props: any) => {
    return (
      <>
        <Typography variant="subtitle2">{props.title}</Typography>
        <Typography variant="body2">{props.subTitle}</Typography>
      </>
    );
  };

  return (
    <StyledCard>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <StyledCardHeader>
              <Grid container alignItems="flex-start">
                <Grid item flexGrow={1}>
                  <Typography variant="subtitle1">{cardData.title}</Typography>
                  <Typography variant="body2">Vendor </Typography>
                </Grid>
                <Grid item>
                  <img width={75} src="/images/sample_logo.png" />
                </Grid>
              </Grid>
              <Divider sx={{ marginTop: "10px" }} />
            </StyledCardHeader>
          </Grid>
        </Grid>
        <Grid pt={1} spacing={1} container>
          <Grid item xs={6}>
            <Typography variant="subtitle2">Status</Typography>
            <Chip label={cardData.currentStatus} size="small" />
          </Grid>
          <Grid item xs={6}>
            <CardInfo title="Gst No" subTitle={` ${cardData.gstNo}`} />
          </Grid>
          <Grid item xs={12}>
            <CardInfo
              title="Address"
              subTitle={` ${cardData.address},${cardData.city},${cardData.state},
                    ${cardData.country},${cardData.pinCode}`}
            />
          </Grid>
          <Grid mt={1} item xs={12}>
            <UiButton id="btn-view" onClick={onClickView} size="small">
              View
            </UiButton>
            <UiButton
              sx={{ marginLeft: "10px" }}
              color="secondary"
              id="btn-view"
              onClick={() => {}}
              size="small"
            >
              Edit
            </UiButton>
            {cardData?.currentStatus !== VENDOR_STATUS_ENUM.SUBSCRIBED && (
              <UiButton
                sx={{ marginLeft: "10px" }}
                color="warning"
                id="btn-view"
                onClick={onClickSubscription}
                size="small"
              >
                Subscribe
              </UiButton>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default UiVendorCard;
