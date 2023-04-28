import React from 'react';
import Hero from './components/Hero';


const page = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return <>
    
    <Hero title="LET'S WATCH MOVIE TOGETHER" imageUrl="/home.svg" />
  </>


};


export default page



