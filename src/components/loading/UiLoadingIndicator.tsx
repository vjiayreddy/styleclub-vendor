import React from "react";
import {
  Box,
  BoxProps,
  CircularProgressProps,
  SxProps,
  styled,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

interface UiLoadingIndicatorProps extends BoxProps {
  children?: React.ReactNode;
  circularProgressProps?: CircularProgressProps;
  boxSx?: SxProps;
}

const StyledMainBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const UiLoadingIndicator = ({
  children,
  circularProgressProps,
  boxSx,
  ...props
}: UiLoadingIndicatorProps) => {
  return (
    <StyledMainBox sx={boxSx} {...props}>
      {children ? (
        children
      ) : (
        <>
          <CircularProgress {...circularProgressProps} />
        </>
      )}
    </StyledMainBox>
  );
};

export default UiLoadingIndicator;
