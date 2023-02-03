import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface UiCardVersionTwoProps {
  title: string;
  icon: React.ReactNode;
  subTitle: string;
}

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

export const UiCardVersionTwo = ({
  title,
  icon,
  subTitle,
}: UiCardVersionTwoProps) => {
  const theme = useTheme();
  const isDownSmDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      alignItems="center"
      flexDirection={isDownSmDevice ? "column" : "row"}
    >
      <Grid xs={12} sm={2} md={2} item>
        {icon}
      </Grid>
      <Grid xs container item sx={{ paddingLeft: { md: "20px" } }}>
        <Grid item xs={12}>
          <Typography
            align={isDownSmDevice ? "center" : "left"}
            variant="body2"
          >
            {title}
          </Typography>
          <StyledSubtitle variant="body2">{subTitle}</StyledSubtitle>
        </Grid>
      </Grid>
    </Grid>
  );
};
