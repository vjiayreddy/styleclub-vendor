import React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { Controller } from "react-hook-form";
import { UiRadioGroupProps } from "../../shared/interfaces";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import UiImageCheckBox from "./UiImageCheckBox";
import Chip from "@mui/material/Chip";

const UiFormRadioGroup = ({
  name,
  control,
  options,
  gridProps,
  variant = "NORMAL",
}: UiRadioGroupProps) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            <Grid container {...gridProps}>
              {options.map((option) => (
                <Grid item xs={4} sm={4} md={3} lg={3} xl={3} key={option._id}>
                  {variant === "IMAGE" && (
                    <FormControlLabel
                      sx={{ width: "100%" }}
                      value={option._id}
                      label=""
                      control={
                        <Radio
                          sx={{ width: "100%" }}
                          icon={
                            <UiImageCheckBox
                              label={option.name}
                              imageUrl={option.image}
                            />
                          }
                          checkedIcon={
                            <UiImageCheckBox
                              label={option.name}
                              imageUrl={option.image}
                              showBorder={true}
                            />
                          }
                        />
                      }
                    ></FormControlLabel>
                  )}

                  {variant === "CHIP" && (
                    <FormControlLabel
                      sx={{ width: "100%" }}
                      value={option._id}
                      label=""
                      control={
                        <Radio
                          sx={{ width: "100%" }}
                          icon={
                            <Chip
                              sx={{ width: "100%" }}
                              label={option.name}
                              variant="outlined"
                            />
                          }
                          checkedIcon={
                            <Chip
                              sx={{ width: "100%" }}
                              label={option.name}
                              variant="filled"
                              color="secondary"
                            />
                          }
                        />
                      }
                    ></FormControlLabel>
                  )}
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default UiFormRadioGroup;
