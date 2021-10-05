import React from "react";
import AppLayout from "../../componenets/Organisms/AppLAyout/AppLayout";
import Hero from "../../componenets/Molecules/Hero/Hero";
import HomeBody from "../../componenets/Molecules/Homebody/HomeBody";
import HomeLoader from "../../componenets/Atoms/HomeLoader/HomeLoader";
import { useGlobalContext } from "../../context/AppContext";

const Home = () => {
  const {
    state: { isPageLoading },
  } = useGlobalContext();
  if (isPageLoading) {
    return <HomeLoader />;
  }
  return (
    <AppLayout>
      <Hero />
      <HomeBody />
    </AppLayout>
  );
};

export default Home;
