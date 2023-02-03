import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type align = "right" | "left" | "inherit" | "center" | "justify";

export interface TypographyVersionOneProps {
  title: string;
  caption: string;
  titleAlign?: align;
  captionAlign?: align;
}

const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(2),
  },
}));

const StyledCaptionTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(2),
    margin: "0 auto",
  },
}));

export const TypographyVersionTwo = ({
  title,
  titleAlign,
  caption,
  captionAlign,
}: TypographyVersionOneProps) => {
  return (
    <>
      <Box mb={1}>
        <StyledCaptionTypography align={captionAlign} variant="body2">
          {caption}
        </StyledCaptionTypography>
      </Box>
      <StyledTitleTypography align={titleAlign} variant="h3">
        {title}
      </StyledTitleTypography>
    </>
  );
};

export default TypographyVersionTwo;
