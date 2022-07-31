import React from 'react';
import Hero from '../Hero'
import Services from '../Services'
import Center from '../Center'
import Option from '../Option'

function index(props) {

  return (
    <>
      <main className='main'>
        <Hero />
        <Services />
        <Center />
        <Option />
      </main>
    </>
  );
}

export default index;