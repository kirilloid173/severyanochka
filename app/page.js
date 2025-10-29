import styles from './page.module.css';
import Navbar from './components/navbar/index';
import Footer from './components/footer';
import ProductsPage from './pages/search';

export default function Home() {
    return (
        <>
            <Navbar />
            <ProductsPage />
            <Footer />
        </>
    );
}
