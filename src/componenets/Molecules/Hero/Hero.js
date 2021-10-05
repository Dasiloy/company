import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero section'>
        <main>
          <h1>
            Welcome to presento
            <span className='hero-red'></span>
          </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti veniam tempore culpa
            magnam fugiat eaque consequatur dolores deserunt
            unde maiores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime, ipsa!
          </p>
          <button type='button' className='btn hero-btn'>
            <Link to='/articles' className='hero-link'>
              see latest posts
            </Link>
          </button>
        </main>
      </div>
    </section>
  );
};

export default Hero;
