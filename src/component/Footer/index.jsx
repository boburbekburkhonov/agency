import React from 'react';
import './main.css'

function index(props) {
  return (
    <>
      <footer className='footer'>
        <div className="container d-flex align-items-center justify-content-between">
          <ul className='footer-list list-unstyled m-0 p-0 d-flex align-items-center'>
            <li className='footer-item'>
              <a className='footer-item-link' href="#">
              Ana Sayfa
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-item-link' href="#">
              Kurumsal
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-item-link' href="#">
              Neler Yapıyoruz?
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-item-link' href="#">
              Projelerimiz
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-item-link' href="#">
              Blog
              </a>
            </li>
          </ul>

          <p className='footer-desc'>
          © 2021 Can Çevik. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default index;