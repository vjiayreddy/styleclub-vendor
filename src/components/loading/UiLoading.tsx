import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

interface UiLoadingProps {
  children?: React.ReactNode;
}

const StyledMainBox = styled(Box)(() => ({
  height: "100%",
  flexGrow: 1,
  backgroundColor: "red",
}));

const UiLoading = ({ children }: UiLoadingProps) => {
  return <StyledMainBox>{children}</StyledMainBox>;
};

export default UiLoading;
