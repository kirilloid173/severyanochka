import Image from 'next/image';
import ProductReviews from '../product-reviews';
import './index.scss';
export default function ReviewsBlock({ name, stars, date, comment }) {
    return (
        <div className='inner-content__authors-reviews'>
            <div className='authors-reviews__review'>
                <div className='review__author'>
                    <Image
                        src={'images/svg/card_page/reviews/user_logo_icon.svg'}
                        alt='user'
                        width={16}
                        height={16}
                        className='author__logo'
                    />
                    <p className='author__name'>{name}</p>
                </div>
                <div className='review__date'>
                    <div className='date__stars'>
                        <ProductReviews reviews_stars={stars} />
                    </div>
                    <p className='date__date-number'>{date}</p>
                </div>
                <p className='review__comment'>{comment}</p>
            </div>
        </div>
    );
}
