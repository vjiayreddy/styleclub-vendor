import React from "react";
import Box from "@mui/material/Box";

const SamplePage = () => {
  return (
    <Box
      sx={(theme) => ({
        padding: "100px",
        backgroundColor: theme.palette.primary.main,
      })}
    >
      Padding 50px
    </Box>
  );
};

export default SamplePage;
