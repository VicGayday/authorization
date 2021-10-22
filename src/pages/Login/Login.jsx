import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <main>
      <section className="form-container">
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Username" />
        </form>

        <form>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" placeholder="******************" />
        </form>
        <button className="signin-button" type="button">
          Sign In
        </button>
      </section>
    </main>
  );
}

export default Login;
