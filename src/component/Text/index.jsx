import React from 'react';
import './main.css'

function index(props) {
  return (
    <>
      <span className='services-span'>
        Neler <span className='services-span-blue'>Yapıyoruz?</span>
        </span>

        <h3 className='services-heading'>
          {props.heading}
        </h3>

        <p className='services-desc'>
          {props.desc}
        </p>
    </>
  );
}

export default index;