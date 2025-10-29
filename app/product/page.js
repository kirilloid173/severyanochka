import BreadCrumbs from '../components/breadcrumbs/BreadCrumbs';
import Footer from '../components/footer/index';
import Navbar from '../components/navbar/index';
import './index.scss';
export default function Product() {
    return (
        <>
            <Navbar />
            <div className='content'>
                <BreadCrumbs
                    first_link='Главная'
                    second_link='Каталог'
                    three_link='Молоко, сыр, яйцо'
                    four_link='Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г'
                />
            </div>
            <Footer />
        </>
    );
}
