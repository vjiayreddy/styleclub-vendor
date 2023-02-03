import React from "react";
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import UiButton from "../button/button";
import useMediaQuery from "@mui/material/useMediaQuery";

interface UiCardV4Props {
  imageUrl: string;
  title: string;
  btnName: string;
  content: string;
  onClick: () => void;
}

const StyledContentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const UiCardV4 = ({
  title,
  content,
  imageUrl,
  btnName,
  onClick,
}: UiCardV4Props) => {
  const theme = useTheme();
  const isDownSmDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      flexDirection={isDownSmDevice ? "column-reverse" : "row"}
      alignItems="center"
    >
      <Grid item md={6} lg={6}>
        <StyledContentBox>
          <Box mb={3}>
            <Typography variant="h3">{title}</Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="body1">{content}</Typography>
          </Box>
          <UiButton
            onClick={onClick}
            rounded={false}
            id="learn-more"
            color="secondary"
          >
            {btnName}
          </UiButton>
        </StyledContentBox>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="flex-end"
        item
        md={6}
        lg={6}
      >
        <Grid item>
          <Image
            alt="suits"
            placeholder="blur"
            blurDataURL={imageUrl}
            loading="lazy"
            width={600}
            height={600}
            src={imageUrl}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UiCardV4;
