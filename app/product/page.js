import BreadCrumbs from '../components/breadcrumbs/BreadCrumbs';
import Footer from '../components/footer/index';
import Navbar from '../components/navbar/index';
import './index.scss';
export default function Product() {
    return (
        <>
            <Navbar />
            <div className='content'>
                <BreadCrumbs />
            </div>
            <Footer />
        </>
    );
}
