import React, { Fragment } from "react";
import UiAppBar from "../components/AppBar/UiAppBar";
import UiFooter from "../components/footer/footer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
// import Chatbot from "react-chatbot-kit";
// import chatBotConfig from "../../src/chatBot/config";
// import MessageParser from "../../src/chatBot/messageParser";
// import ActionProvider from "../../src/chatBot/actionProvider";
// import Fab from "@mui/material/Fab";

interface UiMainLayoutProps {
  children: React.ReactNode;
}

const StyledBoxWrapper = styled(Box)(() => ({
  position: "relative",
}));

const StyledRootMain = styled("main")(({}) => ({
  minHeight: "71vh",
}));
const StyledChatIcon = styled("main")(({}) => ({
  position: "fixed",
  right: 0,
  bottom: 0,
}));

const UiMainLayout = ({ children }: UiMainLayoutProps) => {
  const {} = useSession();

  return (
    <StyledBoxWrapper>
      <UiAppBar />
      <StyledRootMain>{children}</StyledRootMain>
      <UiFooter />
      <StyledChatIcon>
        {/* <Chatbot
          config={chatBotConfig as any}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        /> */}
      </StyledChatIcon>
    </StyledBoxWrapper>
  );
};

export default UiMainLayout;
