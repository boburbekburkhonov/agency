import React, { useEffect } from 'react';
import DetayliBtn from '../DetayliBtn'
import './main.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function index(props) {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <section className='center' data-aos="fade-up"
     data-aos-duration="5000">
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