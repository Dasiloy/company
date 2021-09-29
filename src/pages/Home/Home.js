import React from "react";
import PropTypes from "prop-types";
import AppLayout from "../../componenets/Organisms/AppLAyout/AppLayout";
import { useGlobalContext } from "../../context/AppContext";

const Home = (props) => {
  const { state, addComments } = useGlobalContext();
  console.log(state);
  return (
    <main>
      <AppLayout>this is the home page</AppLayout>
      <button onClick={() => addComments()}>
        click me
      </button>
      {state.Comments.map((item) => {
        const { author, comment, id } = item;
        return (
          <div key={id}>
            <h2>{author}</h2>
            <p>{comment}</p>
          </div>
        );
      })}
    </main>
  );
};

Home.propTypes = {};

export default Home;
