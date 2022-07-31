import React from 'react';
import './main.css'

function index() {
  return (
    <>
      <nav className='sitenav d-flex align-items-center'>
        <ul className='sitenav-list list-unstyled p-0 d-flex align-items-center'>
          <li className='sitenav-item'>
            <a className='sitenav-link' href="#">
              Ana Sayfa
            </a>
          </li>

          <li className='sitenav-item'>
            <a className='sitenav-link' href="#">
            Kurumsal
            </a>
          </li>

          <li className='sitenav-item'>
            <a className='sitenav-link' href="#">
            Neler Yapıyoruz?
            </a>
          </li>

          <li className='sitenav-item'>
            <a className='sitenav-link' href="#">
            Blog
            </a>
          </li>
        </ul>

        <select className='sitenav-select me-4' name="language">
          <option value="eng">EN</option>
          <option value="uz">UZ</option>
        </select>

        <a className='sitenav-btn' href="#">
        Müşteri Girişi
        </a>
      </nav>
    </>
  );
}

export default index;