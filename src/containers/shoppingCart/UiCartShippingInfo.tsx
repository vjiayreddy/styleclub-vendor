import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import UiButton from "../../components/button/button";
import { cartShippingType } from "../../shared/types";
import UiLinkButton from "../../components/button/UiLinkButton";

const StyledMainBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.liteGray,
  marginBottom: theme.spacing(1),
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(2.5),
}));

const StyledFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(2.5),
}));

const StyledContent = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(2.5),
}));

interface UiCartShippingInfoProps {
  data: cartShippingType;
  onCheckOut: () => void;
}

const UiCartShippingInfo = ({ data, onCheckOut }: UiCartShippingInfoProps) => {
  return (
    <>
      <StyledMainBox>
        <StyledHeader>
          <Typography variant="body1">Subtotal</Typography>
          <Typography variant="body1">{data.subTotal}</Typography>
        </StyledHeader>
        <Divider />
        <StyledContent>
          <Typography variant="body2">Shipping Address</Typography>
          <Box mt={2}>
            <Typography variant="body1">{data.shippingAddress}</Typography>
          </Box>
          <UiLinkButton
            sx={(theme) => ({
              minWidth: 0,
              padding: 0,
              fontSize: theme.spacing(1.4),
              textDecoration: "underLine",
              textUnderlineOffset: theme.spacing(0.5),
            })}
            id="btn_change_address"
          >
            Change Address
          </UiLinkButton>
        </StyledContent>
        <Divider />
        <StyledFooter>
          <Typography variant="subtitle2">Total</Typography>
          <Typography variant="subtitle2">{data.totalAmount}</Typography>
        </StyledFooter>
      </StyledMainBox>
      <Box mt={3}>
        <UiButton
          color="secondary"
          fullWidth
          onClick={onCheckOut}
          id="checkout_button"
        >
          Proceed to Checkout
        </UiButton>
      </Box>
    </>
  );
};

export default UiCartShippingInfo;
