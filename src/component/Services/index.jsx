import React, { useEffect } from 'react';
import ServicesList from '../ServicesList'
import Text from '../Text'
import './main.css'
import cofe from '../../assets/images/cofe.png'
import kubik from '../../assets/images/kubik.png'
import hour from '../../assets/images/hour.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

function index(props) {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <section className='services' data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine">
        <div className="container">
         <div className='services-top'>
          <Text heading="3 adımda çalışma sürecimiz" desc="360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız." />
         </div>

         <ul className='services-list list-unstyled m-0 p-0 d-flex align-items-center justify-content-between'>
          <ServicesList
          img={cofe}
          heading={"Keşif ve Planlama"}
          desc={"Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır."}
          />

          <ServicesList
          img={kubik}
          heading={"Tasarım ve Geliştirme"}
          desc={"Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır."}
          />

        <ServicesList
          img={hour}
          heading={"Test ve Yayına Alma"}
          desc={"Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır."}
          />
        </ul>
        </div>
      </section>
    </>
  );
}

export default index;