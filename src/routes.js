import React from 'react'
import {Switch, Route} from 'react-router-dom'
import { useSelector } from "react-redux";

import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'

const RouteComponent = () => {

  const isAuth = useSelector((s) => s.auth.isAuth);

    return isAuth ? (
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Login} />
      </Switch>
    ) : (
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    );
}

export default RouteComponent