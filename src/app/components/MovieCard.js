import React from 'react';
import styles from '@/app/styles/common.module.css';
import Image from 'next/image';
import { Link } from 'next/link';

const MovieCard = ( ele ) => {
    const { id, type, title, synopsis } = ele.jawSummary;
    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <Image src={ele.jawSummary.backgroundImage.url} alt={title} width={250} height={200}></Image>
            </div>
            <div className={styles.card_data}>
                <h2>{title}</h2>
                <p>
                    {synopsis}
                </p>
                <Link href={`/movie/${id}`}>
                    <button>
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    )
}


export default MovieCard


