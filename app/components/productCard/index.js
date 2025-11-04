import './index.scss';
import Image from 'next/image';
import ProductReviews from '../product-reviews';

export default function ProductCard({
    image_src,
    image_alt,
    discount,
    price_type,
    price_card,
    price_default,
    description_card,
    reviews_stars,
}) {
    const converted_description =
        description_card.length > 55
            ? description_card.slice(0, 55) + '...'
            : description_card;
    return (
        <div className='block-cards__card'>
            <div className='card__image-block'>
                <Image
                    src={image_src}
                    alt={image_alt}
                    width={272}
                    height={160}
                    style={{ objectFit: 'contain' }}
                    unoptimized
                />
                <Image
                    className='image-block__heart'
                    src={'/images/svg/card_block/heart_icon.svg'}
                    alt='heart'
                    width={24}
                    height={24}
                />
                {discount ? (
                    <p className='image-block__discount'>-{discount}%</p>
                ) : null}
            </div>
            <div className='image-block__price-line'>
                <div className='price-line__price-left'>
                    {price_card && price_type && price_type === 'default' ? (
                        <>
                            <p className='price-left__bold-price'>
                                {price_card} ₽
                            </p>
                        </>
                    ) : price_card || !price_type ? (
                        <>
                            <p className='price-left__bold-price'>
                                {price_card} ₽
                            </p>
                            <p className='price-left__descr-price'>С картой</p>
                        </>
                    ) : null}
                </div>
                {(price_default && price_type && price_type !== 'default') ||
                !price_type ? (
                    <div className='price-line__price-right'>
                        <p className='price-right__price'>
                            {price_default * 2} ₽
                        </p>
                        <p className='price-right__descr-price'>Обычная</p>
                    </div>
                ) : null}
            </div>
            <p className='card__description'>{converted_description}</p>
            <div className='card__stars'>
                <ProductReviews reviews_stars={reviews_stars} />
            </div>
            <button className='card__add-to-cart-button'>В корзину</button>
        </div>
    );
}
