import React from 'react';
import './main.css'
import img from '../../assets/images/option.png'

function index(props) {
  return (
    <>
      <section className='option'>
        <div className="container">
         <div className='services-top'>
              <span className='services-span'>
              Neler <span className='services-span-blue'>Yapıyoruz?</span>
              </span>

              <h3 className='services-heading'>
              Sizin için neler yapıyoruz?
              </h3>

              <p className='services-desc'>
              360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.
              </p>
          </div>

        <div className='d-flex align-items-center justify-content-between'>
           <img src={img} alt="book" width="666" height="697" />

          <div className='option-left'>
            <div className="option-bottom">
              <h3 className='option-bottom-heading'>
              Sizin için neler yapabiliriz beraber bakalım.
              </h3>

              <p className='option-bottom-desc'>
              Tüm platformlarda sunduğumuz, web tasarım hizmetimiz ile ilgili bilgiler edinelim.
              </p>

              <ul className='option-bottom-list list-unstyled m-0 p-0'>
                <li className='option-bottom-item option-bottom-item-active'>
                  <h4 className='option-bottom-list-heading'>
                  Web Tasarım
                  </h4>

                  <p className='option-bottom-list-desc'>
                  Var olan veya yeni kurulan işletmenizin, modern bir kurumsal kimliğe sahip olması için web sitesi.
                  </p>
                </li>

                <li className='option-bottom-item'>
                  <h4 className='option-bottom-list-heading'>
                  Dijital Pazarlama
                  </h4>

                  <p className='option-bottom-list-desc'>
                  Web sitenizin veya işletmenizin, daha popüler hale gelmesi için çeşitli hizmetler sunuyoruz.
                  </p>
                </li>

                <li className='option-bottom-item'>
                  <h4 className='option-bottom-list-heading'>
                  Prodüksiyon
                  </h4>

                  <p className='option-bottom-list-desc'>
                  İşletmenizin tanıtımının daha güzel hale gelmesi için, fotoğraf çekimi ve prodüksiyon yapıyoruz.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default index;