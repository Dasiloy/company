import React from "react";
import { useGlobalContext } from "../context/AppContext";

export const Header = ({ children }) => {
  const { user } = useGlobalContext();
  return (
    <div>
      {children}
      {user}
    </div>
  );
};
