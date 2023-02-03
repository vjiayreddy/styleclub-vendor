import { useMutation } from "@apollo/client";
import { gqlRegisterArgs } from "../../shared/interfaces";
import { GQL_USER_REGISTER } from "../queries";

const useRegister = () => {
  const [RegisterUser, { loading: registerLoading }] =
    useMutation<{ registerUser: { _id: string } }, { user: gqlRegisterArgs }>(
      GQL_USER_REGISTER
    );

  const gqlRegisterUser = async (params: gqlRegisterArgs) => {
    const response = await RegisterUser({
      variables: {
        user: params,
      },
    });
    return new Promise((resolve, rejects) => {
      if (response?.data && !response?.errors) {
        resolve(response?.data);
      } else {
        rejects(response.errors);
      }
    });
  };
  return {
    gqlRegisterUser,
    registerLoading,
  };
};

export default useRegister;
