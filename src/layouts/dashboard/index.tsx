import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import UiAppBar from "../../components/AppBar/UiAppBar";



const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
  flexGrow: 1,
  paddingTop: 65,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: `-${drawerWidth}px`,
  },
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
    },
  }),
}));

const StyledDrawerComponent = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "drawerWidth",
})<{ drawerWidth: any }>(({ theme }) => ({
  width: drawerWidth,
  [`& .MuiDrawer-paper`]: {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const drawerWidth = 240;

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <StyledRoot>
      <UiAppBar onClickMenuButton={() => setOpen(!open)} />
      <StyledDrawerComponent
        variant={isSmallDevice ? "temporary" : "persistent"}
        open={open}
        drawerWidth={drawerWidth}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}></Box>
      </StyledDrawerComponent>
      <Main open={open}>{children}</Main>
    </StyledRoot>
  );
};

export default DashboardLayout;
