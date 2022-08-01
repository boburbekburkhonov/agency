import React from 'react';
import './main.css'

function index(props) {
  return (
    <>
      <li className='news-item'>
        <img src={props.img} alt="computer" width="249" height={props.height} />

        <span className='news-item-span'>
          {props.span}
        </span>

        <h3 className='news-item-heading'>
        {props.heading}
        </h3>

        <p className='news-item-desc'>
        {props.desc}
        </p>

        <span className='news-item-span-bottom'>
          Devamını Oku
        </span>
      </li>
    </>
  );
}

export default index;