import React from 'react';
import Hero from '../Hero'
import Services from '../Services'
import Center from '../Center'
import Option from '../Option'
import News from '../News'
import Last from '../Last'

function index(props) {

  return (
    <>
      <main className='main'>
        <Hero />
        <Services />
        <Center />
        <Option />
        <News />
        <Last />
      </main>
    </>
  );
}

export default index;