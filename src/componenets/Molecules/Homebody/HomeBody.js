import React from "react";
import "./HomeBody.css";
import { useGlobalContext } from "../../../context/AppContext";
import HomeSingleBlog from "../../Atoms/HomeSingleBlog/HomeSingleBlog";

const HomeBody = () => {
  const {
    state: { Blogs },
  } = useGlobalContext();

  const Furnishing = Blogs.filter(
    (blog) => blog.category === "Furnishing"
  );
  return (
    <section className='section'>
      <main className='home-blogs'>
        <h2>Recent posts</h2>
        <div className='blogs-container'>
          {Furnishing.map((blog) => {
            return (
              <HomeSingleBlog key={blog.id} {...blog} />
            );
          })}
        </div>
      </main>
      <aside className='home-aside'></aside>
    </section>
  );
};

export default HomeBody;
