import React, {
  useContext,
  useEffect,
  useReducer,
} from "react";
import appStore from "../reducer/Store";
import Reducer from "../reducer/Reducer";
import { FETCH_BLOGS } from "../reducer/Actions";
import blogs from "../utilis/LocalBlogs";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, appStore);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: FETCH_BLOGS, payload: blogs });
    }, 5000);
  }, []);

  return (
    <AppContext.Provider value={{ state }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
