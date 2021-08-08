import axios from "axios";
import url from "../utilis/Url";

const registerUser = async ({
  username,
  email,
  password,
}) => {
  let response = await axios
    .post(`${url}/auth/local/register`, {
      username,
      email,
      password,
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

export default registerUser;
