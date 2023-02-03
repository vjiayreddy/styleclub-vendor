import React from "react";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { signOut } from "next-auth/react";
import { USER_MENUS } from "../../data";
import { useRouter } from "next/router";

interface UserActionMenuProps {
  anchorEl?: any;
  open: boolean;
  handleClose: (event: Event | React.SyntheticEvent) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
  menus?: any[];
}

const StyledMenuPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  width: theme.spacing(20),
  minHeight: theme.spacing(20),
  padding: theme.spacing(2),
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({}));

const StyledMenuListHeader = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  })
);

const UiUserMenu: React.FC<UserActionMenuProps> = ({
  anchorEl,
  open,
  handleClose,
  onKeyDown,
}) => {
  const router = useRouter();
  return (
    <Popper
      placement="bottom-end"
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      transition
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <StyledMenuPaper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                dense
                autoFocusItem={open}
                id="user-action-menu"
                aria-labelledby="user-action-button"
                onKeyDown={onKeyDown}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <StyledMenuListHeader variant="body1" component="p">
                      Profile Setting
                    </StyledMenuListHeader>
                    <Divider />
                    {USER_MENUS.map((menu, index) => (
                      <MenuItem
                        onClick={(event: Event | React.SyntheticEvent) => {
                          handleClose(event);
                          router.push(menu.link);
                        }}
                        key={index}
                      >
                        {menu.name}
                      </MenuItem>
                    ))}
                    <StyledMenuItem
                      onClick={(event: Event | React.SyntheticEvent) => {
                        signOut();
                        handleClose(event);
                      }}
                    >
                      Logout
                    </StyledMenuItem>
                  </Grid>
                </Grid>
              </MenuList>
            </ClickAwayListener>
          </StyledMenuPaper>
        </Grow>
      )}
    </Popper>
  );
};
export default UiUserMenu;
