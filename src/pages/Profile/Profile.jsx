import React from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {

  const login = useSelector((s) => s.auth.correctLogin)

  return (
    <h1>{login}</h1>
  );
}

export default Profile;
