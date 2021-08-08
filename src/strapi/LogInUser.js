import axios from "axios";
import url from "../utilis/Url";

const logInUser = async ({ email, password }) => {
  let response = await axios
    .post(`${url}/auth/local`, {
      identifier: email,
      password,
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

export default logInUser;
