import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Hero.css";

const containervariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.8,
    },
  },
};

const opacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const buttonVariants = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness:80,
      damping: 4,
      Mass: 0.4,
    },
  },
};

const Hero = () => {
  return (
    <section id='hero'>
      <div className='hero section'>
        <motion.main
          variants={containervariants}
          initial='initial'
          animate='animate'>
          <motion.h1 variants={opacityVariants}>
            Welcome to presento
            <span className='hero-red'></span>
          </motion.h1>
          <motion.p variants={opacityVariants}>
            {" "}
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti veniam tempore culpa
            magnam fugiat eaque consequatur dolores deserunt
            unde maiores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maxime, ipsa!
          </motion.p>
          <motion.button
            type='button'
            className='btn hero-btn'
            variants={buttonVariants}>
            <Link to='/articles' className='hero-link'>
              see latest posts
            </Link>
          </motion.button>
        </motion.main>
      </div>
    </section>
  );
};

export default Hero;
