import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import UiButton from "../button/button";

interface UiCardV3Props {
  imageUrl: string;
  title: string;
  btnName: string;
  content: string;
  onClick: () => void;
}

const StyledContentBox = styled(Box)(({ theme }) => ({
  paddingRight: 150,
  [theme.breakpoints.down("sm")]: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom:20
  },
}));

const UiCardV3 = ({
  imageUrl,
  title,
  btnName,
  content,
  onClick,
}: UiCardV3Props) => {
  return (
    <Grid container alignItems="center">
      <Grid
        container
        alignItems="center"
        justifyContent="flex-start"
        item
        md={6}
        lg={6}
      >
        <Grid item>
          <Image
            alt={title}
            placeholder="blur"
            blurDataURL={imageUrl}
            loading="lazy"
            width={600}
            height={600}
            src={imageUrl}
          />
        </Grid>
      </Grid>
      <Grid item md={6} lg={6}>
        <StyledContentBox>
          <Box mb={3}>
            <Typography variant="h3">{title}</Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="body1">{content}</Typography>
          </Box>
          <UiButton
            rounded={false}
            id="learn-more"
            onClick={onClick}
            color="secondary"
          >
            {btnName}
          </UiButton>
        </StyledContentBox>
      </Grid>
    </Grid>
  );
};

export default UiCardV3;
