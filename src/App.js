import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import UserContext from "./auth/UserContext";
import Routes from "./routes/Routes";
import Navigation from "./routes/Navigation";
import JoblyApi from "./api/api";
import jwt from "jsonwebtoken";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userDataRetrieved, setUserDataRetrieved] = useState(false);
  const [appliedJobIds, setAppliedJobIds] = useState(new Set([]));

  useEffect(function storeTokenInLS() {
    const initialValue = localStorage.getItem("token") || null;

    if (initialValue) {
      localStorage.removeItem("token");
    } else {
      localStorage.setItem("token", token)
    }

    console.log(`token in LS: ${localStorage.getItem("token")}`);
    console.log(`currentUser: ${currentUser}`);
  }, [token, currentUser])


  const register = async (data) => {
    try {
      let token = await JoblyApi.register(data);
      setToken(token);
      return {success: true};
    } catch (err) {
      console.error("Registration Failed", err);
      return {success: false, err};
    }
  }
  
  const login = async (data) => {
    try {
      let token = await JoblyApi.login(data);
      setToken(token);
      return {success: true};
    } catch (err) {
      console.error("Login Failed", err);
      return {success: false, err};
    }
  }
  
  const logout = () => {
    setCurrentUser(null);
    setToken(null);
    console.log(`LO currentUser ${currentUser}`);  
  }

  useEffect(function getUserData() {
    const getCurrentUser = async () => {
      if (token) {
        try {
          JoblyApi.token = token;
          let { username } = jwt.decode(token);
          let currentUser = await JoblyApi.getCurrentUser(username);
          // console.log(`HOOK currentUser: ${currentUser}`);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("Problem retrieving user data", err);
          setCurrentUser(null);
        }
      }
      setUserDataRetrieved(true);
    }
    setUserDataRetrieved(false);
    getCurrentUser();
  }, [token]);

  const hasApplied = (id) => {
    return appliedJobIds.has(id);
  }

  const apply = (id) => {
    if (hasApplied(id)) return;
    JoblyApi.apply(currentUser.username, id);
    setAppliedJobIds(new Set([...appliedJobIds, id]));
  }

  if (!userDataRetrieved) return "App Loading...";

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser, hasApplied, apply }}>
        <div className="App">
          <Navigation logout={logout} />
          <Routes login={login} register={register} />
        </div>
      </ UserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
