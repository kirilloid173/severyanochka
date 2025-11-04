import Navbar from '../../../components/navbar/index';
import Footer from '../../../components/footer';
import ProductsPage from '../../../components/productsCards/index';

export default async function ProductsListPage({ params }) {
    const { id } = await params;

    return (
        <>
            <Navbar />
            <ProductsPage searchByIdCategory={id} />
            <Footer />
        </>
    );
}
