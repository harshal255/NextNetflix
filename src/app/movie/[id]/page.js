import React from 'react';
import styles from '@/app/styles/common.module.css';
import { Arapey } from 'next/font/google';
import Image from 'next/image';

const page = async ({ params }) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;



    const options = {
        method: 'GET',

        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '91bc2b98f0mshc3ab2f6495a6a5dp1b3370jsn8abe23982e20',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const arrayData = data[0].details;
    // const availability = arrayData.availability;
    // const summary = arrayData.summary;
    // const jawSummary = arrayData.jawSummary;
    console.log(arrayData);
    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}>   Netflix \ <span> {arrayData.type} </span> </h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={arrayData.backgroundImage.url} alt={arrayData.title} width={600} height={300} />
                </div>
                <div>
                    <h1>{arrayData.title}</h1>
                    <p>{arrayData.synopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default page