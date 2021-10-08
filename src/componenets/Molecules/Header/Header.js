import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { links, social } from "../../../utilis/Navdata";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <nav className='header'>
      <div className='header-centered'>
        <article className='header-icon'>
          <Link to='/' className='link'>
            <h2 className='header-icon-flex'>
              Presento<div className='header-red'></div>
            </h2>
          </Link>
          <button
            onClick={() => setIsToggleOn(!isToggleOn)}
            className={`header-toggle-icon ${
              isToggleOn ? "header-toggle-on" : ""
            } btn`}>
            {isToggleOn ? <FaTimes /> : <FaBars />}
          </button>
        </article>
        <article
          className={`header-body ${
            isToggleOn ? "header-body-mobile" : ""
          }`}>
          <ul className='header-links'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li className='header-link' key={id}>
                  <Link
                    to={url}
                    className='link'
                    onClick={() => setIsToggleOn(false)}>
                    <h3>{text}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className='header-social'>
            <div className='social-header'>
              <h3>Contact Us Via</h3>
            </div>
            {social.map((link) => {
              const { id, url, icon, text } = link;
              return (
                <a
                  href={url}
                  className='social-link link'
                  key={id}>
                  {icon}
                  <span className='social-title'>
                    {text}
                  </span>
                </a>
              );
            })}
          </div>
        </article>
      </div>
    </nav>
  );
};

export default Header;
