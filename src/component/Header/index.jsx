import React from 'react';
import Navbar from '../Navbar'
import logo from '../../assets/images/logo.svg'
import './main.css'


function index() {
  return (
    <>
      <header className='header'>
        <div className="container d-flex align-items-center justify-content-between">
          <a className='header-link' href="#">
            <img src={logo} alt="" />
          </a>

          <Navbar />
        </div>
      </header>
    </>
  );
}

export default index;