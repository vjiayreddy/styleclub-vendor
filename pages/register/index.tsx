import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useRegister from "../../src/apollo/hooks/useRegister";
import UiRegisterForm from "../../src/containers/forms/UiRegisterForm";
import { gqlRegisterArgs } from "../../src/shared/interfaces";

const StyledLoginBox = styled(Box)(({ theme }) => ({
  width: "35%",
  paddingTop: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0 auto",
}));

const RegisterPage = () => {
  const { gqlRegisterUser, registerLoading } = useRegister();
  const { status } = useSession();
  const handleRegister = (data: gqlRegisterArgs) => {
    gqlRegisterUser(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledLoginBox>
      <UiRegisterForm loading={registerLoading} onSubmit={handleRegister} />
    </StyledLoginBox>
  );
};

export default RegisterPage;
