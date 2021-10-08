import React from "react";
import "./HomeBody.css";
import { useGlobalContext } from "../../../context/AppContext";
import HomeSingleBlog from "../../Atoms/HomeSingleBlog/HomeSingleBlog";
import { social } from "../../../utilis/Navdata";
import SingleblogLoader from "../../Atoms/SingleBlogLoader/SingleblogLoader";

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
        <div className='body-header'>
          <h2>Most viewed posts</h2>
          <div className='header-ruler'></div>
        </div>
        <div className='blogs-container'>
          {Furnishing.length === 0 ? (
            <SingleblogLoader />
          ) : (
            Furnishing.map((blog) => {
              return (
                <HomeSingleBlog key={blog.id} {...blog} />
              );
            })
          )}
        </div>
      </main>
      <aside className='home-aside'>
        <article className='about-us'>
          <div className='small-header'>
            <div className='before-text'></div>
            <div className='header-text'>
              <h4>About Author</h4>
            </div>
            <div className='after-text'></div>
          </div>
          <div className='about-body'>
            <img
              src='/images/tabs-2.jpg'
              alt='about-img'
              className='about-img'
            />
            <h5>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Hic nihil assumenda dolorem
              officiis voluptates eos iusto non eligendi
              amet optio.
            </h5>
            <div className='about-links'>
              {social.map((link) => {
                const { id, url, icon } = link;
                return (
                  <a
                    href={url}
                    className='about-link'
                    key={id}>
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>
        <article className='recent'></article>
        <article className='categories'></article>
      </aside>
    </section>
  );
};

export default HomeBody;
