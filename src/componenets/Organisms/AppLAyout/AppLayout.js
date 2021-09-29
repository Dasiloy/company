import React from "react";
import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <main>
      hello world
      {children}
    </main>
  );
};

AppLayout.propTypes = {};

export default AppLayout;
