import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateLogin, updatePassword, signIn} from '../../redux/reducers/auth'
import './Login.css'

const Login = () => {

  const dispatch = useDispatch()
  const login = useSelector(s => s.auth.login)
  const password = useSelector((s) => s.auth.password);

  return (
    <main>
      <section className="form-container">
        <form>
          <label htmlFor="username">Username</label>
          <input
          onChange ={(e) => {dispatch(updateLogin(e.target.value))}}
          type="text"
          name="username"
          id="username"
          value={login}
          placeholder="Username" />
        </form>

        <form>
          <label htmlFor="password">Password</label>
          <input
          onChange ={(e) => {dispatch(updatePassword(e.target.value))}}
          type="text"
          name="password"
          id="password"
          value={password}
          placeholder="******************"
          />
        </form>
        <button onClick={() => {dispatch(signIn())}} className="signin-button" type="button">
          Sign In
        </button>
      </section>
    </main>
  );
}

export default Login;
