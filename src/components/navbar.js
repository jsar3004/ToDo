import React from "react";
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './navbar.css';
export default function Navbar(){
return(
       <>
       <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
   
    <div className=" navbar-collapse d-flex justify-content-around" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="/#">ToDo</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
      <form className="d-flex justify-content-end">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <NotificationsIcon/>
      <SettingsIcon/>
      <AccountCircleIcon/>
      </form> 
    </div>
  </div>
</nav>
</>
)}