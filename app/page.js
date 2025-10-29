import styles from './page.module.css';
import Navbar from './components/navbar/index';
import Footer from './components/footer';
import ProductsPage from './search-products';

export default function Home() {
    return (
        <>
            <Navbar />
            <ProductsPage />
            <Footer />
        </>
    );
}
