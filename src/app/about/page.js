import React from 'react'
import Hero from '../components/Hero'


const page = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
        <>

            <Hero title="OUR STORY" imageUrl="about1.svg"></Hero>

        </>
    )
}

export default page