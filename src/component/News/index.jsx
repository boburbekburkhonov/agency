import React, { useEffect } from 'react';
import Text from '../Text'
import Card from '../Card'
import './main.css'
import computer from '../../assets/images/computer.png'
import moon from '../../assets/images/moon.png'
import mountain from '../../assets/images/mountain.png'
import water from '../../assets/images/water.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

function index(props) {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <section className='news' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className="container">
          <div className="news-top">

            <Text
            heading="Öğreniyoruz, sizinle paylaşıyoruz."
            desc="Alanında uzman yazar arkadaşlarımızın, bilgi paylaşımı yaptıkları yazıları inceleyelim."
            />

            <ul className='news-top-list list-unstyled p-0 d-flex align-items-center'>
              <li className='news-top-item'>
                <a className='news-top-link' href="#">
                Hepsini Gör
                </a>
              </li>

              <li className='news-top-item'>
                <a className='news-top-link' href="#">
                Web Tasarım
                </a>
              </li>

              <li className='news-top-item'>
                <a className='news-top-link' href="#">
                Kurumsal Kimlik Tasarımı
                </a>
              </li>

              <li className='news-top-item'>
                <a className='news-top-link' href="#">
                SEO
                </a>
              </li>

              <li className='news-top-item'>
                <a className='news-top-link' href="#">
                Dijital Pazarlama
                </a>
              </li>
            </ul>
          </div>

          <ul className='news-list list-unstyled d-flex align-items-center justify-content-between'>
          <Card
          img={computer}
          span="Dijital Pazarlama"
          heading="Sosyal CRM Nedir? Sosyal CRM Avantajları Nelerdir?"
          desc="Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal..."
          height="170"
          />

          <Card
          img={moon}
          span="Dijital Pazarlama"
          heading="Dijital PR Nedir? Dijital PR Neden Gereklidir?"
          desc="Dijital PR, sosyal medya platformları ve web siteleri üzerinden işletmelerin..."
          height="185"
          />

          <Card
          img={mountain}
          span="Kurumsal Kimlik Tasarımı"
          heading="Dijital Ajans Nedir? Doğru Dijital Ajans Nasıl Seçilir?"
          desc="Bir dijital ajans arama motorları, e ticaret, web sitesi tasarımı gibi birçok alanda hizmet..."
          height="170"
          />

          <Card
          img={water}
          span="Dijital Pazarlama"
          heading="Online İtibar Yönetimi Nedir?"
          desc="Online itibar yönetimi, markanızla dijital dünyada ortaya çıkan algıyı profesyonel şekilde yönetmek..."
          height="185"
          />
          </ul>
        </div>
      </section>
    </>
  );
}

export default index;