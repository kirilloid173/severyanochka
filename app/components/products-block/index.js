import Image from 'next/image';
import './index.scss';
import ProductCard from '../product-card';
export default function ProductsBlock() {
    return (
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
        </div>
    );
}
