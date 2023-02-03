import React from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { CHAT_BOT_LEARNING_OPTIONS } from "../../data";

const ChatBotLearningOptions = () => {
  return (
    <Grid container spacing={1}>
      {CHAT_BOT_LEARNING_OPTIONS.map((item, index) => (
        <Grid item key={index}>
          <Chip label={item.text} onClick={item.handler} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ChatBotLearningOptions;
