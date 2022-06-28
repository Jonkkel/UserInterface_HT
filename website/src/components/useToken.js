import { useState } from 'react';

function useToken() {

  const getToken = () => {
    const userToken = localStorage.getItem('token');
    return userToken && userToken
  }

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) =>  {
    console.log("wuhuu");
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  }

  return {
    saveToken,
    token,
    removeToken
  }

}

export default useToken;