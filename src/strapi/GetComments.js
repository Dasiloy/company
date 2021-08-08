import axios from "axios";
import Url from "../utilis/Url";

const getComments = async (userToken) => {
  const { data } = await axios.get(`${Url}/comments/`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  console.log(data);
};

export default getComments;
