import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import UiIconButton from "../iconButton/iconButton";
import CloseIcon from "@mui/icons-material/Close";

interface UiNotificationVersionOneProps {
  bgColor?: string;
  primaryLabel: string;
  secondaryLabel?: string;
  decoratorLabel?: string;
}

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));

const StyledCloseIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(0.5),
  right: theme.spacing(1.5),
}));

const StyledDecoratedLabel = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
  paddingLeft: 10,
}));

const UiNotificationV1 = ({
  primaryLabel,
  secondaryLabel,
  decoratorLabel,
}: UiNotificationVersionOneProps) => {
  return (
    <StyledBox>
      <Typography variant="body2">
        {primaryLabel}
        {decoratorLabel && (
          <StyledDecoratedLabel>{decoratorLabel}</StyledDecoratedLabel>
        )}
        {secondaryLabel}
      </Typography>
      <StyledCloseIcon>
        <UiIconButton color="inherit">
          <CloseIcon />
        </UiIconButton>
      </StyledCloseIcon>
    </StyledBox>
  );
};

export default UiNotificationV1;
