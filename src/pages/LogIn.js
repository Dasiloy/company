import React, { useState } from "react";
import PropTypes from "prop-types";
import image from "../assets/img/blog/blog-recent-3.jpg";
import logInUser from "../strapi/LogInUser";
import registerUser from "../strapi/RegisterUser";
import { useGlobalContext } from "../context/AppContext";

const LogIn = () => {
  const { updateUser, closeLogInModal, isLogInOpen } =
    useGlobalContext();
  const [isMember, setIsmMember] = useState(false);
  const [userLogIn, setUserLogIn] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);
  let isFilled;
  if (isMember) {
    isFilled =
      userLogIn.email !== "" && userLogIn.password !== "";
  } else {
    isFilled =
      userLogIn.email !== "" &&
      userLogIn.username !== "" &&
      userLogIn.password !== "";
  }
  let isEmpty = !isFilled;

  const handleLogIn = () => {
    setIsmMember((prev) => {
      let isMember = !prev;
      setUserLogIn({
        ...userLogIn,
        username: "",
        password: "",
        email: "",
      });
      setIsError(false);
      return isMember;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = userLogIn;
    let response;
    if (isMember) {
      response = await logInUser({ email, password });
    } else {
      response = await registerUser({
        username,
        email,
        password,
      });
    }

    if (response) {
      const { jwt, user } = response.data;
      const newUser = {
        username: user.username,
        token: jwt,
      };
      updateUser(newUser);
      closeLogInModal();
    } else {
      setIsError(true);
    }
  };

  return (
    <main
      className={`${
        isLogInOpen
          ? "logIn_modal_overlay"
          : "logIn_modal_overlay_hidden"
      }`}>
      <div className='logIn_modal_container'>
        <article className='side_pix'>
          <img src={image} alt='sign-up-img' />
        </article>
        <article className='sign_up_form'>
          <form
            className='form-content'
            onSubmit={handleSubmit}>
            <h3>
              Welcome to Presento<span>.</span>
            </h3>
            <p className='push-down'>
              build a website that befits your organisation!
            </p>
            <div className='form-group'>
              <label htmlFor='email' className='label'>
                email
              </label>
              <br />
              <input
                type='text'
                className='form-detail'
                id='email'
                value={userLogIn.email}
                placeholder='input your mail address'
                onChange={(e) =>
                  setUserLogIn({
                    ...userLogIn,
                    email: e.target.value,
                  })
                }
              />
            </div>
            {!isMember && (
              <div className='form-group'>
                <label htmlFor='username' className='label'>
                  username
                </label>
                <br />
                <input
                  type='text'
                  className='form-detail'
                  id='username'
                  value={userLogIn.username}
                  placeholder={
                    isMember
                      ? "input your username"
                      : "choose a username"
                  }
                  onChange={(e) =>
                    setUserLogIn({
                      ...userLogIn,
                      username: e.target.value,
                    })
                  }
                />
              </div>
            )}
            <div className='form-group'>
              <label htmlFor='password' className='label'>
                password
              </label>
              <br />
              <input
                type='password'
                className='form-detail'
                id='password'
                value={userLogIn.password}
                placeholder={
                  isMember
                    ? "input your password"
                    : "choose a password"
                }
                onChange={(e) =>
                  setUserLogIn({
                    ...userLogIn,
                    password: e.target.value,
                  })
                }
              />
            </div>
            {isError && (
              <p className='error-details'>
                {isMember
                  ? "Email or password incorrect!"
                  : "please fill in your details correctly!"}
              </p>
            )}
            <button
              className={`btn ${
                isEmpty ? "btn-disabled" : "btn-submit"
              }`}
              disabled={isEmpty}>
              {isMember ? "sign in" : "sign up"}
            </button>
            <aside className='switch-log'>
              {isMember ? (
                <p>new to presento?</p>
              ) : (
                <p>already have an account? </p>
              )}
              <button
                className='btn btn-switch'
                type='button'
                onClick={handleLogIn}>
                {isMember ? "sign up" : "sign in"}
              </button>
            </aside>
          </form>
        </article>
      </div>
    </main>
  );
};

LogIn.propTypes = {};

export default LogIn;
