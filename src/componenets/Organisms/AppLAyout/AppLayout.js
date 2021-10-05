import React from "react";
import Header from "../../Molecules/Header/Header";
import Footer from "../../Molecules/Footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default AppLayout;
