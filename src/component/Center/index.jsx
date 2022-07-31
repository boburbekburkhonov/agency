import React from 'react';
import DetayliBtn from '../DetayliBtn'
import './main.css'

function index(props) {
  return (
    <>
      <section className='center'>
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h3 className='center-heading'>
          Ürününüz veya hizmetiniz için en iyisini birlikte yapalım.
          </h3>

          <p className='center-desc'>
          360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.
          </p>

          <DetayliBtn />
        </div>
      </section>
    </>
  );
}

export default index;