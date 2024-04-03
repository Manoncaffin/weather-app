import React from 'react'
import logoTransparent from "../../assets/logo_transparent.png";
import "../App/App.css";
import '../Days/Days.css';
import '../Weather/Weather.css';

function Header() {
    return (
      <header className="App-header">
        <img src= {logoTransparent} class="App-logo" alt="logo" />
      </header>
    );
  }
  
  export default Header;