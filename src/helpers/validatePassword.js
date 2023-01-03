import { validPassword } from "../constants/regex";

export const validatePassword = (password) => {
  if (validPassword.test(password)) {
    return true;
  } else {
    return false;
  }
};
