import type { NextPage } from "next";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const StyledMainContainer = styled(Container)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  paddingTop: 64,
}));

const Home: NextPage = () => {
  return (
    <StyledMainContainer disableGutters maxWidth={false}></StyledMainContainer>
  );
};

export default Home;
