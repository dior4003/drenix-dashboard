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
              <h2>Kirish</h2>
              <p>Drenix Academy admin paneliga kirish</p>
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
                placeholder='@Foydalanuvchi nomi'
                required
              />

              <br />

              <span className='input-item'>
                <i className='fa fa-key'></i>
              </span>
              <input
                className='form-input'
                type='password'
                placeholder='Parol'
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
              <button className='btn log-in'> Kirish </button>
            </div>

            <div className='other'>
              <button className='btn submits frgt-pass'>Parolni tiklash</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
