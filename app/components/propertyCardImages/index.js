'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function PropertyCardImages({ imagesMassive, discount }) {
    const [srcMainImage, setSrcMainImage] = useState(imagesMassive[0]);

    const changeImage = (newSrc) => {
        setSrcMainImage(newSrc);
    };
    return (
        <>
            <div className='property-card__carousel'>
                {imagesMassive.map((image) => (
                    <Image
                        key={image}
                        src={image}
                        alt='product'
                        width={64}
                        height={86.4}
                        style={{ objectFit: 'contain' }}
                        unoptimized
                        onClick={() => changeImage(image)}
                    />
                ))}
            </div>
            <div className='main-block__main-image-block'>
                <Image
                    src={srcMainImage}
                    alt='big_image_card'
                    fill
                    style={{ objectFit: 'contain' }}
                    unoptimized
                />
                <p className='main-image-block__discount'>-{discount}%</p>
            </div>
        </>
    );
}
