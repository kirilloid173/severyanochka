import Image from 'next/image';
import './index.scss';
export default function ProductsBlock() {
    return (
        <div className='block-cards'>
            <div className='block-cards__card'>
                <div className='card__image-block'>
                    <Image
                        src={'/images/png/card_block/pancakes_card.png'}
                        alt='pancakes'
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
                    <p className='image-block__discount'>-50%</p>
                </div>
                <div className='image-block__price-line'>
                    <div className='price-line__price-left'>
                        <p className='price-left__bold-price'>44,50 ₽</p>
                        <p className='price-left__descr-price'>С картой</p>
                    </div>
                    <div className='price-line__price-right'>
                        <p className='price-right__price'>50,50 ₽</p>
                        <p className='price-right__descr-price'>Обычная</p>
                    </div>
                </div>
                <p className='card__description'>
                    Г/Ц Блинчики с мясом вес, Россия
                </p>
                <div className='card__stars'>
                    <Image
                        src={'/images/svg/card_block/filled_star_icon.svg'}
                        alt='filled_star'
                        width={16}
                        height={16}
                    />
                    <Image
                        src={'/images/svg/card_block/filled_star_icon.svg'}
                        alt='filled_star'
                        width={16}
                        height={16}
                    />
                    <Image
                        src={'/images/svg/card_block/empty_star_icon.svg'}
                        alt='filled_star'
                        width={16}
                        height={16}
                    />
                    <Image
                        src={'/images/svg/card_block/empty_star_icon.svg'}
                        alt='filled_star'
                        width={16}
                        height={16}
                    />
                    <Image
                        src={'/images/svg/card_block/empty_star_icon.svg'}
                        alt='filled_star'
                        width={16}
                        height={16}
                    />
                </div>
                <button className='card__add-to-cart-button'>В корзину</button>
            </div>
        </div>
    );
}
