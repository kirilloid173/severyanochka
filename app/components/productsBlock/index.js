import Image from 'next/image';
import './index.scss';
import ProductCard from '../productCard';
export default async function ProductsBlock() {
    const res = await fetch('https://dummyjson.com/products?limit=16', {
        cache: 'no-store',
    });
    const data = await res.json();

    return (
        <>
            <div className='block-cards'>
                {data.products.map((item) => (
                    <ProductCard
                        key={item.id}
                        image_src={item.images[0]}
                        image_alt='card_image'
                        discount={item.discountPercentage}
                        price_card={item.price}
                        price_default={item.price}
                        description_card={item.description}
                        reviews_stars={item.rating}
                    />
                ))}
            </div>
            <button className='load-more-cards'>Загрузить ещё</button>
        </>
    );
}
