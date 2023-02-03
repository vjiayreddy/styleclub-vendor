import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

type align = "right" | "left" | "inherit" | "center" | "justify";

export interface TypographyVersionOneProps {
  title: string;
  content: string;
  titleAlign?: align;
  contentAlign?: align;
}

const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginBottom: 20,
  },
}));

const StyledContentTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "40%",
    margin: "0 auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    margin: "0 auto",
  },
}));

export const UiTypographyVersionOne = ({
  title,
  titleAlign,
  content,
  contentAlign,
}: TypographyVersionOneProps) => {
  return (
    <>
      <StyledTitleTypography align={titleAlign} variant="h3">
        {title}
      </StyledTitleTypography>
      <StyledContentTypography align={contentAlign} variant="body1">
        {content}
      </StyledContentTypography>
    </>
  );
};

export default UiTypographyVersionOne;
