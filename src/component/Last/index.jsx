import React, { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './main.css'
import woman from '../../assets/images/woman.png'
import star from '../../assets/images/star.png';
import AOS from 'aos';
import 'aos/dist/aos.css'

function index(props) {

  useEffect(() => {
    AOS.init()
  })

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <ul className='last-list list-unstyled m-0 p-0'>
    <li className='last-item'>
      <img src={woman} alt="woman" width="72" height="72" />
      <h3 className='last-item-heading'>
      Jane Cooper
      </h3>

      <p className='last-item-desc'>
      The Walt Disney Company
      </p>

      <p className='last-item-desc-big'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet feugiat donec sit morbi tristique massa enim. Consequat odio adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus faucibus quam. Quis commodo tortor aliquam tortor
      </p>

      <img src={star} alt="star" width="160" height="24" />
    </li>
  </ul>,

<ul className='last-list list-unstyled m-0 p-0'>
<li className='last-item'>
  <img src={woman} alt="woman" width="72" height="72" />
  <h3 className='last-item-heading'>
  Jane Cooper
  </h3>

  <p className='last-item-desc'>
  The Walt Disney Company
  </p>

  <p className='last-item-desc-big'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet feugiat donec sit morbi tristique massa enim. Consequat odio adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus faucibus quam. Quis commodo tortor aliquam tortor
  </p>

  <img src={star} alt="star" width="160" height="24" />
</li>
</ul>,

<ul className='last-list list-unstyled m-0 p-0'>
<li className='last-item'>
  <img src={woman} alt="woman" width="72" height="72" />
  <h3 className='last-item-heading'>
  Jane Cooper
  </h3>

  <p className='last-item-desc'>
  The Walt Disney Company
  </p>

  <p className='last-item-desc-big'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet feugiat donec sit morbi tristique massa enim. Consequat odio adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus faucibus quam. Quis commodo tortor aliquam tortor
  </p>

  <img src={star} alt="star" width="160" height="24" />
</li>
</ul>,

<ul className='last-list list-unstyled m-0 p-0'>
<li className='last-item'>
  <img src={woman} alt="woman" width="72" height="72" />
  <h3 className='last-item-heading'>
  Jane Cooper
  </h3>

  <p className='last-item-desc'>
  The Walt Disney Company
  </p>

  <p className='last-item-desc-big'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet feugiat donec sit morbi tristique massa enim. Consequat odio adipiscing est odio nibh. Nec scelerisque hendrerit in eu purus faucibus quam. Quis commodo tortor aliquam tortor
  </p>

  <img src={star} alt="star" width="160" height="24" />
</li>
</ul>
  ];

  return (
    <>
      <section className='last' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div className="container">
          <h3 className='last-heading'>
          Memnuniyetini bildiren müşterilerimiz
          </h3>

          <AliceCarousel autoPlay={true} infinite={true} autoPlayStrategy="all " animationDuration="2000" mouseTracking items={items} />
        </div>
      </section>
    </>
  );
}

export default index;