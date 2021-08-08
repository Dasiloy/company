import React, { useContext, useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isLogInOpen, setIsLogInOpen] = useState(true);
  const [User, setUser] = useState({
    username: "",
    token: "",
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const openLogInModal = () => {
    setIsLogInOpen(true);
  };
  const closeLogInModal = () => {
    setIsLogInOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        User,
        updateUser,
        openLogInModal,
        closeLogInModal,
        isLogInOpen,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
