import React from "react";
import "./HomeSingleBlog.css";
import {
  FaThumbsUp,
  FaComment,
  FaArrowRight,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSingleBlog = ({
  author,
  image_url,
  content,
  posted_on,
  category,
  likes,
  comments,
  id,
}) => {
  return (
    <article className='single-blog'>
      <img
        src={image_url}
        alt='blog'
        className='blog-image'
      />
      <div className='blog-body'>
        <h4 className='blog-category'>{category}</h4>
        <h3 className='blog-author'>{author}</h3>
        <p className='blog-content'>{`${content.substring(
          0,
          290
        )}...`}</p>
        <Link to={`/articles/${id}`}>
          <button className='btn blog-button'>
            <span>continue reading</span>{" "}
            <FaArrowRight className='read-more-icon' />
          </button>
        </Link>

        <div className='blog-footer'>
          <div className='blogs-date'>
            <FaClock className='dates-icon' />{" "}
            <span className='small-text'>{posted_on}</span>
          </div>
          <div className='blog-extras'>
            <article className='blog-likes'>
              <FaThumbsUp className='likes-icon' />
              <span className='small-text'>{likes}</span>
            </article>
            <article className='blog-comments'>
              <FaComment className='comments-icon' />
              <span className='small-text'>
                {comments.length}
              </span>
            </article>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HomeSingleBlog;
