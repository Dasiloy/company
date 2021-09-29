import React, { useContext, useReducer } from "react";
import appStore from "../reducer/Store";
import Reducer from "../reducer/Reducer";
import { ADD_COMMENTS } from "../reducer/Actions";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, appStore);

  /* ADDCOMMENTS */
  const addComments = () => {
    let commentDetails = {
      id: 1,
      author: "dasiloy",
      comment: "life is sweet if you know what you want",
    };
    dispatch({
      type: ADD_COMMENTS,
      payload: commentDetails,
    });
  };

  return (
    <AppContext.Provider value={{ state, addComments }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
