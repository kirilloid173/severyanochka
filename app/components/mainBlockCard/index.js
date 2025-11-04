import ProductReviews from '../product-reviews';
import ProductCard from '../productCard';
import ReviewsBlock from '../reviewsBlock';
import PropertyCardImages from '../propertyCardImages';
import Image from 'next/image';
import Link from 'next/link';
import './index.scss';
import './mobile.scss';

export default async function MainBlockCard({
    title,
    article,
    stars,
    numberReviewsStars,
    discount,
    imagesMassive,
    priceWithCard,
    authorBrand,
    heightProduct,
    reviewsMassive,
}) {
    const res = await fetch('https://dummyjson.com/products?limit=4', {
        cache: 'no-store',
    });
    const dataOtherProducts = await res.json();

    return (
        <>
            <div className='main-block'>
                <p className='main-block__title'>{title}</p>
                <div className='main-block__info-about-card'>
                    <p className='info-about-card__article'>{article}</p>
                    <div className='info-about-card__reviews'>
                        <ProductReviews reviews_stars={stars} />
                        <a href='#block-reviews'>
                            <p className='reviews__number'>
                                {numberReviewsStars} отзыва
                            </p>
                        </a>
                    </div>
                    <div className='info-about-card__share'>
                        <Image
                            src={
                                '/images/svg/more_about_card/title_card/share_icon.svg'
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
                                '/images/svg/more_about_card/title_card/heart_icon.svg'
                            }
                            alt='heart'
                            width={24}
                            height={24}
                        />
                        <p>В избранное</p>
                    </div>
                </div>
                <div className='main-block__property-card'>
                    <PropertyCardImages
                        imagesMassive={imagesMassive}
                        discount={discount}
                    />
                    <div className='main-block__info-block'>
                        <div className='info-block__price-block'>
                            <div className='price-block__left-side'>
                                <p className='left-side__price'>
                                    {priceWithCard * 2} ₽
                                </p>
                                <p className='left-side__descr_price'>
                                    Обычная цена
                                </p>
                            </div>
                            <div className='price-block__right-side'>
                                <p className='right-side__price'>
                                    {priceWithCard} ₽
                                </p>
                                <div className='right-side__text-under-price'>
                                    <p className='text-under-price__text'>
                                        С картой Северяночки
                                    </p>
                                    <Image
                                        src={
                                            '/images/svg/card_page/main_block_info/info_icon.svg'
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
                                    '/images/svg/card_page/main_block_info/bell_off_icon.svg'
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
                                    {authorBrand}
                                </p>
                            </div>
                            <div className='table__column'>
                                <p className='column__text-left'>
                                    Страна производителя
                                </p>
                                <p className='column__text-right'>{title}</p>
                            </div>
                            <div className='table__column column-grey'>
                                <p className='column__text-left'>Упаковка</p>
                                <p className='column__text-right'>
                                    {heightProduct} г
                                </p>
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
                    {dataOtherProducts.products.map((item) => (
                        <Link key={item.id} href={`/products/${item.id}`}>
                            <ProductCard
                                key={item.id}
                                image_src={item.images[0]}
                                image_alt='product_other_buy'
                                price_type='default'
                                price_card={item.price}
                                price_default={item.price}
                                description_card={item.description}
                                reviews_stars={item.rating}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            {/* end recommendations block */}
            <div className='reviews-block'>
                <p className='reviews-block__title' id='block-reviews'>
                    Отзывы
                </p>
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
                        {reviewsMassive.map((item, index) => (
                            <ReviewsBlock
                                key={index}
                                name={item.reviewerName}
                                stars={item.rating}
                                date={item.date}
                                comment={item.comment}
                            />
                        ))}
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
                    {dataOtherProducts.products.map((item) => (
                        <Link key={item.id} href={`/products/${item.id}`}>
                            <ProductCard
                                key={item.id}
                                image_src={item.images[0]}
                                image_alt='product_other_buy'
                                price_card={item.price}
                                price_default={item.price}
                                description_card={item.description}
                                reviews_stars={item.rating}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
