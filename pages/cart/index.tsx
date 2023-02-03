import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import UiShoppingCart from "../../src/containers/shoppingCart";
import UiCartShippingInfo from "../../src/containers/shoppingCart/UiCartShippingInfo";
import Container from "@mui/material/Container";
import { sampleShippingData } from "../../src/data";
import UiCoupon from "../../src/containers/shoppingCart/UiCoupon";
import { useTheme, Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

const StyledMainBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const CartPage = () => {
  const theme: Theme = useTheme();
  const isSmDown: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  const Razorpay = useRazorpay();

  const razorpayHandler = (response: any) => {
    alert(response.razorpay_payment_id);
  };

  const options = {
    key: "rzp_test_eNOPyOQE9LDqG1",
    amount: "5000",
    currency: "USD",
    name: "StyleClub",
    description: "Testing Razorpay paments",
    order_id: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ebrT3Fa0mVkFZDIW0x4LnsfI4-A-vxFXdw&usqp=CAU",
    handler: razorpayHandler,
    prefill: {
      name: "Style Club",
      email: "email@gmail.com",
      contact: "999999999",
    },
  };

  const handleRazorPay = () => {
    const rzp1 = new Razorpay(options);
    rzp1.on("Payment.filed", function (response: any) {
      alert(response.error.code);
    });
    rzp1.open();
  };

  return (
    <StyledMainBox>
      <Container disableGutters maxWidth="xl">
        <Box mb={12}>
          <Typography gutterBottom align="center" variant="h5">
            Shopping Cart
          </Typography>
        </Box>
        <Grid container spacing={isSmDown ? 2 : 6}>
          <Grid item md={7}>
            <UiShoppingCart />
            <UiCoupon />
          </Grid>
          <Grid item md={5}>
            <UiCartShippingInfo
              data={sampleShippingData}
              onCheckOut={handleRazorPay}
            />
          </Grid>
        </Grid>
      </Container>
    </StyledMainBox>
  );
};

export default CartPage;
