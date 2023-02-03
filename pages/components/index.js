import React from "react";
import { Box, Button, Grid, Typography, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Autocomplete from "@mui/material/Autocomplete";
import UiFormTextField from "../../src/components/formFields/UiFormTextField";
import { useForm } from "react-hook-form";
import UiAutocompletedInputForm from "../../src/components/formFields/UiFormAutocomplete";

const ComponentPage = (props) => {
  const { control, handleSubmit } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="text" endIcon={<LoginIcon />} size="small">
            Small Button
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button size="large">Large Button</Button>
        </Grid>
        <Grid item xs={12}>
          <Button size="medium">Large Button</Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1">Heading One</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Heading Two</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Heading Three</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Heading four</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Heading five</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Heading Six</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Body 1</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">Body2</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">subtitle1</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2">subtitle2</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">Caption</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComponentPage;
