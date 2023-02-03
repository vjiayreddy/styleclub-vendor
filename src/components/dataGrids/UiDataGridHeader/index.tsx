import React, { useState, useEffect } from "react";
import { Grid, styled, Box, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import UiFormTextField from "../../formFields/UiFormTextField";
import UiNativeDropDown, {
  optionType,
} from "../../formFields/UiNativeDropDown";
import useGetAllBrandPartnerCategories from "../../../apollo/hooks/useGetAllBrandPartnerCategories";

const StyledMainBox = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
}));

interface UiDataGridHeaderProps {
  onClick?: () => void;
  title: string;
  btnTitle: string;
  onChangeSearch: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

const UiDataGridHeader = ({
  title,
  btnTitle,
  onClick,
  onChangeSearch,
}: UiDataGridHeaderProps) => {
  const { control } = useForm();
  const [categories, setCategories] = useState<optionType[]>([]);
  const { gqlGetAllBrandPartnerCategories } = useGetAllBrandPartnerCategories();

  useEffect(() => {
    gqlGetAllBrandPartnerCategories().then((data: any) => {
      setCategories([{ _id: "select", label: "---Select---" }, ...data]);
    });
  }, []);

  return (
    <StyledMainBox>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item flexGrow={1}>
          <UiFormTextField
            id="input-search"
            placeholder="Search for vendor"
            name="search"
            control={control}
            sx={{ borderRadius: 100 }}
            onChange={onChangeSearch}
          />
        </Grid>
        <Grid item>
          <UiNativeDropDown
            onChange={() => {}}
            id="input-select"
            options={categories}
          />
        </Grid>
        <Grid item>
          <Button onClick={onClick}>{btnTitle}</Button>
        </Grid>
      </Grid>
    </StyledMainBox>
  );
};

export default UiDataGridHeader;
