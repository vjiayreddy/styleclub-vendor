import React, { useState, memo } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import ToolBar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { MENUS_DATA, USER_MENUS } from "../../data";
import UiUserActions from "./UiUserActions";
import { useSession } from "next-auth/react";
import UiProductsMenu from "./UiProductsMenu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/system";

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

const UiDasboardAppBar = () => {
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
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <ToolBar disableGutters>
          <StyledLogoWrapper>
            <Typography variant="h6">LOGO</Typography>
          </StyledLogoWrapper>
          <StyledNavigationBox flexGrow={1}></StyledNavigationBox>
          <Box>
            <UiUserActions status={status} session={session} />
          </Box>
        </ToolBar>
      </AppBar>
      <Container maxWidth="md">
        <Drawer
          variant="permanent"
          sx={{
            width: 300,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 300,
              boxSizing: "border-box",
            },
          }}
        >
          <ToolBar />
          <Box>
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="list-item"
              subheader={
                <ListSubheader component="div">
                  Outfit Recommendations
                </ListSubheader>
              }
            >
              <ListItem dense>
                <ListItemText>Shirt</ListItemText>
              </ListItem>
              <ListItem dense>
                <ListItemText>Trouser</ListItemText>
              </ListItem>
              <ListItem dense>
                <ListItemText>Blazer</ListItemText>
              </ListItem>
              <ListItem dense>
                <ListItemText>Suit</ListItemText>
              </ListItem>
            </List>
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="list-item"
              subheader={
                <ListSubheader component="div">
                  Grooming Recommendations
                </ListSubheader>
              }
            >
              <ListItem dense>
                <ListItemText>Beared Styles</ListItemText>
              </ListItem>
              <ListItem dense>
                <ListItemText>Hair Style</ListItemText>
              </ListItem>
            </List>

            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="list-item"
              subheader={
                <ListSubheader component="div">
                  Accessories Recommendations
                </ListSubheader>
              }
            >
              <ListItem dense>
                <ListItemText>Eye Ware</ListItemText>
              </ListItem>
              <ListItem dense>
                <ListItemText>Shoes</ListItemText>
              </ListItem>
              <ListItem dense>
                <ListItemText>Watches</ListItemText>
              </ListItem>
            </List>
            <List
              sx={{ width: "100%" }}
              component="nav"
              aria-labelledby="list-item"
              subheader={
                <ListSubheader component="div">User Actions</ListSubheader>
              }
            >
              {" "}
              {USER_MENUS.map((menu, index) => (
                <ListItem key={index} dense>
                  <ListItemText>{menu.name}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Container>

      <UiProductsMenu
        menus={[]}
        open={openProductsMenu}
        handleClose={handleClose}
        anchorEl={anchorRef.current}
        onKeyDown={handleListKeyDown}
      />
    </>
  );
};
export default memo(UiDasboardAppBar);
