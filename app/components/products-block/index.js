import Image from 'next/image';
import './index.scss';
import ProductCard from '../product-card';
export default function ProductsBlock() {
    return (
        <>
            <div className='block-cards'>
                <ProductCard
                    image_src='/images/png/card_block/pancakes_card.png'
                    image_alt='pancakes'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Г/Ц Блинчики с мясом вес, Россия'
                    reviews_stars={2}
                />
                <ProductCard
                    image_src='/images/png/card_block/milk_card.png'
                    image_alt='milk'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Молоко ПРОСТОКВАШИНО паст. питьевое цельное отбо...'
                    reviews_stars={3}
                />
                <ProductCard
                    image_src='/images/png/card_block/sausage_card.png'
                    image_alt='sausages'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчич...'
                    reviews_stars={5}
                />
                <ProductCard
                    image_src='/images/png/card_block/hot_dog_card.png'
                    image_alt='hot_dog'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сы...'
                    reviews_stars={4.5}
                />
                <ProductCard
                    image_src='/images/png/card_block/pancakes_card.png'
                    image_alt='pancakes'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Г/Ц Блинчики с мясом вес, Россия'
                    reviews_stars={2}
                />
                <ProductCard
                    image_src='/images/png/card_block/milk_card.png'
                    image_alt='milk'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Молоко ПРОСТОКВАШИНО паст. питьевое цельное отбо...'
                    reviews_stars={3}
                />
                <ProductCard
                    image_src='/images/png/card_block/sausage_card.png'
                    image_alt='sausages'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчич...'
                    reviews_stars={5}
                />
                <ProductCard
                    image_src='/images/png/card_block/hot_dog_card.png'
                    image_alt='hot_dog'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сы...'
                    reviews_stars={4.5}
                />
                <ProductCard
                    image_src='/images/png/card_block/pancakes_card.png'
                    image_alt='pancakes'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Г/Ц Блинчики с мясом вес, Россия'
                    reviews_stars={2}
                />
                <ProductCard
                    image_src='/images/png/card_block/milk_card.png'
                    image_alt='milk'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Молоко ПРОСТОКВАШИНО паст. питьевое цельное отбо...'
                    reviews_stars={3}
                />
                <ProductCard
                    image_src='/images/png/card_block/sausage_card.png'
                    image_alt='sausages'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчич...'
                    reviews_stars={5}
                />
                <ProductCard
                    image_src='/images/png/card_block/hot_dog_card.png'
                    image_alt='hot_dog'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сы...'
                    reviews_stars={4.5}
                />
                <ProductCard
                    image_src='/images/png/card_block/pancakes_card.png'
                    image_alt='pancakes'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Г/Ц Блинчики с мясом вес, Россия'
                    reviews_stars={2}
                />
                <ProductCard
                    image_src='/images/png/card_block/milk_card.png'
                    image_alt='milk'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Молоко ПРОСТОКВАШИНО паст. питьевое цельное отбо...'
                    reviews_stars={3}
                />
                <ProductCard
                    image_src='/images/png/card_block/sausage_card.png'
                    image_alt='sausages'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчич...'
                    reviews_stars={5}
                />
                <ProductCard
                    image_src='/images/png/card_block/hot_dog_card.png'
                    image_alt='hot_dog'
                    discount='-50%'
                    price_card='44,50'
                    price_default='50,50'
                    description_card='Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сы...'
                    reviews_stars={4.5}
                />
            </div>
            <button className='load-more-cards'>Загрузить ещё</button>
        </>
    );
}
