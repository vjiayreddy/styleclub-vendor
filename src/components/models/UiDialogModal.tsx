import React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogTitle, { DialogTitleProps } from "@mui/material/DialogTitle";
import DialogContent, { DialogContentProps } from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const StyledDialogContainer = styled(DialogContent)(({ theme }) => ({
  position: "relative",
}));
const StyledCloseIconContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  paddingLeft:35,
  paddingBottom:35
}));

interface UiDialogModalProps extends DialogProps {
  open: boolean;
  children: React.ReactNode;
  dialogTitle?: string;
  dialogTitleProps?: DialogTitleProps;
  dialogContentProps?: DialogContentProps;
  onCloseModel: () => void;
}

export const UiDialogModal = ({
  open,
  children,
  dialogTitle,
  dialogTitleProps,
  dialogContentProps,
  onCloseModel,
  ...props
}: UiDialogModalProps) => {
  return (
    <Dialog open={open} {...props}>
      {dialogTitle && (
        <StyledDialogTitle {...dialogTitleProps}>{dialogTitle}</StyledDialogTitle>
      )}
      <StyledDialogContainer {...dialogContentProps}>
        <React.Fragment>{children}</React.Fragment>
      </StyledDialogContainer>
      <StyledCloseIconContainer>
        <IconButton onClick={onCloseModel}>
          <CloseIcon />
        </IconButton>
      </StyledCloseIconContainer>
    </Dialog>
  );
};
