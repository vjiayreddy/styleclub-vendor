import React from "react";
import { Grid, styled, Box, Pagination } from "@mui/material";
import { PaginationProps } from "@mui/material/Pagination/Pagination";

const StyledMainBox = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1.3),
  backgroundColor: theme.palette.common.white,
}));

interface UiDataGridPaginationFooterProps extends PaginationProps {
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const UiDataGridPaginationFooter = ({
  onChange,
  ...props
}: UiDataGridPaginationFooterProps) => {
  return (
    <StyledMainBox>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item>
          <Pagination onChange={onChange} count={10} {...props} />
        </Grid>
      </Grid>
    </StyledMainBox>
  );
};

export default UiDataGridPaginationFooter;
