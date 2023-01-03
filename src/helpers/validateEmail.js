import { validEmail } from "../constants/regex";

export const validateEmail = (email) => {
  if (validEmail.test(email)) {
    return true;
  } else {
    return false;
  }
};
