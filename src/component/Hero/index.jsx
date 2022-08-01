import React, { useEffect } from 'react';
import Header from '../Header'
import DetayliBtn from '../DetayliBtn'
import './main.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function index() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='hero-background'>
      <Header />
      <section className='hero' data-aos="fade-up"
     data-aos-anchor-placement="top-center">
        <div className="container">
        <div className='hero-wrapper d-flex flex-column align-items-center justify-content-center'>
            <h1 className='hero-heading'>
            İşinize uygun <span className='hero-heading-blue'>Tasarım</span> ve <span className='hero-heading-blue'>
            Yazılımlar
            </span>
            </h1>

            <p className='hero-desc'>
            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.
            </p>

            <DetayliBtn />

            <div className='hero-bottom'>
              <h2 className='hero-bottom-heading'>
              Web sitesi ve Kurumsal Kimlik Tasarımları
              </h2>

              <p className='hero-bottom-desc'>
              Online dünyadaki yüzünüz olan web sitelerinizi tasarlar. E-ticaret siteleri dahil olmak üzere tüm ihyitaçlarınıza çözümler sunar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;