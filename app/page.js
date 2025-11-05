import Navbar from './/components/navbar/index';
import Footer from './components/footer';
import ProductsPage from './components/productsCards/index';

export default function Home() {
    return (
        <>
            <Navbar />
            <ProductsPage />
            <Footer />
        </>
    );
}
