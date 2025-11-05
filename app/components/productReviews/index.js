import Image from 'next/image';

export default function ProductReviews({ reviews_stars }) {
    return (
        <>
            {/* first star */}
            {reviews_stars === 0 || reviews_stars < 0.5 ? (
                <Image
                    src={'/images/svg/card_block/empty_star_icon.svg'}
                    alt='filled_star'
                    width={16}
                    height={16}
                />
            ) : reviews_stars === 0.5 || reviews_stars < 1 ? (
                <Image
                    src={'/images/svg/card_block/half_filled_star_icon.svg'}
                    alt='filled_star'
                    width={20}
                    height={20}
                />
            ) : reviews_stars === 1 || reviews_stars > 1 ? (
                <Image
                    src={'/images/svg/card_block/filled_star_icon.svg'}
                    alt='filled_star'
                    width={16}
                    height={16}
                />
            ) : null}
            {/* second star */}
            {reviews_stars === 1 || reviews_stars < 1.5 ? (
                <Image
                    src={'/images/svg/card_block/empty_star_icon.svg'}
                    alt='filled_star'
                    width={16}
                    height={16}
                />
            ) : reviews_stars === 1.5 || reviews_stars < 2 ? (
                <Image
                    src={'/images/svg/card_block/half_filled_star_icon.svg'}
                    alt='filled_star'
                    width={20}
                    height={20}
                />
            ) : reviews_stars === 2 || reviews_stars > 2 ? (
                <Image
                    src={'/images/svg/card_block/filled_star_icon.svg'}
                    alt='filled_star'
                    width={16}
                    height={16}
                />
            ) : null}
            {/* three star */}
            {reviews_stars === 2 || reviews_stars < 2 ? (
                <Image
                    src={'/images/svg/card_block/empty_star_icon.svg'}
                    alt='filled_star'
                    width={16}
                    height={16}
                />
            ) : reviews_stars === 2.5 || reviews_stars < 3 ? (
                <Image
                    src={'/images/svg/card_block/half_filled_star_icon.svg'}
                    alt='filled_star'
                    width={20}
                    height={20}
                />
            ) : reviews_stars === 3 || reviews_stars > 3 ? (
                <Image
                    src={'/images/svg/card_block/filled_star_icon.svg'}
                    alt='filled_star'
                    width={16}
                    height={16}
                />
            ) : null}
            {/* four star */}
            {reviews_stars === 3 || reviews_stars < 3 ? (
                <Image
                    src={'/images/svg/card_block/empty_star_icon.svg'}
                    alt='filled_star'
                    width={16}
                    height={16}
                />
            ) : reviews_stars === 3.5 || reviews_stars < 4 ? (
                <Image
                    src={'/images/svg/card_block/half_filled_star_icon.svg'}
                    alt='filled_star'
                    width={20}
                    height={20}
                />
            ) : reviews_stars === 4 || reviews_stars > 4 ? (
                <Image
                    src={'/images/svg/card_block/filled_star_icon.svg'}
                    alt='filled_star'
                    width={16}
                    height={16}
                />
            ) : null}
            {/* five star */}
            {reviews_stars === 4 || reviews_stars < 4 ? (
                <Image
                    src={'/images/svg/card_block/empty_star_icon.svg'}
                    alt='filled_star'
                    width={16}
                    height={16}
                />
            ) : reviews_stars === 4.5 || reviews_stars < 5 ? (
                <Image
                    src={'/images/svg/card_block/half_filled_star_icon.svg'}
                    alt='filled_star'
                    width={20}
                    height={20}
                />
            ) : reviews_stars === 5 ? (
                <Image
                    src={'/images/svg/card_block/filled_star_icon.svg'}
                    alt='filled_star'
                    width={16}
                    height={16}
                />
            ) : null}
        </>
    );
}
