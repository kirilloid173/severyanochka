import Link from 'next/link';
import ProductCard from '../productCard';
import './index.scss';

export default async function ProductsBlock({ searchByIdCategory }) {
    let resultData = {};

    if (searchByIdCategory) {
        const res = await fetch(
            `https://dummyjson.com/products/category/${searchByIdCategory}`,
            {
                cache: 'no-store',
            }
        );
        const data = await res.json();
        resultData = data;
    } else {
        const res = await fetch('https://dummyjson.com/products?limit=16', {
            cache: 'no-store',
        });
        const data = await res.json();
        resultData = data;
    }

    return (
        <>
            <div className='block-cards'>
                {resultData.products.map((item, index) => (
                    <Link key={index} href={`/products/${item.id}`}>
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
                    </Link>
                ))}
            </div>
            <button className='load-more-cards'>Загрузить ещё</button>
        </>
    );
}
