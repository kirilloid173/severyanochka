import ProductReviews from '../product-reviews';
import ProductCard from '../productCard';
import ReviewsBlock from '../reviewsBlock';
import './index.scss';
import Image from 'next/image';

export default function MainBlockCard() {
    return (
        <>
            <div className='main-block'>
                <p className='main-block__title'>
                    Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж,
                    Россия, 180 г
                </p>
                <div className='main-block__info-about-card'>
                    <p className='info-about-card__article'>арт. 371431</p>
                    <div className='info-about-card__reviews'>
                        <ProductReviews reviews_stars={2} />
                        <p className='reviews__number'>3 отзыва</p>
                    </div>
                    <div className='info-about-card__share'>
                        <Image
                            src={
                                'images/svg/more_about_card/title_card/share_icon.svg'
                            }
                            alt='share'
                            width={24}
                            height={24}
                        />
                        <p>Поделиться</p>
                    </div>
                    <div className='info-about-card__heart'>
                        <Image
                            src={
                                'images/svg/more_about_card/title_card/heart_icon.svg'
                            }
                            alt='heart'
                            width={24}
                            height={24}
                        />
                        <p>В избранное</p>
                    </div>
                </div>
                <div className='main-block__property-card'>
                    <div className='property-card__carousel'>
                        <Image
                            src={
                                '/images/png/card_page/main_block_info/oil_box_front_little.png'
                            }
                            alt='oil_box'
                            width={64}
                            height={86.4}
                        />
                        <Image
                            src={
                                '/images/png/card_page/main_block_info/oil_box_angle_little.png'
                            }
                            alt='oil_box'
                            width={64}
                            height={86.4}
                        />
                        <Image
                            src={
                                '/images/png/card_page/main_block_info/oil_box_angle_little.png'
                            }
                            alt='oil_box'
                            width={64}
                            height={86.4}
                        />
                        <Image
                            src={
                                '/images/png/card_page/main_block_info/oil_box_angle_little.png'
                            }
                            alt='oil_box'
                            width={64}
                            height={86.4}
                        />
                        <Image
                            src={
                                '/images/png/card_page/main_block_info/oil_box_front_little.png'
                            }
                            alt='oil_box'
                            width={64}
                            height={86.4}
                        />
                    </div>
                    <div className='main-block__main-image-block'>
                        <Image
                            src={
                                '/images/png/card_page/main_block_info/oil_box_front_big.png'
                            }
                            alt='big_image_card'
                            width={608}
                            height={496}
                        />
                        <p className='main-image-block__discount'>-50%</p>
                    </div>
                    <div className='main-block__info-block'>
                        <div className='info-block__price-block'>
                            <div className='price-block__left-side'>
                                <p className='left-side__price'>192,69 ₽</p>
                                <p className='left-side__descr_price'>
                                    Обычная цена
                                </p>
                            </div>
                            <div className='price-block__right-side'>
                                <p className='right-side__price'>108,99 ₽</p>
                                <div className='right-side__text-under-price'>
                                    <p className='text-under-price__text'>
                                        С картой Северяночки
                                    </p>
                                    <Image
                                        src={
                                            'images/svg/card_page/main_block_info/info_icon.svg'
                                        }
                                        alt='icon'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='info-block__button-cart'>
                            <Image
                                className='button-cart__icon'
                                src={
                                    '/images/svg/card_page/main_block_info/shopping_cart_icon.svg'
                                }
                                alt='cart-icon'
                                width={32}
                                height={32}
                            />
                            <p>В корзину</p>
                        </div>
                        <div className='info-block__bonus'>
                            <Image
                                src={
                                    '/images/svg/card_page/main_block_info/circle_half_green_icon.svg'
                                }
                                alt='half-circle'
                                width={24}
                                height={10.67}
                                className='bonus__half-circle'
                            />
                            <p>Вы получаете 10 бонусов</p>
                        </div>
                        <div className='info-block__notify'>
                            <Image
                                src={
                                    'images/svg/card_page/main_block_info/bell_off_icon.svg'
                                }
                                alt='bell'
                                width={23}
                                height={23}
                                className='notify__bell'
                            />
                            <p>Уведомить о снижении цены</p>
                        </div>
                        <div className='info-block__table'>
                            <div className='table__column column-grey'>
                                <p className='column__text-left'>Бренд</p>
                                <p className='column__text-right'>
                                    ПРОСТОКВАШИНО
                                </p>
                            </div>
                            <div className='table__column'>
                                <p className='column__text-left'>
                                    Страна производителя
                                </p>
                                <p className='column__text-right'>Россия</p>
                            </div>
                            <div className='table__column column-grey'>
                                <p className='column__text-left'>Упаковка</p>
                                <p className='column__text-right'>180 г</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End main block */}
            <div className='recommendations-block'>
                <p className='recommendations-block__title'>
                    С этим товаром покупают
                </p>
                <div className='recommendations-block__cards'>
                    <ProductCard
                        image_src='/images/png/card_block/peter_sausages_card.png'
                        image_alt='pancakes'
                        price_type='default'
                        price_card='44,50'
                        price_default='50,50'
                        description_card='Г/Ц Блинчики с мясом вес, Россия'
                        reviews_stars={2}
                    />
                    <ProductCard
                        image_src='/images/png/card_block/sausage_card.png'
                        image_alt='milk'
                        price_type='default'
                        price_card='44,50'
                        price_default='50,50'
                        description_card='Молоко ПРОСТОКВАШИНО паст. питьевое цельное отбо...'
                        reviews_stars={2}
                    />
                    <ProductCard
                        image_src='/images/png/card_block/hot_dog_card.png'
                        image_alt='sausages'
                        price_type='default'
                        price_card='44,50'
                        price_default='50,50'
                        description_card='Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчич...'
                        reviews_stars={2}
                    />
                    <ProductCard
                        image_src='/images/png/card_block/milk_card.png'
                        image_alt='hot_dog'
                        price_type='default'
                        price_card='44,50'
                        price_default='50,50'
                        description_card='Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сы...'
                        reviews_stars={2}
                    />
                </div>
            </div>
            {/* end recommendations block */}
            <div className='reviews-block'>
                <p className='reviews-block__title'>Отзывы</p>
                <div className='reviews-block__inner-content'>
                    <div className='inner-content__stars-left'>
                        <div className='stars-left__title-block'>
                            <ProductReviews reviews_stars={4} />
                            <p className='title-block__number-review'>4 из 5</p>
                        </div>
                        <div className='inner-content__count-reviews'>
                            <p>5</p>
                            <div className='count-reviews__stars'>
                                <ProductReviews reviews_stars={4} />
                            </div>
                            <p>1</p>
                        </div>
                        <div className='inner-content__count-reviews'>
                            <p>4</p>
                            <div className='count-reviews__stars'>
                                <ProductReviews reviews_stars={4} />
                            </div>
                            <p>1</p>
                        </div>
                        <div className='inner-content__count-reviews'>
                            <p>3</p>
                            <div className='count-reviews__stars'>
                                <ProductReviews reviews_stars={4} />
                            </div>
                            <p>0</p>
                        </div>
                        <div className='inner-content__count-reviews'>
                            <p>2</p>
                            <div className='count-reviews__stars'>
                                <ProductReviews reviews_stars={4} />
                            </div>
                            <p>0</p>
                        </div>
                        <div className='inner-content__count-reviews'>
                            <p>1</p>
                            <div className='count-reviews__stars'>
                                <ProductReviews reviews_stars={4} />
                            </div>
                            <p>1</p>
                        </div>
                    </div>
                    <div className='inner-content__block-messages'>
                        <ReviewsBlock
                            name='Татьяна'
                            stars={5}
                            date={'22.02.2020'}
                            comment='приятный вкус'
                        />
                        <ReviewsBlock
                            name='Мария'
                            stars={4}
                            date={'22.02.2020'}
                            comment='Масло среднее, есть вкуснее'
                        />
                        <ReviewsBlock
                            name='Алексей'
                            stars={1}
                            date={'22.02.2020'}
                            comment='Покупали в том числе в этом весе. Масло по вкусу и органолептическим свойствам совершенно не похоже на натуральное. Упаковка выглядит как напечатанная на дешёвом принтере. На наш взгляд продукт является подделкой или контрафактной продукцией. Просим разобраться.'
                        />
                        <div className='inner-content__your-comment-block'>
                            <div className='your-comment-block__place-stars'>
                                <p className='place-stars__title'>
                                    Ваша оценка
                                </p>
                                <div className='place-stars__stars'>
                                    <Image
                                        src='/images/svg/card_page/reviews/empty_star.svg'
                                        alt='star'
                                        width={24}
                                        height={24}
                                    />
                                    <Image
                                        src='/images/svg/card_page/reviews/empty_star.svg'
                                        alt='star'
                                        width={24}
                                        height={24}
                                    />
                                    <Image
                                        src='/images/svg/card_page/reviews/empty_star.svg'
                                        alt='star'
                                        width={24}
                                        height={24}
                                    />
                                    <Image
                                        src='/images/svg/card_page/reviews/empty_star.svg'
                                        alt='star'
                                        width={24}
                                        height={24}
                                    />
                                    <Image
                                        src='/images/svg/card_page/reviews/empty_star.svg'
                                        alt='star'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </div>
                            <textarea
                                className='your-comment-block__textarea'
                                placeholder='Отзыв'
                                maxLength={750}
                            />
                            <button className='your-comment-block__send-review-button'>
                                Отправить отзыв
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* end reviews block */}
            <div className='discount-block'>
                <div className='discount-block__title-block'>
                    <p className='title-block__title'>Акции</p>
                    <div className='title-block__button-all-discounts'>
                        <p>Все акции</p>
                        <Image
                            src={
                                '/images/svg/card_page/discounts/arrow_right_icon.svg'
                            }
                            alt='arrow'
                            width={7}
                            height={13}
                            className='button-all-discounts__arrow'
                        />
                    </div>
                </div>
                <div className='discount-block__cards'>
                    <ProductCard
                        image_src='/images/png/card_block/pancakes_card.png'
                        image_alt='hot_dog'
                        price_card='44,50'
                        price_default='50,50'
                        description_card='Г/Ц Блинчики с мясом вес, Россия'
                        reviews_stars={2}
                    />
                    <ProductCard
                        image_src='/images/png/card_block/milk_card.png'
                        image_alt='hot_dog'
                        price_card='44,50'
                        price_default='50,50'
                        description_card='Молоко ПРОСТОКВАШИНО паст. питьевое цельное отбо...'
                        reviews_stars={3}
                    />
                    <ProductCard
                        image_src='/images/png/card_block/sausage_card.png'
                        image_alt='hot_dog'
                        price_card='44,50'
                        price_default='50,50'
                        description_card='Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчич...'
                        reviews_stars={5}
                    />
                    <ProductCard
                        image_src='/images/png/card_block/hot_dog_card.png'
                        image_alt='hot_dog'
                        price_card='44,50'
                        price_default='50,50'
                        description_card='Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сы...'
                        reviews_stars={4.5}
                    />
                </div>
            </div>
        </>
    );
}
