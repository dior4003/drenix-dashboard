import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Hooks/context";

export default function Login() {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const hendleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("auth", true);
    setIsLogin(true);
    console.log(isLogin);
  };
  return (
    <div className='body'>
      <div className='overlay'>
        <form onSubmit={hendleSubmit}>
          <div className='con'>
            <header className='head-form'>
              <h2>Log In</h2>
              <p>login here using your username and password</p>
            </header>
            <br />
            <div className='field-set'>
              <span className='input-item'>
                <i className='fa fa-user-circle'></i>
              </span>
              <input
                className='form-input'
                id='txt-input'
                type='text'
                placeholder='@UserName'
                required
              />

              <br />

              <span className='input-item'>
                <i className='fa fa-key'></i>
              </span>
              <input
                className='form-input'
                type='password'
                placeholder='Password'
                id='pwd'
                name='password'
                required
              />

              <span>
                <i
                  className='fa fa-eye'
                  aria-hidden='true'
                  type='button'
                  id='eye'></i>
              </span>

              <br />
              <button className='btn log-in'> Log In </button>
            </div>

            <div className='other'>
              <button className='btn submits frgt-pass'>Forgot Password</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
