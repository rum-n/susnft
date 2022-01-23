import React from "react";
import './styles.css';
import logo from '../../assets/logo.png';

export default function Navbar() {

    return (
      <div className='navbar'>
        <div className="logo" >
          <img src={logo}/>
          <p className="beta">BETA</p>
        </div>
          <a href="https://tally.so/r/3jgR4w"><button className="submit-btn">Submit a project</button></a>
      </div>
    );
  }