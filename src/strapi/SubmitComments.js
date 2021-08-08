import axios from "axios";
import Url from "../utilis/Url";

const id = 5;

const submitComments = async (
  url,
  text,
  description,
  userToken
) => {
  const response = await axios
    .post(
      `${Url}/comments/${id}`,
      {
        url,
        text,
        description,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    )
    .catch((error) => console.log(error));
  return response;
};

export default submitComments;
