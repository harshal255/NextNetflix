import React from 'react'
// import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 1000));

    const url = process.env.RAPID_KEY;


    const options = {
        method: 'GET',
        // url: 'https://netflix54.p.rapidapi.com/search/',
        // params: {
        //     query: 'stranger',
        //     offset: '0',
        //     limit_titles: '50',
        //     limit_suggestions: '20',
        //     lang: 'en'
        // },
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '91bc2b98f0mshc3ab2f6495a6a5dp1b3370jsn8abe23982e20',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const arrayData = data.titles;

    // console.log("--------------------------------------------------------------------------------------");

    // const main_data = data.titles[0].jawSummary;
    // console.log(main_data);
    // console.log("--------------------------------------------------------------------------------------");

    // console.log(main_data);





    return (

        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>Movies and Series page</h1>
                <div className={styles.card_section}>
                    {
                        arrayData.map((ele) => {
                            return (
                                <div className={styles.card} key={ele.jawSummary.id}>
                                    <div className={styles.card_image}>
                                        <Image src={ele.jawSummary.backgroundImage.url} alt={ele.jawSummary.title} width={250} height={200}></Image>
                                    </div>
                                    <div className={styles.card_data}>
                                        <h2>{ele.jawSummary.title}</h2>
                                        <p>
                                            {ele.jawSummary.synopsis}
                                        </p>
                                        <Link href={`/movie/${ele.jawSummary.id}`}>
                                            <button>
                                                Read More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>


    )
}

export default Movie



