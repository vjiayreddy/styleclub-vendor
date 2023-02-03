import React, { memo, useState } from "react";
import Grid from "@mui/material/Grid";
import { UiUserActionsProps } from "../../shared/interfaces";
import UiIconButton from "../iconButton/iconButton";
import UiSvgIcon from "../svgIcon/svgIcon";
import { AUTH_STATE } from "../../shared/enums";
import { CircularProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import { APP_ROUTES } from "../../routes/routes";
import UiUserMenu from "./UiUserMenu";

const UiUserActions = ({ session, status }: UiUserActionsProps) => {
  const router = useRouter();
  const anchorRef = React.useRef<HTMLButtonElement | null>(null);
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);

  const handleClickUserIcon = () => {
    if (status === AUTH_STATE.UNAUTHENTICATED) {
      router.push(APP_ROUTES.LOGIN);
    } else {
      setOpenUserMenu(!openUserMenu);
    }
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpenUserMenu(false);
  };

  const handleClickIcon = (): void => {
    router.push(APP_ROUTES.CART);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenUserMenu(false);
    } else if (event.key === "Escape") {
      setOpenUserMenu(false);
    }
  }

  return (
    <>
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <UiIconButton size="small">
            <UiSvgIcon fontSize="small" iconName="SEARCH_ICON" />
          </UiIconButton>
        </Grid>
        <Grid item>
          <UiIconButton onClick={handleClickIcon} size="small">
            <UiSvgIcon fontSize="small" iconName="CART_ICON" />
          </UiIconButton>
        </Grid>
        <Grid item>
          <UiIconButton
            aria-haspopup="true"
            aria-expanded={openUserMenu ? "true" : undefined}
            aria-controls={openUserMenu ? "user-action-menu" : undefined}
            ref={anchorRef}
            onClick={handleClickUserIcon}
            size="small"
          >
            {status === AUTH_STATE.LOADING && <CircularProgress size={18} />}
            {status === AUTH_STATE.AUTHENTICATED && (
              <Avatar
                //src={session.user["images"]["profile"]}
                sx={{ width: 25, height: 25, marginBottom: "5px" }}
              >
                U
              </Avatar>
            )}
            {status === AUTH_STATE.UNAUTHENTICATED && (
              <UiSvgIcon fontSize="small" iconName="USER_ICON" />
            )}
          </UiIconButton>
        </Grid>
      </Grid>
      <UiUserMenu
        anchorEl={anchorRef.current}
        onKeyDown={handleListKeyDown}
        handleClose={handleClose}
        open={openUserMenu}
      ></UiUserMenu>
    </>
  );
};

export default memo(UiUserActions);
