import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'

const RouteComponent = () => {
  return (
  // const isAuth = false
  // return isAuth ? (
    <Switch>
      <Route exact path="/profile" component={Profile} />
    {/* </Switch> */}
  // ) : (
    {/* <Switch> */}
    <Route exact path="/" component={Login} />
    </Switch>
  );
}

export default RouteComponent