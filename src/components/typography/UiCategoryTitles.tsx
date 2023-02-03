import React from "react";
import Typography from "@mui/material/Typography";

interface UiCategoryTitlesProps {
  title: string;
  subTitle?: string;
}

const UiCategoryTitles = ({ title, subTitle }: UiCategoryTitlesProps) => {
  return (
    <>
      <Typography gutterBottom variant="h4">
        {title}
      </Typography>
      {subTitle && <Typography variant="body2">23 Recomendations</Typography>}
    </>
  );
};

export default UiCategoryTitles;
