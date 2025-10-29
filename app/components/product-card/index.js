import Image from 'next/image';
import ProductReviews from '../product-reviews';

export default function ProductCard({
    image_src,
    image_alt,
    discount,
    price_card,
    price_default,
    description_card,
    reviews_stars,
}) {
    return (
        <div className='block-cards__card'>
            <div className='card__image-block'>
                <Image
                    src={image_src}
                    alt={image_alt}
                    width={272}
                    height={160}
                />
                <Image
                    className='image-block__heart'
                    src={'/images/svg/card_block/heart_icon.svg'}
                    alt='heart'
                    width={24}
                    height={24}
                />
                <p className='image-block__discount'>{discount}</p>
            </div>
            <div className='image-block__price-line'>
                <div className='price-line__price-left'>
                    <p className='price-left__bold-price'>{price_card} ₽</p>
                    <p className='price-left__descr-price'>С картой</p>
                </div>
                <div className='price-line__price-right'>
                    <p className='price-right__price'>{price_default} ₽</p>
                    <p className='price-right__descr-price'>Обычная</p>
                </div>
            </div>
            <p className='card__description'>{description_card}</p>
            <div className='card__stars'>
                <ProductReviews reviews_stars={reviews_stars} />
            </div>
            <button className='card__add-to-cart-button'>В корзину</button>
        </div>
    );
}
