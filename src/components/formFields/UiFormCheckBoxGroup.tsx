import React from "react";
import { Controller } from "react-hook-form";
import { UiCheckBoxGroupProps } from "../../shared/interfaces";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CheckBox from "@mui/material/Checkbox";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import UiImageCheckBox from "./UiImageCheckBox";
import Chip from "@mui/material/Chip";

const UiFormCheckBoxGroup = ({
  control,
  name,
  onChange,
  options,
  defaultValues,
  variant = "NORMAL",
  gridProps,
}: UiCheckBoxGroupProps) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Grid container {...gridProps}>
            {options.map((option) => (
              <Grid item xs={4} sm={4} md={3} lg={3} xl={3} key={option._id}>
                <FormControlLabel
                  sx={{ width: "100%" }}
                  label=""
                  control={
                    <motion.div
                      style={{ width: "100%" }}
                      className="animatable"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.5 }}
                    >
                      {variant === "NORMAL" && (
                        <CheckBox
                          onChange={() => field.onChange(onChange(option._id))}
                          defaultChecked={defaultValues?.includes(option._id)}
                        />
                      )}
                      {variant === "IMAGE" && (
                        <CheckBox
                          sx={{ width: "100%" }}
                          icon={
                            option.image ? (
                              <UiImageCheckBox
                                imageUrl={option?.image ? option.image : ""}
                                label={option.name}
                              />
                            ) : (
                              <Chip
                                sx={{ width: "100%" }}
                                label={option.name}
                                variant="outlined"
                              />
                            )
                          }
                          checkedIcon={
                            option.image ? (
                              <UiImageCheckBox
                                imageUrl={option?.image ? option.image : ""}
                                label={option.name}
                                showBorder={true}
                              />
                            ) : (
                              <Chip
                                sx={{ width: "100%" }}
                                label={option.name}
                                variant="filled"
                                color="secondary"
                              />
                            )
                          }
                          onChange={() => field.onChange(onChange(option._id))}
                          defaultChecked={defaultValues?.includes(option._id)}
                        />
                      )}
                      {variant === "BUTTON" && (
                        <CheckBox
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
                          onChange={() => field.onChange(onChange(option._id))}
                          defaultChecked={defaultValues?.includes(option._id)}
                        />
                      )}
                    </motion.div>
                  }
                ></FormControlLabel>
              </Grid>
            ))}
          </Grid>
        )}
      />
    </FormControl>
  );
};

export default UiFormCheckBoxGroup;
