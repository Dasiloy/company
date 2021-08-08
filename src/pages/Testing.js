import React from "react";
import getComments from "../strapi/GetComments";
import submitComments from "../strapi/SubmitComments";
import { useGlobalContext } from "../context/AppContext";

export const Testing = () => {
  const { User } = useGlobalContext();
  const token = User.token;
  const text = "am changed";
  const url = "https://google.com";
  const description = "a changed site";
  const fetchData = async () => {
    console.log(token);
    const response = await submitComments(token);
    if (response) {
      console.log(response);
    } else {
      console.log("error");
    }
  };
  return (
    <div>
      <button type='button' onClick={fetchData}>
        this is a testing button
      </button>
    </div>
  );
};
