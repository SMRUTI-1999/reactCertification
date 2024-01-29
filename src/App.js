import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from './components/Orders';
import Products from './components/Products';
import Users from './components/Users';
import Login from './components/Login';
import React, { useState } from 'react';

function App() {

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [isLoggedin, setIsLoggedin] = useState(false)


    const onLogin = () => {
        if (username && password) {
            if (username === password) {
                alert("Login successful")
                setIsLoggedin(true)
            } else {
                alert("Please enter valid credentials")
            }
        }
    }

  return (
    <>
      <Router>
        <Navbar status={isLoggedin}/>
        <Routes>
          <Route exact path = '/' element={<Login username={username} setUsername={setUsername} password = {password} setPassword={setPassword} fun = {onLogin} isLoggedin = {isLoggedin} />} />
          <Route exact path = '/orders' element={<Orders/>} />
          <Route exact path = '/products' element={<Products/>} />
          <Route exact path = '/users' element={<Users/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
