import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs';
import Footer from '../../components/footer/index';
import Navbar from '../../components/navbar/index';
import MainBlockCard from '../../components/mainBlockCard';
import './index.scss';

export default async function ProductPage({ params }) {
    const { id } = await params;

    const res = await fetch(`https://dummyjson.com/products/${id}`, {
        cache: 'no-store',
    });
    const data = await res.json();

    return (
        <>
            <Navbar />
            <div className='content'>
                <BreadCrumbs
                    first_link='Главная'
                    second_link='Каталог'
                    three_link={data.tags?.[0] ? data.tags[0] : undefined}
                    four_link={data.tags?.[1] ? data.tags[1] : undefined}
                    five_link={data.tags?.[2] ? data.tags[2] : undefined}
                />
                <MainBlockCard
                    title={data.title}
                    article={data.sku}
                    stars={data.rating}
                    numberReviewsStars={data.reviews.length}
                    discount={data.discountPercentage}
                    imagesMassive={data.images}
                    priceWithCard={data.price}
                    authorBrand={data.brand}
                    heightProduct={data.dimensions.height}
                    reviewsMassive={data.reviews}
                />
            </div>
            <Footer />
        </>
    );
}
