import React, { useState, memo } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import ToolBar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import UiUserActions from "./UiUserActions";
import { useSession } from "next-auth/react";
import UiProductsMenu from "./UiProductsMenu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const StyledLogoWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexGrow: 1,
  },
}));

const StyledNavigationBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledTabs = styled(Tabs)(() => ({
  height: "100%",
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

interface UiAppBarProps {
  onClickMenuButton: () => void;
}

const UiAppBar = ({ onClickMenuButton }: UiAppBarProps) => {
  const [tabIndex, setTabIndex] = useState<any>(false);
  const [openProductsMenu, setOpenProductsMenu] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const { status, data: session } = useSession();

  const handleToggle = () => {
    setOpenProductsMenu((prevOpen) => !prevOpen);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpenProductsMenu(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenProductsMenu(false);
    } else if (event.key === "Escape") {
      setOpenProductsMenu(false);
    }
  }

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <ToolBar disableGutters>
        <IconButton onClick={onClickMenuButton}>
          <MenuIcon />
        </IconButton>
        <StyledLogoWrapper>
          <Typography variant="h6">LOGO</Typography>
        </StyledLogoWrapper>
        <StyledNavigationBox flexGrow={1}></StyledNavigationBox>
        <Box>
          <UiUserActions status={status} session={session} />
        </Box>
      </ToolBar>
      <UiProductsMenu
        menus={[]}
        open={openProductsMenu}
        handleClose={handleClose}
        anchorEl={anchorRef.current}
        onKeyDown={handleListKeyDown}
      />
    </AppBar>
  );
};
export default memo(UiAppBar);
