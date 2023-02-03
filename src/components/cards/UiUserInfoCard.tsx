import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import UiButton from "../button/button";
import Image from "next/image";
import { Container } from "@mui/system";
import { User } from "../../shared/interfaces";

interface UiUserInfoCardProps {
  user: User | undefined | null;
}

const StyledMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
}));

const StyledLiteGrayLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 400,
}));

const StyledSpan = styled("span")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  marginRight: 5,
}));

const StyledProfileAvatarImage = styled(Box)(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: 100,
  backgroundColor: theme.palette.liteGray,
  position: "relative",
  overflow: "hidden",
}));

const UiUserInfoCard = ({ user }: UiUserInfoCardProps) => {
  return (
    <StyledMainBox>
      <Container disableGutters maxWidth="md">
        <Grid container alignItems="center" spacing={4}>
          <Grid item>
            <StyledProfileAvatarImage>
              <Image
                alt="profile-image"
                src={user?.images.profile as string}
                loading="lazy"
                layout="fill"
                objectFit="cover"
              />
            </StyledProfileAvatarImage>
          </Grid>

          <Grid xs={12} sm item container flexDirection="column">
            <Grid item xs={12}>
              <Box mb={1}>
                <Typography variant="h5">Dharmesh Shah</Typography>
                <StyledLiteGrayLabel gutterBottom variant="body2">
                  Managing Director
                </StyledLiteGrayLabel>
              </Box>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs={12}>
                <Typography variant="body2">{user?.email}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">{user?.phone}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <UiButton rounded={true} size="small" id="update">
              Update Profile
            </UiButton>
          </Grid>
        </Grid>
      </Container>
    </StyledMainBox>
  );
};

export default UiUserInfoCard;
