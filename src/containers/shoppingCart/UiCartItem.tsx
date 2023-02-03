import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import UiLinkButton from "../../components/button/UiLinkButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import UiIconButton from "../../components/iconButton/iconButton";
import UiSvgIcon from "../../components/svgIcon/svgIcon";
import { useTheme, Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface StyledMainBoxProps {
  showBorder?: boolean;
}

interface UiCartItemProps extends StyledMainBoxProps {
  imgUrl: string;
  productName: string;
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
  price: number | string;
}

const StyledMainBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "showBorder",
})<StyledMainBoxProps>(({ showBorder, theme }) => ({
  borderBottom: showBorder ? `1px solid ${theme.palette.divider}` : "none",
  paddingBottom: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledQuantityBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: theme.spacing(12),
  marginTop: theme.spacing(2),
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
}));

const UiCartItem = ({
  showBorder = true,
  onDecrease,
  onIncrease,
  onRemove,
  quantity,
  price,
  productName,
  imgUrl,
}: UiCartItemProps) => {
  const theme: Theme = useTheme();
  const isSmDown: boolean = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledMainBox showBorder={showBorder}>
      <Grid container spacing={5}>
        <Grid item xs={isSmDown ? 3 : false}>
          <Image
            alt="cart_image"
            width={75}
            loading="lazy"
            placeholder="blur"
            blurDataURL={imgUrl}
            layout="fixed"
            height={75}
            src={imgUrl}
          />
        </Grid>
        <Grid item xs={isSmDown ? 9 : 12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle2" component="div">
                {productName}
              </Typography>
              <StyledQuantityBox>
                <UiIconButton size="small" onClick={onDecrease}>
                  <UiSvgIcon style={{ width: 14 }} iconName="MINUS_ICON" />
                </UiIconButton>
                <Typography
                  align="right"
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  sx={{ marginBottom: 0 }}
                >
                  {quantity}
                </Typography>
                <UiIconButton onClick={onIncrease} size="small">
                  <UiSvgIcon style={{ width: 14 }} iconName="PLUS_ICON" />
                </UiIconButton>
              </StyledQuantityBox>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              align="right"
              gutterBottom
              variant="subtitle2"
              component="div"
            >
              {price}
            </Typography>
            <UiLinkButton
              sx={{ minWidth: 0, padding: 0 }}
              variant="text"
              size="small"
              startIcon={<CloseIcon />}
              color="inherit"
              onClick={onRemove}
              id="cart_remove"
            >
              Remove
            </UiLinkButton>
          </Grid>
        </Grid>
      </Grid>
    </StyledMainBox>
  );
};

export default UiCartItem;
