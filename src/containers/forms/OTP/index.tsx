import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import OtpInput from "react-otp-input";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import UiButton from "../../../components/button/button";
// import { GLOBAL_FONTS } from "../../config/theme/enums/enums";
// import LoadingButtonComponent from "../../components/uiElements/Buttons/LoadingButton";

interface OtpFormProps {
  source: string;
  loading?: boolean;
  onSubmit: (otp: string) => void;
}

const StyledOtpInput: React.CSSProperties = {
  width: 40,
  height: 45,
  margin: 5,
  fontSize: 16,
  fontWeight: 600,
  border: `1px solid ${grey[500]}`,
  borderRadius: 5,
};

const StyledMainBox = styled(Box)(({ theme }) => ({
  padding: 50,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyItems: "center",
  //border: `1px solid ${theme.palette.grey[200]}`,
}));

const StyledFormTitle = styled(Typography)(() => ({
  marginBottom: 15,
}));

const StyledFormInfo = styled(Typography)(({ theme }) => ({
  marginBottom: 1,
  lineHeight: 1,
  color: theme.palette.grey[500],
  fontSize: 16,
}));

const StyledSpanLabel = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: 14,
}));

const UiOtpForm: React.FC<OtpFormProps> = ({ source, loading, onSubmit }) => {
  const [OTP, setOTP] = useState("");
  const handleChange = (otp: any) => setOTP(otp);
  const handleSubmit = () => {
    onSubmit(OTP);
  };

  return (
    <StyledMainBox>
      <Box>
        <StyledFormTitle align="center" variant="h5">
          OTP Verification
        </StyledFormTitle>
        <StyledFormInfo align="center" variant="body1">
          Enter the OTP sent to
          <b>
            <StyledSpanLabel> {source}</StyledSpanLabel>
          </b>
        </StyledFormInfo>
      </Box>
      <Box mb={2} mt={5}>
        <OtpInput
          value={OTP}
          onChange={handleChange}
          numInputs={6}
          hasErrored={true}
          isInputNum={true}
          inputStyle={StyledOtpInput}
          separator={<span style={{ fontWeight: 800 }}> - </span>}
        />
      </Box>
      <Box>
        <Grid container alignItems="center" flexDirection="column" spacing={3}>
          <Grid item container alignItems="center" justifyContent="center">
            <Grid item>
              <StyledFormInfo>Don't received the OTP? </StyledFormInfo>
            </Grid>
            <Grid item>
              <UiButton
                sx={{ padding: 0, height: "auto" }}
                variant="text"
                id="button-resend"
              >
                Resend
              </UiButton>
            </Grid>
          </Grid>
          <Grid item>
            <UiButton
              disabled={OTP.length < 6}
              color="secondary"
              id="otp-submit"
              onClick={handleSubmit}
            >
              Verify Account
            </UiButton>
          </Grid>
        </Grid>
      </Box>
    </StyledMainBox>
  );
};

export default UiOtpForm;
