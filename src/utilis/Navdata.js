import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/article",
    text: "articles",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.Facebook.com",
    icon: <FaFacebook />,
    text: "Facebook",
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
    text: "Twitter",
  },
  {
    id: 3,
    url: "https://www.Linkedin.com",
    icon: <FaLinkedin />,
    text: "Linkedin",
  },
  {
    id: 4,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
    text: "Instagram",
  },
];
