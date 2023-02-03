import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import UiButton from "../button/button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

const StyledCardBox = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  overflow: "hidden",
}));

const StyledCardContentBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const StyledCartTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
}));

interface CardVersionOneProps {
  title: string;
  buttonName: string;
  imageUrl: string;
}

const UiCardVersionOne = ({
  title,
  buttonName,
  imageUrl,
}: CardVersionOneProps) => {
  return (
    <StyledCardBox>
      <Image
        alt="suits"
        loading="lazy"
        placeholder="blur"
        style={{ filter: "brightness(60%)" }}
        blurDataURL={imageUrl}
        src={imageUrl}
        width={700}
        height={750}
      />
      <StyledCardContentBox>
        <StyledCartTitle align="center" variant="h2">
          {title}
        </StyledCartTitle>

        <Box mt={3}>
          <UiButton
            endIcon={<ArrowForwardIcon />}
            size="large"
            color="milkWhite"
            rounded={false}
            id="button-women"
          >
            {buttonName}
          </UiButton>
        </Box>
      </StyledCardContentBox>
    </StyledCardBox>
  );
};

export default UiCardVersionOne;
