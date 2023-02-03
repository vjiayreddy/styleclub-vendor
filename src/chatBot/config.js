import { createChatBotMessage } from "react-chatbot-kit";
import ChatBotLearningOptions from "./widgets/ChatBotLearningOptions";

const config = {
  botName: "Riya",
  loading: true,
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <ChatBotLearningOptions {...props} />,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
