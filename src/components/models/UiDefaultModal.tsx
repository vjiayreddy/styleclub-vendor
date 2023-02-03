import React from "react";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

interface UiDefaultModalProps {
  open: boolean;
  children: React.ReactNode;
}

const StyledModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor:"transparent",
  border:"none"
}));

export const UiDefaultModal = ({ children, open }: UiDefaultModalProps) => {
  return (
    <Modal open={open}>
      <StyledModalContainer>{children}</StyledModalContainer>
    </Modal>
  );
};
