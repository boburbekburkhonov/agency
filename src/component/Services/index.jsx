import React from 'react';
import ServicesList from '../ServicesList'
import './main.css'
import cofe from '../../assets/images/cofe.png'
import kubik from '../../assets/images/kubik.png'
import hour from '../../assets/images/hour.png'

function index(props) {
  return (
    <>
      <section className='services'>
        <div className="container">
         <div className='services-top'>
            <span className='services-span'>
            Neler <span className='services-span-blue'>Yapıyoruz?</span>
            </span>

            <h3 className='services-heading'>
            3 adımda çalışma sürecimiz
            </h3>

            <p className='services-desc'>
            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.
            </p>
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