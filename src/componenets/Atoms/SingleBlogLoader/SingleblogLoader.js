import React from "react";
import "./SingleBlogLoader.css";

const SingleblogLoader = () => {
  return (
    <div className='loader-container'>
      <div className='single-loader'>
        <div className='animated-background w-100'></div>
        <div className='loader-content'>
          <div className='animated-background w-20'></div>
          <div className='animated-background w-40'></div>
          <div className='animated-background w-100-l'></div>
        </div>
      </div>
      <div className='single-loader'>
        <div className='animated-background w-100'></div>
        <div className='loader-content'>
          <div className='animated-background w-20'></div>
          <div className='animated-background w-40'></div>
          <div className='animated-background w-100-l'></div>
        </div>
      </div>
      <div className='single-loader'>
        <div className='animated-background w-100'></div>
        <div className='loader-content'>
          <div className='animated-background w-20'></div>
          <div className='animated-background w-40'></div>
          <div className='animated-background w-100-l'></div>
        </div>
      </div>
    </div>
  );
};

export default SingleblogLoader;
