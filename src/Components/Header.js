import React, { useEffect, useState } from 'react'
import "./Header.css"
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home")
    } else if (location.pathname === "/add") {
      setActiveTab("AddContact");
    } else if (location.pathname === "/about") {
      setActiveTab("About")
    }
  }, [location])
  return (
    <div className='header'>
      <p className='logo'>Contact App</p>
      <div className='header-right'>
        <Link to="/" >
          <p className={` ${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}>
            <b className='tab1' style={{ marginLeft: "10px", backgroundColor: "green", padding: "10px", borderRadius: "15px" }}>Home</b>
          </p>
        </Link>
        <Link to="/about" >
          <p className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}>
            <b style={{ marginLeft: "10px", backgroundColor: "green", padding: "10px", borderRadius: "15px" }}>About</b>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Header


