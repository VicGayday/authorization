import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'


import {updateLogin, updatePassword, signIn} from '../../redux/reducers/auth'
import './Login.css'

const Login = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const login = useSelector(s => s.auth.login)
  const password = useSelector((s) => s.auth.password)
  const correctLogin = useSelector((s) => s.auth.correctLogin);
  const correctPassword = useSelector((s) => s.auth.correctPassword);

  const loginHandler = (event) => {
    event.preventDefault()
    if (login === correctLogin && password === correctPassword) {
      dispatch(signIn(true))
      history.push('/profile')
    }
  }


  return (
    <main>
      <section className="form-container">
        <form>
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => {
              dispatch(updateLogin(e.target.value));
            }}
            type="text"
            name="username"
            id="username"
            value={login}
            placeholder="Username"
          />

          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              dispatch(updatePassword(e.target.value));
            }}
            type="text"
            name="password"
            id="password"
            value={password}
            placeholder="******************"
          />
        </form>
        <button className="signin-button" type="button" onClick={loginHandler}>
          Sign In
        </button>
      </section>
    </main>
  );
}

export default Login;
