import React from "react";
import Box from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Typography from "@mui/material/Typography";

interface StyledMainBoxProps {
  showBorder?: boolean;
  imageUrl: string;
  label: string;
}

const StyledMainBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "showBorder",
})<{ showBorder?: boolean }>(({ showBorder, theme }) => ({
  width: "100%",
  height: 140,
  backgroundColor: theme.palette.liteGray,
  border: showBorder ? `5px solid ${theme.palette.primary.main}` : "none",
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
}));

const StyledImageTitleBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  background: `linear-gradient(0deg, rgba(0,0,0,1) 8%, rgba(0,0,0,0) 64%);`,
  alignItems: "flex-end",
  padding: 10,
  color: theme.palette.common.white,
}));

const UiImageCheckBox = ({
  showBorder,
  imageUrl,
  label,
}: StyledMainBoxProps) => {
  return (
    <StyledMainBox showBorder={showBorder}>
      <Image
        objectFit="cover"
        placeholder="blur"
        blurDataURL={imageUrl}
        alt="image"
        src={imageUrl}
        layout="fill"
      />
      <StyledImageTitleBox>
        <Typography sx={{ color: "white" }} variant="body1">
          {label}
        </Typography>
      </StyledImageTitleBox>
    </StyledMainBox>
  );
};

export default UiImageCheckBox;
