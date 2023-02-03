import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface UiCardV1Props {
  title: string;
  onClick: () => void;
}

const UiCardV1 = ({ title, onClick }: UiCardV1Props) => {
  return (
    <Card onClick={onClick}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              {title}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UiCardV1;
