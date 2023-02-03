import React from "react";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";
import { NextRouter, useRouter } from "next/router";
import Container from "@mui/material/Container";

interface OccasionsMenuProps {
  anchorEl?: any;
  open: boolean;
  handleClose: (event: Event | React.SyntheticEvent) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
  menus: any[];
}

const StyledMenuPaper = styled(Paper)(() => ({
  width: "auto",
  padding: 20,
}));

const StyledMenuListHeader = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    paddingLeft: theme.spacing(1.5),
    textTransform: "uppercase",
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  })
);

const UiProductsMenu: React.FC<OccasionsMenuProps> = ({
  anchorEl,
  open,
  handleClose,
  onKeyDown,
  menus,
}) => {
  const router: NextRouter = useRouter();

  return (
    <Popper
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      transition
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Container maxWidth="sm">
            <StyledMenuPaper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  dense
                  autoFocusItem={open}
                  id="products-menu"
                  aria-labelledby="product-tab"
                  onKeyDown={onKeyDown}
                >
                  <Grid container spacing={3}>
                    <Grid item md={4}>
                      <StyledMenuListHeader variant="body2" component="p">
                        Western Ware
                      </StyledMenuListHeader>
                    </Grid>
                    <Grid item md={4}>
                      <StyledMenuListHeader variant="body2" component="p">
                        Ethnic Ware
                      </StyledMenuListHeader>
                    </Grid>
                  </Grid>
                </MenuList>
              </ClickAwayListener>
            </StyledMenuPaper>
          </Container>
        </Grow>
      )}
    </Popper>
  );
};
export default UiProductsMenu;
