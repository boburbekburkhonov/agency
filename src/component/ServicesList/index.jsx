import React from 'react';
import './main.css'

function index(props) {
  return (
    <>
        <li className='services-item'>
          <img src={props.img} alt="cofe" width="64" height="64" />

          <h3 className='services-list-heading'>
            {props.heading}
          </h3>

          <p className='services-list-desc'>
            {props.desc}
          </p>
        </li>
    </>
  );
}

export default index;